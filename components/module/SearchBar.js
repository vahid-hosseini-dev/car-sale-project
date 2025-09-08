import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";

function SearchBar({ data }) {
  const router = useRouter();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please Enter minimum and maximun price!");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="Inter min-price"
        ></input>
        <input
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="Inter max-price"
        ></input>
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
