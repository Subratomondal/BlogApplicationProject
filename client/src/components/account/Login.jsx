import { useState, useContext } from 'react';

import { Box, Button, TextField, Typography, styled } from '@mui/material';
import {API} from '../../service/api'
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';

import logo from './logo01.jpg';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Image = styled('img')({
    width: 350,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
    
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #4d4d4d;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const Signupbutton = styled(Button)`
    text-transform: none;
    background: #f2f2f0 ;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Error = styled(Typography)`
    color: #878787;
    font-size: 16px;
`

const Text = styled(Typography)`
    color: #878787;
`;

const loginInitialValues = {
    username: '',
    password: ''

}

const signupInitialValues ={
    name: '',
    username: '',
    password: ''
}

const Login = ({ isUserAuthenticated})=>{

    const [account, toggleAccount]= useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin]= useState(loginInitialValues);
    const [error, setError] = useState('');

    const { setAccount }= useContext(DataContext);
    const navigate =useNavigate();

    const toggleSignup =() => {
        account === 'signup'? toggleAccount('login'): toggleAccount('signup');
    }
    const onInputChange = (e) =>{
        setSignup({  ...signup, [e.target.name]: e.target.value});
    }

    const signupUser = async () => {
       let response = await API.userSignup(signup);
       if (response.isSuccess){
        setError('');
        setSignup(signupInitialValues);
        toggleAccount('login')
       }
       else{
        setError('Something went wrong! Please try again later');
       }
    }

    const onValueChange = (e)=>{
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const loginUser= async ()=>{
        let response = await API.userLogin(login);
        if (response.isSuccess){
            setError('');

            sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);

            setAccount({username: response.data.username, name: response.data.name})

            isUserAuthenticated(true);

            navigate('/');
            
        }
        else{
            setError('Something went wrong! Please try again later');
        }
    }

    return (
        <Component>
            <Box>
                <Image src={logo} alt="Login" />
                {

                    account === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e)=> onValueChange(e)} name="username" label="Enter username"/>
                            <TextField variant="standard" value={login.password} onChange={(e)=> onValueChange(e)} name="password"  label="Enter password"/>

                            {error && <Error>{error}</Error>}

                            <LoginButton variant="contained" onClick={()=> loginUser()}>Login</LoginButton>
                            <Text style={{textAlign: `center`}}>OR</Text>
                            <Signupbutton onClick={()=> toggleSignup()}>Create an account</Signupbutton>
                        </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label="Enter Name"/>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter Username"/>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password"/>

                        {error && <Error>{error}</Error>}
                        <Signupbutton onClick={()=> signupUser()} >Signup</Signupbutton>
                        <Text style={{textAlign: `center`}}>OR</Text>
                        <LoginButton variant="contained" onClick={()=>toggleSignup()} >Already have an account</LoginButton>
                    </Wrapper>

                }
                
            </Box>
        </Component>
    )
}

export default Login;