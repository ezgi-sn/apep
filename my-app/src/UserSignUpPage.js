import React from "react";
import axios from "axios";

class UserSignPage extends React.Component{
    state={
        username:null,
        password:null,
        passwordRepeat:null,
        isAgreeClicked:false
    }
    
    onChange = event =>{
        /*const value = event.target.value;
        const name=event.target.name;*/
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }
    onChangeAgreement = event =>{
        this.setState({
            isAgreeClicked:event.target.checked
        })
    }
    onClick = event =>{
        event.preventDefault();
        const {username,password} = this.state;
        const body = {
            username,
            password
        };
        axios.post('/api/1.0/users',body);
    }
    render(){
        return(
           <form>
            <h1>Welcome to Apep</h1>
            <div>
            <label>Your Username:</label>
            <input name="username"
            onChange={
                this.onChange
            }
            ></input>
            </div>
             
            <div>
            <label>Your Password:</label>
            <input type="password" name="password" onChange={
                this.onChange
            }></input>
            </div>

            <div>
            <label>Password Again:</label>
            <input type="password" name="passwordRepeat" onChange={
                this.onChange
            }></input>
            </div>
            <div>
            <input type="checkbox" onChange={
                this.onChangeAgreement
            }></input>
            <label>Agreed</label>
            <button name="isAgreeClicked" disabled={
                !this.state.isAgreeClicked
            }
            onClick={
                this.onClick
            }>Sign Up</button>
            </div>
           </form>
        );        
    }

}//react component inherite edildiği takdirde render
//metodunun override edilmesi şarttır

export default UserSignPage;