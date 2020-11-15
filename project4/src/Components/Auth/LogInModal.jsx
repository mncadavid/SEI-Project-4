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
            <div className="modal-container" onClick={(e) => {if(e.currentTarget===e.target){this.props.setOpenLogin(false)}}}>
                <div className="login-modal">
                    <form onSubmit = {(e) => this.props.handleLogin(e,this.state)}>
                        <h2>Log In</h2>
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