import LoginForm from "../components/LoginForm.js";

//style
import Background from "../assets/images/stor_bakgrundCollage/loggaIn_regSida.png"

const Login = () => {
    
    const wrapperLogin = {
        height:"100vh",
        backgroundImage:`url(${Background})`
       }
   

    return(
        <div style={wrapperLogin}>
        <LoginForm></LoginForm>
     </div>
    )
};

export default Login;


