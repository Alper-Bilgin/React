import { useState } from "react";
import "./App.css";
// useSelector belli bir parçayı seçmek için kullanılır
// useDispatch actionları dispatch etmeyi sağlar
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import UserList from "./UserList";
import { store } from " ./>redux/store";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.counter);
  console.log(value);
  return (
    <>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttır</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
      <div>
        <UserList />
      </div>
    </>
  );
}

export default App;
