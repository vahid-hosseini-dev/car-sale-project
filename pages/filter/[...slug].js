import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  console.log(min, max);

  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filteredData.length) return <h3>NotFound</h3>;

  console.log(filteredData)

  return <CarsList data={filteredData} />;
}

export default FilteredCars;
