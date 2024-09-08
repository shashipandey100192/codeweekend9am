import React, { Fragment } from 'react'
import { increment,decrement } from './Myslicerfunc';
import { useSelector,useDispatch } from 'react-redux';

function Reduxwelcomepage() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

  return (
    <Fragment>
    <div>Reduxwelcomepage {count}</div>

    <button className="btn btn-success" onClick={() => dispatch(increment())}>Increment</button>
    <button className="btn btn-success" onClick={() => dispatch(decrement())}>Decrement</button>
        </Fragment>
  )
}

export default Reduxwelcomepage