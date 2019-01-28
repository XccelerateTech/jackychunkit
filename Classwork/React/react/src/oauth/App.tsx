import * as React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import GoogleLogin from 'react-google-login'
// tslint:disable
const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
}

const responseGoogle = (response: any) => {
    console.log(response);
  }

const componentClicked = () => null;

export default function () {
    return <>
        <FacebookLogin
            appId="372390923567171"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />
        <GoogleLogin
            clientId="980192618991-ntaogv3tkbg21ve3qhfjq8us1f1au1gb.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
    </>
}
