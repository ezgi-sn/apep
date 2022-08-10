import React from "react";

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
    onClick = event =>{
        this.setState({
            isAgreeClicked:event.target.checked
        })
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
                this.onClick
            }></input>
            <label>Agreed</label>
            <button name="isAgreeClicked" disabled={
                !this.state.isAgreeClicked
            }>Sign Up</button>
            </div>
           </form>
        );        
    }

}//react component inherite edildiği takdirde render
//metodunun override edilmesi şarttır

export default UserSignPage;