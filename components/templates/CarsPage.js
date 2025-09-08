import styles from "./CarsPage.module.css";
import Cards from "../module/Card";

function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Cards key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarsPage;
