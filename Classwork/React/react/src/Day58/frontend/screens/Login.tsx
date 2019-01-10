import * as React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import action from '../redux/auth/actions';
import { LoginActions } from '../redux/auth/types'
import { IRootState } from '../redux/store'

interface ILoginProps {
  error: null | string;
  loginFacebook: (accessToken: string) => Promise<void>;
  loginUser: (password: string, username: string) => Promise<void>;
}

interface ILoginState {
  password: string;
  username: string;
}

class PureLogin extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      password: '',
      username: ''
    };
  }

  public render() {
    return (
      <div>
        <ul>
          {this.selected()}
          {this.selected()}
          {this.selected()}
          {this.selected()}
          {this.notSelected()}
        </ul>
        <h3 className="text-center">
          Login Form
        </h3>
        <div className="container">
          <form>
            <div className="form-group">
              {(this.props.error) ? (<label>Error:</label>) : null}
              <div>{this.props.error}</div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control" onChange={this.updateEmail} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" onChange={this.updatePassword} />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" onClick={this.onSubmit} />
          </form>
          <h4 className="text-center"> OR </h4>
          <div className="text-center">
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
              autoLoad={false}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
          </div>
        </div>
      </div>
    );
  }

  private updateEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: evt.currentTarget.value
    });
  }

  private updatePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: evt.currentTarget.value
    });
  }

  private responseFacebook = (userInfo: ReactFacebookLoginInfo & { accessToken: string }) => {
    if (userInfo.accessToken) {
      this.props.loginFacebook(userInfo.accessToken);
    }
    return null;
  }

  private onSubmit = (evt: React.MouseEvent<HTMLInputElement>) => {
    evt.preventDefault();
    this.props.loginUser(this.state.password, this.state.username);
  }

  private selected = () => {
    return <div style={{ width: '40px', display: 'inline-block', backgroundColor: 'yellow' }}>*</div>;
  }

  private notSelected = () => {
    return <div style={{ width: '40px', display: 'inline-block' }}>*</div>;
  }

  private componentClicked() {
    return null;
  }
}

const mapStateToProps = (state: IRootState) => ({
  error: state.auth.error
});

const mapDispatchToProps = (dispatch: Dispatch<LoginActions>) => ({
  authenticate: (response: string) => {
    (response === 'Success') ?
      dispatch(action.loginSuccess()) :
      dispatch(action.loginFailure(response))
  },
  async loginFacebook(accessToken: string) {
    try {
      this.authenticate(await action.loginFacebook(accessToken))
    } catch (err) {
      dispatch(action.loginFailure(err.message))
    }
  },
  async loginUser(username: string, password: string) {
    try {
      this.authenticate(await action.loginUser(username, password))
    } catch (err) {
      dispatch(action.loginFailure(err.message))
    }
  }
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(PureLogin);