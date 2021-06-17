import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HistoryPage from "./components/history_page/HistoryPage";
import SearchPage from "./components/search_page/SearchPage";

function App() {
  const [activePage, setActivePage] = useState("search");

  const [searchData, setSearchData] = useState({
    type: "flights",
    dates: { startDate: "", endDate: "" },
    typeSpecificData: {},
  });

  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage}></Header>

      {activePage === "search" && (
        <SearchPage
          searchData={searchData}
          setSearchData={setSearchData}
          searchHistory={searchHistory}
          setSearchHistory={setSearchHistory}
        />
      )}
      {activePage === "history" && (
        <HistoryPage setSearchData={setSearchData} searchHistory={searchHistory}/>
      )}
    </>
  );
}

export default App;
