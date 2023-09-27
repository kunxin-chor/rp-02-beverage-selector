import { useState } from 'react'
import './App.css'
import Header from './Header';
import Box from './Box';

function App() {

  // the first argument of useState is the default value
  // but if the state is already given a value previously, then get the current value of the state
  // two return values
  // 1. the current value of the state variable OR if it is not initialized, the default value
  // 2. a function, a mutator that can change the state value
  const [favoriteBeverage, setFavoriteBeverage] = useState("");
  const [sugarLevel, setSugarLevel] = useState("low");

  const selectBubbleTea = () => {
    setFavoriteBeverage("Bubble Tea");
  }

  let color = "";
  if (favoriteBeverage === "Coffee") {
    color = "brown";
  } else if (favoriteBeverage === "Bubble Tea") {
    color = "pink"
  }

  return (
    <>
      <Header></Header>
      <p>Select your favorite beverage</p>
      <button onClick={selectBubbleTea}>Choose Bubble Tea</button>
      <button onClick={()=>setFavoriteBeverage("Coffee")}>Choose Coffee</button>
      
      <div>
        <h2>Sugar Level</h2>
        <button onClick={()=>setSugarLevel("low")}>Low</button>
        <button onClick={()=>setSugarLevel("medium")}>Medium</button>
        <button onClick={()=>setSugarLevel("high")}>High</button>
      </div>

      <Box bgcolor="azure" borderColor={color}>
        <p>Your favorite drink is {favoriteBeverage} and your preferred sugar level is {sugarLevel}</p>
      </Box>
      
      <Box bgcolor="azure" borderColor={ favoriteBeverage === "Coffee" ? "brown" : "pink"}>
        <p>Your favorite drink is {favoriteBeverage}</p>
      </Box>
      

      {/* <Box bgcolor="red" borderColor="yellow">She sells seashell</Box>
      <Box bgcolor="purple" borderColor="red">Jack and Jill</Box>
      <Box bgcolor="blue" borderColor="orange">
        <h2>Mary has a little lamb</h2>
        <h3>which wool is white as snow</h3>

      </Box> */}
      
    </>
  )
}

export default App
