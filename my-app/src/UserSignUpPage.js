import React from "react";
import {signUp} from './apiCalls'
import { Button, Spinner } from 'react-bootstrap';
import Input from './components/Input';

class UserSignPage extends React.Component{
    state={
        username:null,
        password:null,
        passwordRepeat:null,
        pendingApi: false,
        errors:{

        }
    }
    
    onChange = event =>{
        /*const value = event.target.value;
        const name=event.target.name;*/
        const {name, value} = event.target;
        const errors={... this.state.errors};
        errors[name]=undefined;
        this.setState({
            [name]:value,
            errors
            
        })
    }
    onClick = async event =>{
        event.preventDefault();
        const {username,password} = this.state;
        const body = {
            username,
            password
        };
        this.setState({pendingApi:true});
        try{
            const response=await signUp(body);
        }catch(error){
            this.setState({errors: error.response.data.validationErrors});
        }
        
            this.setState({pendingApi:false});
        
    }
    render(){
        const {pendingApi, errors} = this.state;
        const {username}=errors;
        return(
            <div className="container">
                <div className="image-container">
            <img src={require('./logo.png')} />
            </div>
           <form>
           
            
            <br /><br /><br /><br />
            
            <div className="form-group">
            <label>Your Username:</label>
            <input name="username"
            onChange={
                this.onChange
            } className={username ? "form-control is-invalid" : "form-control"}
            ></input>
            <div className="invalid-feedback">
        {username}
      </div>
            </div>
            {/* <Input name="username" label="Your Username:" error={username} onChange={this.onChange}></Input> */}
            
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
            <br />
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