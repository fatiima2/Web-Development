import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import Demo from './Components/demo';
//import Greeting from './Components/greeting';
//import Counter from './Components/counter';

import MainForm from './Components/MainDisplayForm/MainForm.jsx';

function App() {
   /*const[firstname,setfirstname]=useState("");
   const[lastname,setlastname]=useState("");
   const[email,setemail]=useState("");
   const[contactno,setContactno]=useState("");
   const[address,setAddress]=useState("")
  /*const [countValue, setCountValue] = useState(0);
    const increment = () => {
        setCountValue(countValue + 1);
    }
    const decrement = () => {
        setCountValue(countValue - 1);k
    } */
  return (
    <div className="App">
      <h1>Welcome Fatima</h1>
      
      {/* <Counter inc={increment} dec={decrement} countValue={countValue}> >
        <p>  Press '+' for Increment and '-' for decrement </p>
      </Counter> */}
       <MainForm>
        <h1>Hi MAIN INFO FORM Is just here</h1>
      </MainForm>
      {/*<Demo>
        <h1>it was just random practice code</h1>
        </Demo>*/}      
    </div>

      );
 
}

export default App;
