import React from "react";
import DateInputs from "./DateInputs";
import FormControlBtns from "./FormControlBtns";
import FlightsInputs from "./special_inputs/FlightsInputs";
import CarsInputs from "./special_inputs/CarsInputs";
import HotelsInputs from "./special_inputs/HotelsInputs";

export default function SearchForm({
  searchData,
  assignSearchSpecificData,
  assignSearchDates,
  handleSearch,
}) {
  return (
    <form>
      <DateInputs handler={assignSearchDates} />
      {searchData.type === "flights" && (
        <FlightsInputs
          searchDataSpec={searchData.typeSpecificData}
          assignSearchSpecificData={assignSearchSpecificData}
        />
      )}
      {searchData.type === "cars" && (
        <CarsInputs
          searchDataSpec={searchData.typeSpecificData}
          assignSearchSpecificData={assignSearchSpecificData}
        />
      )}
      {searchData.type === "hotels" && (
        <HotelsInputs
          searchDataSpec={searchData.typeSpecificData}
          assignSearchSpecificData={assignSearchSpecificData}
        />
      )}
      <FormControlBtns handler={handleSearch}></FormControlBtns>
    </form>
  );
}
