import React from "react";
import './form.css' ;
import DisplayForm from "../DisplayForm/DisplayForm";

const InfoForm= ({setfirstname,setlastname,setemail,setcontactno,setaddress}) => {

    return(
    <div className="container">
        <div className="form-div">
            <div>
                <label for="name" className="label-Styles">FirstName: </label>
                <input name="name"  type="text" id="input-design" ></input><br/>
                <label for="name"  className="label-Styles">LastName: </label>
                <input name="name" type="text" class="input-styles" ></input><br/>
                <label for="email" className="label-Styles">Email: </label>
                <input name="email" type="email" class="input-styles" ></input><br/>
                <label for="phoneNo" className="label-Styles">PhoneNo: </label>
                <input name="phoneNo" type="text" class="input-styles" ></input><br/>
                <label for="Address" className="label-Styles">Address: </label>
                <input name="city" type="text" className="input-styles" ></input><br/>
                <button id="btn" >Submit</button>
            </div>
        </div>
    </div> 
    )
}


export default InfoForm;