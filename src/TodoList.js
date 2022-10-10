import React from "react";
import styles from "./TodoList.module.css";

function TodoList(){
    const DEFAULT_KEYWORD = "";
    const DEFAULT_LIST = [];
    const [keyword, setKeyword] = React.useState(DEFAULT_KEYWORD);
    const [todoList, setTodoList] = React.useState(DEFAULT_LIST);
    const onChange = (evt) => {
        setKeyword((value) => evt.target.value);
    }
    const onSubmit = (evt) => {
        evt.preventDefault();
        if(keyword === "") return;
        // ...List includes the list's elements to the new list.
        setTodoList((curlist) => [...curlist, keyword]);//The state always have to be newed
        setKeyword((value) => DEFAULT_KEYWORD);
    }
    /*React.useEffect(() => {
        if(keyword !== "")
            console.log("Typed : "+keyword);
    }, [keyword]);*/
    React.useEffect(() => {
        console.log("TODO List : "+todoList);
    }, [todoList]);

    return (
        <div className={styles.frame}>
            <h2>TODO LIST ({todoList.length})</h2>
            <form method="get" onSubmit={onSubmit}>
                <input value={keyword} onChange={onChange}
                className={styles.todo} type="text" placeholder="Write your todo ..." />
                <button>Add TODO</button>
            </form>
            <hr />
            <ul className={styles.todoList}>
                {todoList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default TodoList;