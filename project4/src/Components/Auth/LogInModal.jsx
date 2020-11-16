import React, {Component} from 'react';

class LogInModal extends Component{
    constructor(props){
        super(props);
        this.state= {
            logInInfo: {
                username: "",
                password: ""
            },
            errorMessage: ""
        }
    }
    handleChange = (e) => {
        const {name, value}= e.target;
        let setLogInInfo = this.state.logInInfo;
        setLogInInfo[name] = value;
        this.setState({
            logInInfo: setLogInInfo
        })
    }

    handleErrorHandling = (e) => {
        e.preventDefault();
        if(!this.state.logInInfo.username.trim() || !this.state.logInInfo.password.trim()){
            this.setState({
                errorMessage: "Username and/or password cannot be empty"
            })
        }
        else{
            this.setState({
                errorMessage: ""
            })
            this.props.handleLogin(this.state.logInInfo);
        }
    }

    render(){
        return(
            <div className="modal-container" onClick={(e) => {if(e.currentTarget===e.target){this.props.setOpenLogin(false)}}}>
                <div className="login-modal">
                    <form onSubmit = {(e) => this.handleErrorHandling(e)}>
                        <h2>Log In</h2>
                        <p className="error-message">{this.state.errorMessage}</p>
                        <p className="error-message">{this.props.serverErrorMessage}</p>
                        <p>Username:</p>
                        <input
                            autoFocus
                            required
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <p>Password:</p>
                        <input
                            required
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <br /><br/>
                        <input type="submit" value="Log In"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default LogInModal;