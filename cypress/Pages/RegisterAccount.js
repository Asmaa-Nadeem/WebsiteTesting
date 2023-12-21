
export class RegisterAccount{

RegisteraionPage()
{

cy.visit('https://opencart.abstracta.us/')
cy.contains('My Account').click()
cy.contains('Register').click()
cy.url().should('eq','https://opencart.abstracta.us/index.php?route=account/register')

}

Firstname(fname)
{

    cy.get('#input-firstname').type(fname)
}
Lastname(Lname){

    cy.get('#input-lastname').type(Lname)
}
Email(email){
    cy.get('#input-email').type(email)
}
Telephone(phone){
    cy.get('#input-telephone').type(phone)
}
Password(actual_password){
    cy.get('#input-password').type(actual_password)
}
ConfirmPassword(confirm_password)
{
    cy.get('#input-confirm').type(confirm_password)


}
Subscription(){

    cy.get('.col-sm-10 > :nth-child(2) > input').click()
}
SubmitButton(){
         cy.get('.pull-right > .btn').click() 

         

}
AgreementMissingAlert()
{
    cy.get('.alert').should('contain',' Warning: You must agree to the Privacy Policy!')
}

AgreetoTerms(){


    cy.get('[type="checkbox"]').click()
}

ValidateAccountCreation()
{
    cy.url().should('eq','https://opencart.abstracta.us/index.php?route=account/account')
}

validateformdata(){
    cy.contains('First Name must be between 1 and 32 characters!').should('exist')
    cy.contains('E-Mail Address does not appear to be valid!').should('exist')
    cy.contains('Warning: You must agree to the Privacy Policy!').should('exist')
 }
}