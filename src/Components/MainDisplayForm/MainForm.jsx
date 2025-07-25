import React from "react";
import InfoForm from "../infoForm/form";
import DisplayForm from "../DisplayForm/DisplayForm";
import './MainForm.css';

const MainForm = (props) => {
    return (
        <div className="main-form">
            <div className="display-div">
                <InfoForm>
                </InfoForm>
                <h1>Data is being displayed here</h1>
                <DisplayForm firstName="Fatima" lastName="Zahid" email="fatimazahid@gmail.com" contactNo="1234567890" Address="house no 34 street 2,Sargodha">
                    </DisplayForm>
             </div>

        </div>
    );
};

export default MainForm;
