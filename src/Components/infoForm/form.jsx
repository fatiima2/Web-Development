import React from "react";
import './form.css' ;

const InfoForm= () => {

    return(
       <div class="main-div">
        <div className="form-div">
            <div>
                <label for="name" class="label-Styles">FirstName: </label>
                <input name="name"  type="text" id="input-design"></input><br/>
                <label for="name"  class="label-Styles">LastName: </label>
                <input name="name" type="text" class="input-styles"></input><br/>
                <label for="email" class="label-Styles">Email: </label>
                <input name="email" type="email" class="input-styles"></input><br/>
                <label for="phoneNo" class="label-Styles">PhoneNo: </label>
                <input name="phoneNo" type="text" class="input-styles"></input><br/>
                <label for="Address" class="label-Styles">Address: </label>
                <input name="city" type="text" class="input-styles"></input><br/>
                <button id="btn">Submit</button>
            </div>
        </div>
        </div> 
    )
}


export default InfoForm;