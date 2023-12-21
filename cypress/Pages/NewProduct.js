export class AddToCart{ 




  SearchBox(){

    cy.get('.form-control')
  
  }

Search(Product){

  cy.get('.form-control').type(Product)

  cy.get('.input-group-btn > .btn').click()

}
AddProduct()
{

  const device = "MacBook"; 
  cy.xpath(`//div[@class="product-thumb"]//a[contains(text(),"${device}")]`)

  //  cy.xpath('//div[@class="product-thumb"]//a[contains(text(),"MacBook")]')
   cy.xpath('(//div[@class="button-group"]//button)[1]').click()
   cy.xpath('//div[contains(@class,"alert-success")]')
   
}



ViewCart(){

  cy.xpath('(//div[@id="cart"]//button[@type="button"])[1]').click()
  cy.visit(`https://opencart.abstracta.us/index.php?route=checkout/cart`)
}

get productSuccess(){
  return cy.xpath('//div[contains(@class,"alert-success")]')
}

get verifyShopingCartPage(){
  return cy.xpath('//ul[@class="breadcrumb"]//a[contains(text(), "Shopping Cart")]')
}
get verifyShopingCartProduct(){
  return cy.xpath('(//table//a[contains(text(),"MacBook")])')
}

updateProductVal(val){
cy.xpath('//table//input[@type="text"]').clear().type(val)
//cy.wait(2000)
//cy.get('[data-original-title="Remove"]').click()

}


EmptyShoppingCartValdation(){
  cy.get('#content > p')
cy.contains("Your shopping cart is empty!")}
  
ContinueShopping()
{
  cy.visit('https://opencart.abstracta.us/index.php?route=common/home')
}

Checkout()
{
  // cy.get('.pull-right > .btn').click()
  cy.xpath('(//div[@id="cart"]//button[@type="button"])[1]').click()
  cy.xpath('//ul[@class="dropdown-menu pull-right"]//div//p//a[2]').click()
  

}

CheckoutFirstname(fname)
{
  cy.get('#input-payment-firstname').type(fname)
}
CheckoutLastname(Lname){

  cy.get('#input-payment-lastname').type(Lname)
}
CheckoutAddress(address){
  cy.get('#input-payment-address-1').type(address)
}
CheckoutCity(city){
  cy.get('#input-payment-city').type(city)
}
CheckoutPostcode(postalcode){
  cy.get('#input-payment-postcode').type(postalcode)
}
CheckoutCountry(country)
{
  cy.get('#input-payment-country').type(country)


}
CheckoutRegion(region)
{

  cy.get('#input-payment-zone').should('be.visible').select('3514');
}
CheckoutButton()
{

  cy.get('#button-payment-address').click()
}
CheckoutAgreement()
{
  cy.get('[type="checkbox"]').click()
}
CheckoutContinue()
{
  cy.get('#button-payment-method').click()
}

Billingbutton()
{
  cy.get('#button-payment-address').click({force: true})}

  ChcekoutPayment()
  {
    cy.get('[type="checkbox"]').click()
  }
  CheckoutPaymentContinue()
  {

    cy.get('#button-payment-method').click()
  }

  CheckoutConfirmOOrder()
  {
    cy.get('#button-confirm').click()
  }
}