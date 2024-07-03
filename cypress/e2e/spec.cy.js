describe('My First Test', () => {
  it('Visits the Cypress website', () => {

    cy.visit('https://js-55fbfg.stackblitz.io/')

    cy.get('button[onClick="__runProject()"]').click();
    cy.get('button[class="btn btn-primary"]').click();
    
    const filePath = 'cypress\\certs\\cert.cer';

    cy.get('[class="dropbox ng-isolate-scope"]').selectFile( filePath , {
      action: 'drag-drop'
    })

    cy.get('td.ng-binding').each(($td) => {
      cy.wrap($td).invoke('text').should('not.be.empty');
    });

    cy.wrap('div[class="list-group mb-3"]').children().should('exist');

  })
})