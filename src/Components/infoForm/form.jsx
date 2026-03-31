import React, { useRef } from "react";
import './form.css';
import DisplayForm from "../DisplayForm/DisplayForm";



const InfoForm = ({firstName,setFirstName,lastName,setLastName,email,setEmail,contactno,setContactno,address,setAddress,addUser}) => {
    
   function handleFirstNameChange(event)
   {
        setFirstName(event.target.value)
   }
   function handleLastNameChange(e)
   {
        setLastName(e.target.value)
   }
   function handleEmailChange(e)
   {  
        setEmail(e.target.value)
   }
   const  handleContactNumber= (e) => setContactno(e.target.value)
  

     function handleSubmit()
     {
        if(firstName==""||lastName==""||email==""||contactno==""||address=="")
        {
            alert("Something went wrong")
            return
        }
           
        const user = {
            firstName : firstName,
            lastName : lastName,
            email: email,
            contactno: contactno,
            address: address
        }
        addUser(user)
     }

     
    return (
        <div className="container">
            <div className="form-div">
                <div>
                    <label htmlFor="name" className="label-Styles">FirstName: </label>
                    <input name="name" type="text" id="input-design" onChange={handleFirstNameChange} ></input><br />
                    <label htmlFor="name" className="label-Styles">LastName: </label>
                    <input name="name" type="text" className="input-styles" onChange={handleLastNameChange} ></input><br />
                    <label htmlFor="email" className="label-Styles">Email: </label>
                    <input name="email" type="email" className="input-styles" onChange={handleEmailChange} ></input><br />
                    <label htmlFor="phoneNo" className="label-Styles">PhoneNo: </label>
                    <input name="phoneNo" type="text" className="input-styles" onChange={handleContactNumber}></input><br />
                    <label htmlFor="Address" className="label-Styles">Address: </label>
                    <input name="city" type="text" className="input-styles"  onChange={(e)=>setAddress(e.target.value)}></input><br />
                    <button id="btn" onClick={handleSubmit} >Submit</button>
                </div>
            </div>
        </div>
    )
}


export default InfoForm;