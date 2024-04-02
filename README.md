# Testes Automatizados em Cypress
Este projeto contém dois conjuntos de testes automatizados desenvolvidos utilizando a ferramenta Cypress. Abaixo, detalhamos cada um dos testes e suas respectivas funcionalidades.

## Teste API (Health Check da API do Trello)
Este teste realiza um health check na API do Trello. Ele verifica se a API está respondendo corretamente, além de fazer asserts na resposta da requisição. O teste aproveita e guarda os IDs das variáveis para posterior uso, especialmente para casos em que é necessário deletar registros.

Utilizando jQuery, o teste verifica se a resposta da requisição é 200, aproveita para guardar o ID e imprime na tela. As variáveis são utilizadas dentro dos endpoints para evitar passar manualmente.

Este health check está configurado para rodar de forma contínua, por isso os IDs são armazenados em variáveis para facilitar a execução do teste.

## Teste de Login e Compra no Swag Labs
Este teste realiza o processo de login e compra em um site de testes, o Swag Labs. Utilizando o padrão Page Object Model (POM) e o padrão Data-Driven Tests (DDTest), todas as ações de escrita são feitas utilizando comandos personalizados. Isso facilita a manutenção do código e aumenta a segurança, uma vez que é possível esconder informações sensíveis.

Os comandos estão agrupados e instanciados em um arquivo JSON para evitar hard coding. Isso torna mais fácil a manutenção do código e a reutilização de dados.

Modo de Execução (Run Mode)
É importante destacar que o modo de execução (Run Mode) é crucial para testes de Cypress em ambientes de pipelines ou processamento. Em ambientes instáveis, garantir que o teste rode de forma estável é fundamental para a integridade dos resultados.

Nota: O uso de cy.log para impressão de logs é recomendado para fins de debug e rastreamento de problemas durante a execução dos testes.

### Para executar os testes, siga as instruções abaixo:

Clone este repositório em sua máquina local.
Instale as dependências do projeto utilizando npm install.
Execute os testes utilizando o comando npm run cypress:run.
Isso irá iniciar a execução dos testes automatizados em Cypress.

Para mais informações sobre a configuração do ambiente e execução dos testes, consulte a documentação do Cypress (https://docs.cypress.io/guides/overview/why-cypress).

Desenvolvedor:
Lucas Araújo de Almeida 
