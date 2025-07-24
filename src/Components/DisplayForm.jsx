import react from 'react';
import './form.jsx';


const DisplayForm = ({firstName,lastName,email,contactNo,Address}) =>{
    return(
        <div className="main-display">
            <div className="display">
                <p className="display-text">First Name: {firstName}<br/>
                Last Name: {lastName}<br/> Email={email}<br/> contactNo={contactNo}<br/>
                 Address={Address}
                 </p>
            </div>
        </div>
    )

}

export default DisplayForm;