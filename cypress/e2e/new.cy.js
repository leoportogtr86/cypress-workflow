describe('Um Teste Simples de Dados', () => {
    it('Deve garantir que um objeto possui os valores corretos', () => {
        const pessoa = {
            nome: 'Joe',
            idade: 40
        }
        cy.wrap(pessoa.nome).should('be.equal', 'Joe');
        cy.wrap(pessoa.idade).should('be.equal', 40);
    });
})