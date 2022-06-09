import LoginForm from "../components/LoginForm.js";
import RegistrerForm from "../components/RegistrerForm.js";

//style
import Background from "../assets/images/stor_bakgrundCollage/loggaIn_regSida.png"


const Login = () => {
    
    const wrapperLogin = {
        height:"100vh",
        backgroundImage:`url(${Background})`,
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"
       }
   

    return(
        <div style={wrapperLogin}>
        <LoginForm></LoginForm>
        <RegistrerForm></RegistrerForm>
         </div>
    )
};

export default Login;


