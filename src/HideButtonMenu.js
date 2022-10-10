import React from "react";

import MemoBtn from "./Button";
import styles from "./HideButtonMenu.module.css";

function Title(){
    const TITLE = "Hide Menu";
    // const release = () => {
    //     console.log({TITLE}+" destroyed !!");
    // }
    // const create = () => {
    //     console.log({TITLE}+" created !!");
    //     return release;//cleanup function, It works when this component destroyed.
    // }
    // React.useEffect(create, []);
    React.useEffect(() => {
        console.log("Created!!");
        return () => console.log("Destroyed!!");
    }, []);
    return <h2>{TITLE}</h2>;
}

function HideButtonMenu(){
    const DEFAULT_VISIBLE = true;
    const [visible, setVisible] = React.useState(DEFAULT_VISIBLE);
    const onClick = () => {
        setVisible((value) => !value);
    }

    return (
        <div className={styles.frame}>
            {visible ? <Title /> : null}
            <MemoBtn evt={onClick} text={visible ? "Hide":"Show"} id={"hideBtn"} />
        </div>
    );
}

export default HideButtonMenu;