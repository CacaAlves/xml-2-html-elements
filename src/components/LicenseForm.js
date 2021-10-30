import './LicenseForm.css'

const LicenseForm = ({ xmlData, setXmlData, setRenderedComponent }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setRenderedComponent('Data Visualization')
    };

    return (
        <main id="main-form">
            <h1>Licença de Importação</h1>

            <form className='form' onSubmit={handleSubmit}>
                <aside>
                    Form
                </aside>
                <textarea id="xmlData" name="xmlData"
                    value={xmlData} onChange={(e) => setXmlData(e.target.value)} />
                <button type='submit'>Enviar</button>
            </form>
        </main>
    );
};

export default LicenseForm;