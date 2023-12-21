
import { HomePage } from '../Pages/HomePage';
import { RegisterAccount } from '../Pages/RegisterAccount';
import{loggingoff} from '../Pages/Logout';
import { AccountDetails } from '../Pages/MyAccount';
import { AddToCart } from '../Pages/NewProduct';
import userCredentials from '../fixtures/usercredentials.json'
import { before } from 'mocha';





const Landingpage = new HomePage()
const Register = new RegisterAccount()
const Account =new AccountDetails()
const signout = new loggingoff()
const Add_Product = new AddToCart()

var num = Math.floor(Math.random() * 1000);
var new_email = "asmaa"+num+"@testing.com";


describe ('Register New User ',()=>{

    

it('Validates Home Page of shopping website',function(){

Landingpage.ValidateUrl()
}
)

it('Register form validations', () => {
    Register.RegisteraionPage()
    Register.SubmitButton()
    Register.validateformdata()  
})

it('Register New Account ',function(){
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
signout.MyAccountOption()
signout.LogoutOption()
signout.UserLogsout()
})

})







