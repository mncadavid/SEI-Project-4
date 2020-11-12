import React, {Component} from 'react';

class SignUpModal extends Component{
    constructor(props){
        super(props);

        this.state={
            name: "",
            username: "",
            password: "",
            childName: "",
            childAge: 0
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
                    <p>Name:</p>
                    <input required
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
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}

export default SignUpModal;