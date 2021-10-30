const RLI_LOTE_scheme = {
    "type": "object",
    "properties": {
        "lote-li": {
            "type": "object",
            "properties": {
                "li": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "identificador-li": { "type": "string" },
                            "tipo-importador": { "type": "string" },
                            "identificacao-importador": { "type": "string" },
                            "pais-procedencia-mercadoria": { "type": "string" },
                            "codigo-urf-entrada": { "type": "string" },
                            "codigo-urf-despacho": { "type": "string" },
                            "texto-informacoes-complementares": { "type": "string" },
                            "tipo-fornecedor": { "type": "string" },
                            "fornecedor-estrangeiro-nome": { "type": "texto-visivel-type" },
                            "fornecedor-estrangeiro-email": { "type": "string" },
                            "fornecedor-estrangeiro-responsavel": { "type": "texto-visivel-type" },
                            "pais-aquisicao-mercadoria": { "type": "string" },
                            "fornecedor-estrangeiro-logradouro": { "type": "texto-visivel-type" },
                            "fornecedor-estrangeiro-numero": { "type": "texto-visivel-type" },
                            "fornecedor-estrangeiro-complemento": { "type": "texto-visivel-type" },
                            "fornecedor-estrangeiro-cidade": { "type": "texto-visivel-type" },
                            "fornecedor-estrangeiro-uf": { "type": "texto-visivel-type" },
                            "fabricante-nome": { "type": "texto-visivel-type" },
                            "fabricante-email": { "type": "string" },
                            "fabricante-responsavel": { "type": "texto-visivel-type" },
                            "fabricante-endereco-logradoudo": { "type": "texto-visivel-type" },
                            "fabricante-endereco-numero": { "type": "texto-visivel-type" },
                            "fabricante-endereco-complemento": { "type": "texto-visivel-type" },
                            "fabricante-endereco-cidade": { "type": "texto-visivel-type" },
                            "fabricante-endereco-estado": { "type": "texto-visivel-type" },
                            "pais-origem-mercadoria": { "type": "string" },
                            "subitem-ncm": { "type": "string" },
                            "codigo-mercadoria-naladi": { "type": "string" },
                            "codigo-moeda": { "type": "string" },
                            "codigo-incoterms": { "type": "string" },
                            "condicao-mercadoria": { "type": "string" },
                            "tipo-enquadramento-material-usado": { "type": "string" },
                            "tipo-operacao-enquadramento-material-usado": { "type": "string" },
                            "destaque-ncm": {
                                "type": "object",
                                "properties": { "numero-destaque-ncm": { "type": "numerico-3-opcional-type" } }
                            },
                            "processo-anuente": {
                                "type": "object",
                                "properties": {
                                    "numero-processo-anuente": { "type": "string" },
                                    "sigla-orgao-anuente": { "type": "string" }
                                }
                            },
                            "drawback-regime": { "type": "string" },
                            "drawback-numero-ato-isencao": { "type": "string" },
                            "drawback-numero-ato-suspencao": { "type": "string" },
                            "detalhe-ncm-item-drawback": {
                                "type": "object",
                                "properties": {
                                    "numero-sequencial-produto": { "type": "string" },
                                    "nome-unidade-medida-comercializada": { "type": "texto-visivel-type" },
                                    "peso-liquido": { "type": "decimal" },
                                    "qtd-mercadoria-unidade-comercializada": { "type": "decimal" },
                                    "qtd-mercadoria-unidade-estatistica": { "type": "decimal" },
                                    "valor-unidade-condicao-venda": { "type": "decimal" },
                                    "valor-unidade-local-embarque": { "type": "decimal" },
                                    "descricao-produto": { "type": "string" },
                                    "marca": { "type": "texto-visivel-type" },
                                    "modelo": { "type": "texto-visivel-type" },
                                    "numero-serie": { "type": "texto-visivel-type" },
                                    "ano-fabricacao": { "type": "string" },
                                    "item-ac-drawback": { "type": "string" }
                                }
                            },
                            "regime-acordo-tributario": { "type": "string" },
                            "fundamento-legal-regime": { "type": "string" },
                            "tipo-acordo-tarifario": { "type": "string" },
                            "codigo-acordo-aladi": { "type": "string" },
                            "cobertura-cambial": { "type": "string" },
                            "modalidade-pagamento": { "type": "string" },
                            "numero-dias-limite-pagamento": { "type": "string" },
                            "codigo-orgao-financeiro-internacional": { "type": "string" },
                            "codigo-motivo-sem-cobertura": { "type": "string" },
                            "numero-li-substituida": { "type": "string" }
                        }
                    }
                }
            },
            "idArquivoLote": ""
        }
    }
}

export default RLI_LOTE_scheme;