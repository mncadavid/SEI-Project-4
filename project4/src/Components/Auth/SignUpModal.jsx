import React, {Component} from 'react';

class SignUpModal extends Component{
    constructor(props){
        super(props);

        this.state={
            name: "",
            username: "",
            password: "",
            childId: 3
        }
    }

    handleChange= (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="sign-up-modal">
                <form onSubmit = {(e) => this.props.handleSignUp(e,this.state)}>
                    <h2>Sign Up</h2>
                    <p>Username:</p>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}

export default SignUpModal;