import React, { useEffect, useState } from "react";
import DropdownInput from "./basic_inputs/DropdownInput";
import GeoInput from "./basic_inputs/GeoInput";

export default function CarsInputs({ assignSearchSpecificData }) {
  const classOptions = ["Economy", "Business"];

  const [carsData, setCarsData] = useState({
    carClass: "",
    location: "",
  });

  const setCarClass = (newClass) =>
    setCarsData({ ...carsData, carClass: newClass });
  const setLocation = (newLocation) =>
    setCarsData({ ...carsData, location: newLocation });

  useEffect(() => assignSearchSpecificData(carsData), [carsData]);

  return (
    <>
      <label htmlFor="class">
        Class
        <DropdownInput
          htmlName={"class"}
          options={classOptions}
          handler={setCarClass}
        />
      </label>
      <GeoInput handler={setLocation} />
    </>
  );
}
