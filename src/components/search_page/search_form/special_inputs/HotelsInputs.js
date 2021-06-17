import React, { useEffect, useState } from "react";
import DropdownInput from "./basic_inputs/DropdownInput";
import GeoInput from "./basic_inputs/GeoInput";

export default function HotelsInputs({ assignSearchSpecificData }) {
  const amenitiesOptions = [
    "1 star",
    "2 stars",
    "3 stars",
    "4 stars",
    "5 stars",
  ];

  const [hotelsData, setHotelsData] = useState({
    amenities: "",
    location: "",
  });

  const setAmenities = (newAmenities) =>
    setHotelsData({ ...hotelsData, amenities: newAmenities });
  const setLocation = (newLocation) =>
    setHotelsData({ ...hotelsData, location: newLocation });

  useEffect(() => assignSearchSpecificData(hotelsData), [hotelsData]);

  return (
    <>
      <label htmlFor="amenities">
        Class
        <DropdownInput
          htmlName={"amenities"}
          options={amenitiesOptions}
          handler={setAmenities}
        />
      </label>
      <GeoInput handler={setLocation} />
    </>
  );
}
