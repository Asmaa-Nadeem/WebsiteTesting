
export class HomePage {

    VisitHomePage(){
        cy.visit('https://opencart.abstracta.us/')

        
    }

ValidateUrl()
{
    cy.visit('https://opencart.abstracta.us/')
     cy.url().should('eq', 'https://opencart.abstracta.us/') 
     cy.get('#logo').should('contain','Your Store')
     cy.get('#search').should('be.visible') 
     cy.get('.col-sm-3').should('contain','Information')
     cy.get('.container').should('be.visible')
     cy.get('#search > .form-control').should('be.visible')
     cy.get('#menu').should('be.visible')   
     cy.get('#top-links').should('be.visible')   
}


}