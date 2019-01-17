import  React  from 'react';

const UserOutput = (props) => {

        return (
            <div>
                <p> This is a assignment for : {props.username} </p>
                <p>Even when this parragraph is'nt changing</p>
            </div>
            
        );
        
};

export default UserOutput;