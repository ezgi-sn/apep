import React from "react";
import {signUp} from './apiCalls'
import { Button, Spinner } from 'react-bootstrap';

class UserSignPage extends React.Component{
    state={
        username:null,
        password:null,
        passwordRepeat:null,
        pendingApi: false
    }
    
    onChange = event =>{
        /*const value = event.target.value;
        const name=event.target.name;*/
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }
    onClick = event =>{
        event.preventDefault();
        const {username,password} = this.state;
        const body = {
            username,
            password
        };
        this.setState({pendingApi:true});
        signUp(body).then(response=>{
            this.setState({pendingApi:false});
        });
    }
    render(){
        return(
            <div className="container">
           <form>
            <h1 className="text-center">Welcome to Apep</h1>
            <div className="form-group">
            <label>Your Username:</label>
            <input name="username"
            onChange={
                this.onChange
            } className="form-control"
            ></input>
            </div>
             
            <div className="form-group">
            <label>Your Password:</label>
            <input type="password" name="password" onChange={
                this.onChange
            } className="form-control"></input>
            </div>

            <div className="form-group">
            <label>Password Again:</label>
            <input type="password" name="passwordRepeat" onChange={
                this.onChange
            } className="form-control"></input>
            </div>
            <div className="form-group text-center">
            <button name="isAgreeClicked" disabled={
                this.state.pendingApi
            }
            onClick={
                this.onClick
            } className="btn btn-primary">
                {this.state.pendingApi && <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"/>}
                Sign Up</button>
            </div>
           </form>
           </div>
        );        
    }

}//react component inherite edildiği takdirde render
//metodunun override edilmesi şarttır

export default UserSignPage;