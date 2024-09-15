import PropTypes from 'prop-types';

const Counter = ({inc,dec,rest,count}) =>{
  return(
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={inc}>+</button>
      <button style={{backgroundColor: count === 0 ? 'teal' : 'red'}} onClick={dec} disabled={count ===0}>-</button>
      <br />
      <button onClick={rest}>reset</button>
    </div>
  )
}


Counter.propTypes = {    
  inc: PropTypes.func, 
  dec: PropTypes.func,
  rest: PropTypes.func,
  count: PropTypes.number
}

export default Counter;