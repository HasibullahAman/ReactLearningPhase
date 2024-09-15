import PropTypes from 'prop-types';

const Counter = ({inc,dec,rest,count}) =>{
  return(
    <div>
      <h1>{count}</h1>
      <br />
      <br />
      <button onClick={inc}>+</button>
      <br />
      <button onClick={dec}>-</button>
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