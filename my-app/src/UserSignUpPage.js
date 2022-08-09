import React from "react";

class UserSignPage extends React.Component{
    state={
        username:null,
        isAgreeClicked:false
    }
    
    onChangeProperty= event=>{
        console.log(event.target.value);
        
    }
    onClick = event => {
        console.log(event.target.checked)
        this.setState({
            isAgreeClicked:event.target.checked
        });
    }
    render(){
        return(
           <form>
            <h1>Welcome to Apep</h1>
            <div>
            <label>Your Username:</label>
            <input 
            onChange={
                this.onChangeProperty
            }
            ></input>
            </div>
             
            <div>
            <label>Your Password:</label>
            <input type="password"></input>
            </div>

            <div>
            <label>Password Again:</label>
            <input type="password"></input>
            </div>
            <div>
            <input type="checkbox" onChange={
                this.onClick
            }></input>
            <label>Agreed</label>
            <button disabled={
                !this.state.isAgreeClicked
            }>Sign Up</button>
            </div>
           </form>
        );        
    }

}//react component inherite edildiği takdirde render
//metodunun override edilmesi şarttır

export default UserSignPage;