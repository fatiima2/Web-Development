import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import Greeting from './Components/greeting';
import Counter from './Components/counter';
import  InfoForm from './Components/infoForm/form';

function App() {
  
  /*const [countValue, setCountValue] = useState(0);
    const increment = () => {
        setCountValue(countValue + 1);
    }
    const decrement = () => {
        setCountValue(countValue - 1);
    } */
  return (
    <div className="App">
      <h1>Welcome Fatima</h1>
      
      {/* <Counter inc={increment} dec={decrement} countValue={countValue}> >
        <p>  Press '+' for Increment and '-' for decrement </p>
      </Counter> */}
      <InfoForm>

      </InfoForm>
    </div>

  );
 
}

export default App;
