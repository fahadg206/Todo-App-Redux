import React from "react"; 
import { connect } from "react-redux";
import { signIn, signOut } from "../actions"

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '566640337737-6m362snjb1q6a6iv78rlmbdkc6oeith9.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
               this.onAuthChange(this.auth.isSignedIn.get())
                //be able to get authentication status on the fly and
                //update instantly instead of on the refresh
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn === true) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null
        } else if(this.props.isSignedIn) {
            return (
                <button 
                className="ui red google button"
                onClick={this.onSignOutClick}
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button 
                className="ui red google button"
                onClick={this.onSignInClick}
                >
                    <i className="google icon" />
                    Sign In With Google
                </button>
            )
        }
    }

    render() {
       return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {
    signIn: signIn,
    signOut:signOut
})(GoogleAuth);