export class loggingoff{



MyAccountOption(){
   cy.get('.list-inline > .dropdown > .dropdown-toggle').click()
    }

LogoutOption()
{
    cy.get('.dropdown-menu > :nth-child(5) > a').click()
}

UserLogsout()
{

    cy.url().should('eq','https://opencart.abstracta.us/index.php?route=account/logout')
}


}
