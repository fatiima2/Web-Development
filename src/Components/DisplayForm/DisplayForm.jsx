import React from 'react';
import './DisplayForm.css';


const DisplayForm = ({firstName,lastName,email,contactNo,Address}) =>{
    return(
        <div className="main-display">
            <div className="display">
                <p className="display-text">
                    First Name: {firstName}<br/><br/>
                    Last Name: {lastName}<br/><br/>
                    Email: {email}<br/><br/>
                    contactNo: {contactNo}<br/><br/>
                    Address: {Address}
                </p>
            </div>
        </div>
    )

}

export default DisplayForm;