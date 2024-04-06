
export const Increment = () => {
  return { type: "Increment", payload: 1 };
};
export const Decrement = () => {
  return { type: "Decrement", payload: -1 };
};
export const handleReset = () => {
  console.log("reset function called");
  return { type: "RESET" };
};

export const fetchData = async (dispatch,getState) => {
  console.log("function called")
  const response = await fetch("https://gorest.co.in/public-api/users");
  const data = await response.json();
   dispatch({ type: "ADD", payload: data })
   console.log(getState())
};
