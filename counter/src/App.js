// import { Component } from "react";
import style from './App.module.css';
import { useState } from "react";
import Counter from "./component/counter";
// Create Stat in classComponent

// class App extends Component {
//   state = {
//     count : 0,
//     name : "Hasibullah",
//     family : "Aman"
//   }
//   render() {
//     const {count,name,family} = this.state;
//     return (
//       <div>
//         <header>
//           <h1>شمارنده من:</h1>
//         </header>
//         <p>{count}</p>
//         <p>{name}</p>
//         <p>{family}</p>
//       </div>
//     );
//   }
// }

const App = () => {
  const [count, setCount] = useState(0);


  const changeCount = () =>{
    setCount(5);
  }

  const incresNumber = () => {
    setCount(count + 1);
  }
  const decresNumber = () => {
    // if(count === 0){
    //   return alert("کفایت میکند عزیز دلم");
    // } 
    setCount(count - 1);
  }
  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <h1 style={{color:"aqua", border: "1px solid red"}}>شمارنده من:</h1>
        <h1 style={{backgrouundColor: count === 0 ? 'red': "green"}}>{count}</h1>
        <Counter inc = {incresNumber} dec = {decresNumber} rest = {resetCount}/>
      </header>
    </div>
  );
};

export default App;
