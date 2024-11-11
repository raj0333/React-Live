// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/index';

const View = () => {
  // useSelector is used to access the Redux state
  const count = useSelector((state) => state.count);

  // useDispatch is used to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <input type='text' name='quantity' className='quantity_input' value={count} />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default View;
