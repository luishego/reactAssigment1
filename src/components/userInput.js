import  React from 'react';
import '../styles/UserInput.css'

const UserInput = (props) =>  {
        

    return(
        <div className="UserInput">
            <input type ="text"                    
                onChange={props.changed} 
                value={props.currentName} />
        </div>
        
    );
       

};      
    

export default UserInput;
