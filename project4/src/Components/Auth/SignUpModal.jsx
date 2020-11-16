import React, {Component} from 'react';

class SignUpModal extends Component{
    constructor(props){
        super(props);

        this.state={
            signUpInfo : {
                name: "",
                username: "",
                password: "",
                childName: "",
                childAge: 0
            },
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const {name, value}= e.target;
        let setSignUpInfo = this.state.signUpInfo;
        setSignUpInfo[name] = value;
        this.setState({
            signUpInfo: setSignUpInfo
        })
    }

    handleInputErrors = (e) => {
        e.preventDefault();
        if(!this.state.signUpInfo.name.trim()){
            this.setState({
                errorMessage: "Please input a valid name"
            })
        }
        else if(!this.state.signUpInfo.username.trim()){
            this.setState({
                errorMessage: "Please input a valid username"
            })
        }
        else if(!this.state.signUpInfo.password.trim()){
            this.setState({
                errorMessage: "Please input a valid password"
            })
        }
        else if(!this.state.signUpInfo.childName.trim()){
            this.setState({
                errorMessage: "Please input a valid child name"
            })
        }
        else if(!this.state.signUpInfo.childAge.trim() || this.state.signUpInfo.childAge <=0 ){
            this.setState({
                errorMessage: "Please input a valid child age"
            })
        }
        else{
            this.setState({
                errorMessage: ""
            })
            this.props.handleSignUp(this.state.signUpInfo);
        }
    }

    render(){
        return(
            <div className="modal-container" onClick={(e) => {if(e.currentTarget===e.target){this.props.setOpenSignUp(false)}}}>
                <div className="sign-up-modal">
                    <form onSubmit = {(e) => this.handleInputErrors(e)}>
                        <h2>Sign Up</h2>
                        <p className="error-message">{this.state.errorMessage}</p>
                        <p>Name:</p>
                        <input required
                            autoFocus
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <p>Username:</p>
                        <input required
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <p>Password:</p>
                        <input required
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <p>Child's Name:</p>
                        <input required
                            type="text"
                            name="childName"
                            value={this.state.childName}
                            onChange={this.handleChange}
                        />
                        <p>Child's Age:</p>
                        <input required
                            type="text"
                            name="childAge"
                            value={this.state.childAge}
                            onChange={this.handleChange}
                        />
                        <br /><br />
                        <input type="submit" value="Sign Up"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpModal;