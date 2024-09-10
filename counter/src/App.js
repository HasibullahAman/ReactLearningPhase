import Counter from "./component/counter";
import { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>شمارنده من</h1>
        <br />
        <Counter count={5} firstName = "Hasibullah Aman" myArray = {[1,2,3,4,5,6]} myStat = {true} />
        <Counter count ={10}>
          این شمارنده من است که من خیلی دوستش دارم
        </Counter>
        <Counter /> 
      </div>
    );
  }
}

// class

// const App = () =>{
//     return(
//         <div className='App'>
//             <h1>
//                 شمارنده من
//             </h1>
//             <br />
//             <Counter />
//             <br />
//         </div>

//     );
// }

export default App;
