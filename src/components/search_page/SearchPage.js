import React, { useState } from "react";
import TypeSelector from "./TypeSelector";
import SearchForm from "./search_form/SearchForm";
import mockData from "../../util/mockData";
import ResultList from "./search_results/ResultList";

export default function SearchPage({
  searchData,
  setSearchData,
  searchHistory,
  setSearchHistory,
}) {
  const [searchResults, setSearchResults] = useState([]);

  const assignSearchType = (newType) => {
    setSearchData((prevData) => {
      return { ...prevData, type: newType };
    });
  };
  const assignSearchSpecificData = (newData) => {
    setSearchData((prevData) => {
      return { ...prevData, typeSpecificData: newData };
    });
  };
  const assignSearchDates = (newDates) => {
    setSearchData((prevData) => {
      return { ...prevData, dates: newDates };
    });
  };

  const handleSearch = () => {
    const resultsByType = mockData.find(
      ({ type }) => type === searchData.type
    ).data;

    if (searchData.type === "flights") {
      const resultsByFrom = resultsByType.filter(
        ({ from }) => from === searchData.typeSpecificData.from
      );
      const resultsByTo = resultsByFrom.filter(
        ({ to }) => to === searchData.typeSpecificData.to
      );
      const resultsByDate = resultsByTo.filter(
        ({ date }) =>
          new Date(date) >= new Date(searchData.dates.startDate) &&
          new Date(date) <= new Date(searchData.dates.endDate)
      );
      setSearchResults(resultsByDate);
    }

    if (searchData.type === "cars") {
      const resultsByCarClass = resultsByType.filter(
        ({ carClass }) => carClass === searchData.typeSpecificData.carClass
      );
      const resultsByLocation = resultsByCarClass.filter(
        ({ location }) => location === searchData.typeSpecificData.location
      );
      const resultsByDate = resultsByLocation.filter(
        ({ date }) =>
          new Date(date) >= new Date(searchData.dates.startDate) &&
          new Date(date) <= new Date(searchData.dates.endDate)
      );
      setSearchResults(resultsByDate);
    }

    if (searchData.type === "hotels") {
      const resultsByAmenities = resultsByType.filter(
        ({ amenities }) => amenities === searchData.typeSpecificData.amenities
      );
      const resultsByLocation = resultsByAmenities.filter(
        ({ location }) => location === searchData.typeSpecificData.location
      );
      const resultsByDate = resultsByLocation.filter(
        ({ date }) =>
          new Date(date) >= new Date(searchData.dates.startDate) &&
          new Date(date) <= new Date(searchData.dates.endDate)
      );
      setSearchResults(resultsByDate);
    }

    setSearchHistory([...searchHistory, searchData]);
  };

  return (
    <>
      <TypeSelector
        searchDataType={searchData.type}
        assignSearchType={assignSearchType}
      ></TypeSelector>

      <SearchForm
        searchData={searchData}
        assignSearchSpecificData={assignSearchSpecificData}
        assignSearchDates={assignSearchDates}
        handleSearch={handleSearch}
      />

      <ResultList searchResults={searchResults} />
    </>
  );
}
