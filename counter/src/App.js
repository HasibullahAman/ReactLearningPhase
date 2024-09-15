// import { Component } from "react";
import "./App.css";
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
    setCount(count - 1);
  }
  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <header>
        <h1>شمارنده من:</h1>
        <h1>{count}</h1>
        <Counter inc = {incresNumber} dec = {decresNumber} rest = {resetCount}/>
      </header>
    </div>
  );
};

export default App;
