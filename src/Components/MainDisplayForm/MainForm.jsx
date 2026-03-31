import React from "react";
import { useState } from 'react';
import InfoForm from "../infoForm/form";
import DisplayForm from "../DisplayForm/DisplayForm";
import './MainForm.css';
import SearchForm from "../search";

const MainForm = (props) => {
    const [filteredUsers, setFilteredUsers] = useState([])
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactno] = useState("");
    const [address, setAddress] = useState("");
    const [users, setUsers] = useState([]);
    const addUser = (user) => {

        const updatedUsers = [...users, user]
        setUsers(updatedUsers)
        console.log(updatedUsers)

    };
    const deleteUser = (index) => {
        console.log(index)
        setUsers(users.filter((user, ind) => index != ind))
        setFilteredUsers(users)
        
    }
    const filterUsers = (searchText) => {
        if (!searchText)
            setFilteredUsers(users);
        else
            setFilteredUsers(users.filter((user) => user.email.includes(searchText)));
    }
    return (
        <div className="display-div">
            <div className="main-form">

                <InfoForm firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} contactNo={contactNo} setContactno={setContactno} address={address} setAddress={setAddress} addUser={addUser}>
                </InfoForm>
                {/* {users.length>0 && <DisplayForm user={users?.[0]}> </DisplayForm>} */}


                {/* // <DisplayForm users={users}></DisplayForm> */}
            </div>
            <SearchForm filterUsers={filterUsers}></SearchForm>
            {filteredUsers.map((user, index) => (

                <DisplayForm index={index} user={user} deleteUser={deleteUser} />
            ))}

        </div>
    );
};

export default MainForm;