import React from "react";
import { useState } from 'react';
import InfoForm from "../infoForm/form";
import DisplayForm from "../DisplayForm/DisplayForm";
import './MainForm.css';

const MainForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactno] = useState("");
    const [address, setAddress] = useState("");

    return (
        <div className="display-div">
            <div className="main-form">

                <InfoForm firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail}  contactNo={contactNo} setContactno={setContactno} address={address} setAddress={setAddress}>
                </InfoForm>
                <h1>Data is being displayed here</h1>
                <DisplayForm firstName={firstName} lastName={lastName} email={email} contactNo={contactNo} Address={address}>                  </DisplayForm>
            </div>

        </div>
    );
};

export default MainForm;