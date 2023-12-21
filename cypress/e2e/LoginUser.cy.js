import { HomePage } from '../Pages/HomePage';
import { RegisterAccount } from '../Pages/RegisterAccount';
import{loggingoff} from '../Pages/Logout';
import { AccountDetails } from '../Pages/MyAccount';
import { AddToCart } from '../Pages/NewProduct';
import {Login} from '../Pages/LoginPage';
import userCredentials from '../fixtures/usercredentials.json'





const Landingpage = new HomePage()
const Register = new RegisterAccount()
const Account =new AccountDetails()
const signout = new loggingoff()
const Add_Product = new AddToCart()
const LoginUser =new Login()

describe('User Logs into shopping Website',()=>{
    
       
        it('Validate Login -with invalid email',()=>{
            Landingpage.VisitHomePage()
            signout.MyAccountOption()
            LoginUser.LoginOption()
            Register.Email(userCredentials.invalidemail)
            Register.Password(userCredentials.password)
            LoginUser.LoginButton()
            LoginUser.ErrorAlert()

        })

        it('Validate Login -with invalid password',()=>{
            Landingpage.VisitHomePage()
            signout.MyAccountOption()
            LoginUser.LoginOption()
            Register.Email(userCredentials.email)
            Register.Password(userCredentials.invalidpassword)
            LoginUser.LoginButton()
            LoginUser.ErrorAlert()

        })

        it('Validate Login -with valid email and password',()=>{
            Landingpage.VisitHomePage()
            signout.MyAccountOption()
            LoginUser.LoginOption()
            Register.Email(userCredentials.email)
            Register.Password(userCredentials.password)
            LoginUser.LoginButton()
            LoginUser.LoginUrl()

        })


})