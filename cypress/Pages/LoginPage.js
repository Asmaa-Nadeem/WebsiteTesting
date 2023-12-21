export class Login{


    ValidateLoginPage(){


        cy.url().should.eq('https://opencart.abstracta.us/index.php?route=account/login')
    }

LoginOption()
{

    cy.get('.dropdown-menu > :nth-child(2) > a').click()
}

LoginButton(){

    cy.get('form > .btn').click()
}

ErrorAlert()
{
    cy.contains('Warning: No match for E-Mail Address and/or Password.')
}

LoginUrl()
{
    cy.url().should('eq','https://opencart.abstracta.us/index.php?route=account/account')
}
}