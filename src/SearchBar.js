import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar(){
    const DEFAULT_KEYWORD = "";
    const [keyword, setKeyword] = React.useState(DEFAULT_KEYWORD);
    const onChange = (evt) => {
      setKeyword((prev) => evt.target.value);
    }
    React.useEffect(() => {
        if(keyword !== "")
          console.log("SEARCH FOR", keyword);
      }, [keyword]);//Only run when keyword changes.
    return (
        <div className={styles.frame}>
            <h2>Moogle</h2>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search ..." 
                className={styles.searchBar} />
        </div>
    );
}

export default SearchBar;