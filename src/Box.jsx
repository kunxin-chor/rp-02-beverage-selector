import {useState} from 'react';

/*
Requirements for a function to be a component
1. The first alphabet must be upper case
2. Return JSX

Props: are data passed into a componnet
  - props are objects used like dictionary
*/
function Box(props) {

    const [timesClicked, setTimesClicked] = useState(0);

    return (<div onClick={()=>setTimesClicked(timesClicked+1)}style={{
        border:"6px solid " + props.borderColor,
        backgroundColor: props.bgcolor
    }}>
        {/* props.children all the children elements nested into the component */}
        {props.children}
        <p>Number of times clicked = {timesClicked}</p>
    </div>);
}

export default Box;