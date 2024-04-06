import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, handleReset,fetchData } from "./Components/action";

export default function Count() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

console.log(data.internet[0])
 
  return (
    <>
      <h1>{data.increment.count}</h1>
      <button
        onClick={() => {
          dispatch(Increment()); // Dispatch your custom action first
          dispatch({
            type: "Increment Table",
            payload: { id: data.table.length + 1 ,date:new Date() },
          });
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch(Decrement());
          dispatch({
            type: "Decrement Table",
            payload: { id: data.table.length + 1 ,date:new Date()},
          });
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(handleReset());
          dispatch({ type: "RESET Table", payload: { id: data.table.length + 1  ,date:new Date()} });
        }}
      >
        Reset
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <td>ID</td> {/* Assuming each object in data.table has an "id" */}
            <td>Date</td>{" "}
            {/* Assuming each object in data.table has a "date" */}
          </tr>
        </thead>
        <tbody>
          {data.table.map((each) => {
            return (
              <tr key={each.id}>
                <td>{each.id}</td>
                <td>{each.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={()=>dispatch(fetchData())}>GET DATA</button>
    </>
  );
}
