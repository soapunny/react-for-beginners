import React from 'react';
//npm i prop-types
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const MemoBtn = React.memo(Button);
function Button({text = "Button", evt, id="btn"}){
    return (
        <button onClick={evt} id={id} className={styles.btn}>
            {text}
        </button>
    );
}
Button.propTypes = {
    text: PropTypes.string,
    evt: PropTypes.func.isRequired,
    id: PropTypes.string,
}

export default MemoBtn;