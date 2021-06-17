import React, { useEffect, useState } from "react";
import GeoInput from "./basic_inputs/GeoInput";

export default function FlightsInputs({
  searchDataSpec,
  assignSearchSpecificData,
}) {
  const [flightData, setFlightData] = useState({
    from: "",
    to: "",
  });

  const setTo = (newTo) => setFlightData({ ...flightData, to: newTo });
  const setFrom = (newFrom) => setFlightData({ ...flightData, from: newFrom });

  useEffect(() => assignSearchSpecificData(flightData), [flightData]);

  return (
    <>
      <p>From</p>
      <GeoInput handler={setFrom} />

      <p>To</p>
      <GeoInput handler={setTo} />
    </>
  );
}
