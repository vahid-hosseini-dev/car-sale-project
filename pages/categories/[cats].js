import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function CarCategories() {
  const router = useRouter();
  const { cats } = router.query;

  const filteredCars = carsData.filter((car) => car.category === cats);

  return <CarsList data={filteredCars} />;
}

export default CarCategories;
