import  React  from 'react';
import '../styles/UserOutput.css';

const UserOutput = (props) => {

        return (
            <div className='UserOutput' >
                <p> This is an assignment for : {props.username} </p>
                <p>Even when this parragraph is'nt changing</p>
            </div>
            
        );
        
};

export default UserOutput;