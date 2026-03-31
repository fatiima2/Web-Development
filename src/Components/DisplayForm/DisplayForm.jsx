import React from 'react';
import './DisplayForm.css';

//const DisplayForm = ({firstName,lastName,email,contactNo,Address}) =>{
const DisplayForm = ({ index, user ,deleteUser }) => {
        return (
            <div className="display">
                <p className="display-text">
                    <span>First Name:</span>{user.firstName}<br /><br />
                    <span>Last Name:</span>{user.lastName}<br /><br />
                    <span>Email:</span>{user.email}<br /><br />
                    <span>Contact No:</span>{user.contactNo}<br /><br />
                    <span>Address:</span>{user.address}<br /><br />
                    <button id="show-btn" onClick={()=>deleteUser(index)}>Delete</button>
                </p>
            </div>
    )
}

export default DisplayForm;