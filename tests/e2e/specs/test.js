// https://docs.cypress.io/api/table-of-contents

// describe('My First Test', () => {
//   it('Visits the app root url', () => {
//     cy.visit('/')
//     cy.contains('h1', 'Welcome to Your Vue.js App')
//   })
// })

describe('Prueba E2E de HomeView', () => {
  it('debería enviar el texto desde ChildComponent al ParentComponent', () => {
    cy.visit('/HomeView');
    cy.get('input[placeholder="Escribe un mensaje"]').type('Probanding');
    cy.get('button').contains('Enviar').click();
    cy.contains('Mensaje recibido: Probanding').should('be.visible');
  });
});
