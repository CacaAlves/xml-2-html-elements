import { useState } from 'react';
import { parse, validate } from 'fast-xml-parser';
import { validate as validateOnSchema } from 'jsonschema'
import jsonSchema from './../assets/json-scheme/RLI_LOTE_scheme';
import './Form.css';

const Form = ({ setXmlData }) => {
    const [input, setInput] = useState('');

    const validateXmlOnSyntactAndConvert2Json = (xmlData) => {
        const options = {
            attributeNamePrefix: "@_",
            attrNodeName: "attr", //default is 'false'
            textNodeName: "#text",
            ignoreAttributes: true,
            ignoreNameSpace: false,
            allowBooleanAttributes: false,
            parseNodeValue: true,
            parseAttributeValue: false,
            trimValues: true,
            cdataTagName: "__cdata", //default is 'false'
            cdataPositionChar: "\\c",
            parseTrueNumberOnly: false,
            numParseOptions: {
                hex: true,
                leadingZeros: true,
                //skipLike: /\+[0-9]{10}/
            },
            arrayMode: false, //"strict"
            // attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }),//default is a=>a
            // tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
            stopNodes: ["parse-me-as-string"],
            alwaysCreateTextNode: false
        };

        if (validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
            return parse(xmlData, options);
        } else {
            throw new Error("Input validation error");
        }

    };


    const handleSubmit = (e) => {
        let jsonData;
        try {
            jsonData = validateXmlOnSyntactAndConvert2Json(input);
        } catch (err) {
            alert("Erro: erro sintático nos dados");
            e.preventDefault();
            return;
        }

        const errors = validateOnSchema(jsonData, jsonSchema).errors;
        console.log(errors)
        if (errors.length === 0) {
            setXmlData(jsonData);
            window.location.href = '/data-visualization';
        }
        else {
            alert("Erro: dados não correspodem ao modelo requerido");
        }

        e.preventDefault();
    };

    return (
        <main id="main-form">
            <h1>Licença de Importação</h1>

            <form className='form' onSubmit={handleSubmit}>
                <aside>
                    Form
                </aside>
                <textarea id="xmlData" name="xmlData"
                    value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Enviar</button>
            </form>
        </main>
    );
};

export default Form;