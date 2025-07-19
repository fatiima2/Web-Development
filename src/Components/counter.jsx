import react from 'react';
import './counter.css';
const Counter = ({inc,dec,countValue}) => {
    
    return(
        <div>
            <div  id="main-div">
                <div id="counter-div">
                    <h1>Counter</h1>
                    <h2>{countValue}</h2>
                </div>
            </div>
            <button onClick={inc} id="btn">+</button>
            <button onClick={dec} id="btn">-</button>
            <h1> {countValue} </h1>
        </div>
    )
}

export default Counter;