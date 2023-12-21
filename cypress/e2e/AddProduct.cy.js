import { HomePage } from '../Pages/HomePage';
import { RegisterAccount } from '../Pages/RegisterAccount';
import{loggingoff} from '../Pages/Logout';
import { AccountDetails } from '../Pages/MyAccount';
import { AddToCart } from '../Pages/NewProduct';
import {Login} from '../Pages/LoginPage';
import userCredentials from '../fixtures/usercredentials.json'

var num = Math.floor(Math.random() * 1000);
var new_email = "asmaa"+num+"@testing.com";
const device = "MacBook"; 



const Landingpage = new HomePage()
const Register = new RegisterAccount()
const Account =new AccountDetails()
const signout = new loggingoff()
const Add_Product = new AddToCart()
const LoginUser =new Login()

describe('Search and Add Product',()=> {

    



    it('Shop a product',()=>{


        Register.RegisteraionPage()

        Register.Firstname(userCredentials.firstname)
        Register.Lastname(userCredentials.lastname)
        Register.Email(new_email)
        Register.Telephone(userCredentials.telephone)
        Register.Password(userCredentials.password)
        Register.ConfirmPassword(userCredentials.confirmpassword)
        Register.Subscription()
        Register.SubmitButton()
        Register.AgreementMissingAlert()
        Register.AgreetoTerms()
        Register.SubmitButton()
        Register.ValidateAccountCreation()

        Add_Product.SearchBox()
        
        Add_Product.Search(userCredentials.product)
        Add_Product.AddProduct()
        cy.wait(3000)


        Add_Product.Checkout()
       Add_Product.CheckoutFirstname(userCredentials.firstname)
        Add_Product.CheckoutLastname(userCredentials.lastname)
        Add_Product.CheckoutAddress(userCredentials.address1)
        Add_Product.CheckoutCity(userCredentials.city)
        Add_Product.CheckoutPostcode(userCredentials.postcode)
        Add_Product.CheckoutCountry(userCredentials.country)
        Add_Product.CheckoutRegion(userCredentials.Region)
        Add_Product.CheckoutButton()
        Add_Product.CheckoutAgreement()
        Add_Product.CheckoutContinue()
        Add_Product.Billingbutton()
        Add_Product.ChcekoutPayment()
        Add_Product.CheckoutPaymentContinue()
        // signout.MyAccountOption()
        // signout.LogoutOption ()
        // signout.UserLogsout()

        //Add_Product.CheckoutConfirmOOrder()

        
    })
  
    it.skip('View product',()=>{
        Landingpage.VisitHomePage()
        signout.MyAccountOption()
        LoginUser.LoginOption()
        Register.Email(userCredentials.email)
        Register.Password(userCredentials.password)
        LoginUser.LoginButton()
        LoginUser.LoginUrl()

       
        Add_Product.SearchBox()
        
        Add_Product.Search(userCredentials.product)
        Add_Product.AddProduct()
        cy.wait(3000)
        Add_Product.ViewCart()

        Add_Product.verifyShopingCartPage.contains('Shopping Cart')
        Add_Product.verifyShopingCartProduct.contains('MacBook')
        Add_Product.updateProductVal('2')

        Add_Product.EmptyShoppingCartValdation()
        Add_Product.ContinueShopping()
        signout.MyAccountOption()
        signout.LogoutOption ()
        signout.UserLogsout()


        
    })
   
})