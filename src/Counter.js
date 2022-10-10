import React from "react";
import MemoBtn from "./Button";

function Counter(){
    const DEFAULT_STATE = 0;
    const [counter, setCounter] = React.useState(DEFAULT_STATE);
    const onClick = () => setCounter((value) => value + 1);
    React.useEffect(() => {
      console.log("Counter Clicked!");
    }, [counter]);//Only run when counter changes.

    return (
        <div>
            <h3>Count : {counter}</h3>
            <MemoBtn id={"btn"} evt={onClick} text={"Click me"} />
        </div>
    );
}

export default Counter;