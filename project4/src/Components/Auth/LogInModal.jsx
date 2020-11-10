import React, {Component} from 'react';

class LogInModal extends Component{
    constructor(props){
        super(props);

        this.state={
            username: "",
            password: ""
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
            <div className="log-in-modal">
                <form onSubmit = {(e) => this.props.handleLogin(e,this.state)}>
                    <h2>Log In</h2>
                    <p>Username:</p>
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
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        )
    }
}

export default LogInModal;