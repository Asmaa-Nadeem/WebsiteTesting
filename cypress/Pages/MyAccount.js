export class AccountDetails{




    MyAccount(){
    

        cy.get('#content > :nth-child(2) > :nth-child(2) > a').click()
cy.url().should('eq','https://opencart.abstracta.us/index.php?route=account/password')



    }
NewPassword(Npassword){


    cy.get('#input-password').type(Npassword)

}

ConfirmPassword(Cpassword)
{
    cy.get('#input-confirm').type(Cpassword)

}
ContinuePasswordChange(){
    cy.get('.pull-right > .btn').click()
cy.contains(' Success: Your password has been successfully updated.')
}














}