import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../../store/reducers/selectors/getCounterValue/getCounterValue";
import { decrement, increment } from "../../store/reducers/counterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const inc = () => {
    dispatch(increment());
  };

  const dec = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button data-testid="increment-btn" onClick={inc}>
        INC
      </button>
      <button data-testid="decrement-btn" onClick={dec}>
        DEC
      </button>
    </div>
  );
};

export default Counter;
