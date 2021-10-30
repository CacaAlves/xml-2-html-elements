import validateXmlOnSyntactAndConvert2Json from './../assets/functions/validateXmlOnSyntactAndConvert2Json';
import generateRandomCPF from './../assets/functions/generateRandomCPF';
import './DataVisualization.css';

const DataVisualization = ({ xmlData, setRenderedComponent }) => {

    let jsonData = null
    try {
        jsonData = validateXmlOnSyntactAndConvert2Json(xmlData);
    } catch (err) {
        alert("Erro: arquivo XML sintaticamente inválido");
        setRenderedComponent('License Form');
        return null;
    }

    const now = new Date();
    
    return (
        <main id="main-data-visualization">
            <h1>Visualização dos dados</h1>

            <aside>
                Data
            </aside>
            <article id="data-visualization">
                    <p className="data-visualization-item">CPF: {generateRandomCPF()}</p>
                    <p className="data-visualization-item">Data e hora: {now.toLocaleDateString('pt-br') + ' ' + now.getHours() + ':' + now.getMinutes()}</p>
                    <p className="data-visualization-item">ID do lote: RLI12345678900A00001</p>
                    <p className="data-visualization-item">ID da solicitação: {jsonData['lote-li']['li']['identificador-li'] || " "}</p>
                    <p className="data-visualization-item">Tipo do importador: {jsonData['lote-li']['li']['tipo-importador'] || " "}</p>
                    <p className="data-visualization-item">Número do importador: {jsonData['lote-li']['li']['identificacao-importador'] || " "}</p>
                    <p className="data-visualization-item">Mensagem diagnóstico: Licenciamento de Importação foi registrado</p>
                    <p className="data-visualization-item">Número LI: 1500000011</p>
            </article>
        </main>
    );
};

export default DataVisualization;