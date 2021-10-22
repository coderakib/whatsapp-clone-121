import React from 'react';
import { Button } from '@material-ui/core';
import "./Login.css";
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));

    };
    return (

        <div className="login">
            <div className="login__container">
                <img
                    src ="https://i.ibb.co/yfWFHjp/whatsapp-logo-png-2263.png" alt=""
                />

                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                    
                </Button>

                <div className="login__akib">
                    <p>from <br/> AKIB HUSSAIN</p>
                </div>

            </div>
            
        </div>
    );
}

export default Login;
