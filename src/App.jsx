import { useState } from 'react'
import './App.css'
import Header from './Header';
import Box from './Box';

function App() {

  // the first argument of useState is the default value
  const [favoriteBeverage, setFavoriteBeverage] = useState("");

  const selectBubbleTea = () => {
    setFavoriteBeverage("Bubble Tea");
  }

  return (
    <>
      <Header></Header>
      <p>Select your favorite beverage</p>
      <button onClick={selectBubbleTea}>Choose Bubble Tea</button>
      <button onClick={()=>setFavoriteBeverage("Coffee")}>Choose Coffee</button>
      
      <Box bgcolor="azure" borderColor="black">
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
