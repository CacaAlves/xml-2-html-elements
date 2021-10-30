import { parse, validate } from 'fast-xml-parser';

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
            skipLike: /\+[0-9]{10}/
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

export default validateXmlOnSyntactAndConvert2Json;