import React, { useEffect } from 'react';
import styles from "./App.module.css";
import Counter from './Counter';
import HideButtonMenu from './HideButtonMenu';
import SearchBar from './SearchBar';
import TodoList from "./TodoList";
import CoinTracker from "./CoinTracker";
import Movie from "./Movie";

const Menu = {
  DEFAULT_MENU: {index:"-1", value:"CHOOSE A MENU"},
  SEARCH_BAR_MENU: {index:"0", value:"SEARCHBAR MENU"},
  COUNTER_MENU: {index:"1", value:"COUNTER MENU"},
  HIDE_BUTTON_MENU: {index:"2", value:"HIDE BUTTON MENU"},
  TODO_LIST_MENU: {index:"3", value: "TODO LIST MENU"},
  COIN_TRACKER_MENU: {index:"4", value: "COIN TRACKER MENU"},
  MOVIE_MENU: {index:"5", value: "MOVIE_MENU"},
}

function App() {
  const [index, setIndex] = React.useState(Menu.DEFAULT_MENU.index);

  const onSelect = (evt) => setIndex((value) => evt.target.value);

  useEffect(() => {
    console.log("CALLING AN API...");
  }, []);//Only run once

  return (
    <div className={styles.frame}>
      <div className={styles.titleFrame}>
        <h1 className={styles.title}>React JS Basic</h1>
      </div>
      <div className={styles.menuFrame}>
        <select className={styles.selectMenu} value={index} onChange={onSelect}>
          <option value={Menu.DEFAULT_MENU.index}>
            {Menu.DEFAULT_MENU.value}
          </option>
          <option value={Menu.SEARCH_BAR_MENU.index}>
            {Menu.SEARCH_BAR_MENU.value}
          </option>
          <option value={Menu.COUNTER_MENU.index}>
            {Menu.COUNTER_MENU.value}
          </option>
          <option value={Menu.HIDE_BUTTON_MENU.index}>
            {Menu.HIDE_BUTTON_MENU.value}
          </option>
          <option value={Menu.TODO_LIST_MENU.index}>
            {Menu.TODO_LIST_MENU.value}
          </option>
          <option value={Menu.COIN_TRACKER_MENU.index}>
            {Menu.COIN_TRACKER_MENU.value}
          </option>
          <option value={Menu.MOVIE_MENU.index}>
            {Menu.MOVIE_MENU.value}
          </option>
        </select>
      </div>

      {index === Menu.SEARCH_BAR_MENU.index ? <SearchBar /> : null}
      {index === Menu.COUNTER_MENU.index ? <Counter /> : null}
      {index === Menu.HIDE_BUTTON_MENU.index ? <HideButtonMenu />
 : null}
      {index === Menu.TODO_LIST_MENU.index ? <TodoList /> : null} 
      {index === Menu.COIN_TRACKER_MENU.index ? <CoinTracker /> : null} 
      {index === Menu.MOVIE_MENU.index ? <Movie /> : null} 
    </div>
  );
}

export default App;
