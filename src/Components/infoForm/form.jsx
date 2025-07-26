import React, { useRef } from "react";
import './form.css';
import DisplayForm from "../DisplayForm/DisplayForm";



const InfoForm = ({firstName,setFirstName,lastName,setLastName,email,setEmail,contactno,setContactno,address,setAddress}) => {
    
     const firstnameref=useRef();
     const lastnameref=useRef();
     const emailref=useRef();
     const contactNoref=useRef();
     const addressref=useRef();

     function handleSubmit()
     {
        const firstNameValue=firstnameref.current.value;
        const lastNameValue=lastnameref.current.value;
        const emailvalue=emailref.current.value;
        const contactNovalue=contactNoref.current.value;
        const addressvalue=addressref.current.value;
        setFirstName(firstNameValue);
        setLastName(lastNameValue);
        setEmail(emailvalue);
        setContactno(contactNovalue);
        setAddress(addressvalue);
     }

     
    return (
        <div className="container">
            <div className="form-div">
                <div>
                    <label htmlFor="name" className="label-Styles">FirstName: </label>
                    <input name="name" type="text" id="input-design" ref={firstnameref}></input><br />
                    <label htmlFor="name" className="label-Styles">LastName: </label>
                    <input name="name" type="text" className="input-styles" ref={lastnameref} ></input><br />
                    <label htmlFor="email" className="label-Styles">Email: </label>
                    <input name="email" type="email" className="input-styles" ref={emailref} ></input><br />
                    <label htmlFor="phoneNo" className="label-Styles">PhoneNo: </label>
                    <input name="phoneNo" type="text" className="input-styles" ref={contactNoref} ></input><br />
                    <label htmlFor="Address" className="label-Styles">Address: </label>
                    <input name="city" type="text" className="input-styles" ref={addressref}></input><br />
                    <button id="btn" onClick={handleSubmit} >Submit</button>
                </div>
            </div>
        </div>
    )
}


export default InfoForm;