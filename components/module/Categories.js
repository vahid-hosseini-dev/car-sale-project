import Link from "next/link";
import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import styles from "./Categories.module.css";

const Cats = [
  { id: 0, name: "Sedan", Icon: Sedan },
  { id: 1, name: "SUV", Icon: Suv },
  { id: 2, name: "Hatchback", Icon: Hatchback },
  { id: 3, name: "Sport Cars", Icon: Sport },
];

function Categories() {
  return (
    <div className={styles.container}>
      {Cats.map((cat) => (
        <Link
          key={cat.id}
          href={`/categories/${cat.name.toLowerCase().split(" ")[0]}`}
        >
          <div>
            <p>{cat.name}</p>
            <cat.Icon />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
