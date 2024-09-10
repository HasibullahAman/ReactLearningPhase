import { Children, Component } from "react";

// const Counter = () => {
//     return(
//         <div>
//             <p> شمارنده: {Math.floor(Math.random() * 1000)} </p>
//         </div>
//     )
// }

// props.count





class Counter extends Component{
    render(){
        console.log(this.props )
        const{count} = this.props;
        return(
            <div>
                <p> شمارنده:{count}</p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}


Counter.defaultProps = {
    count: 100
}


export default Counter;
