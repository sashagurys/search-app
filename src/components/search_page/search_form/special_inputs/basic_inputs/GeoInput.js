import React, { useState, useEffect } from "react";

export default function GeoInput({ handler }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const json = await response.json();
      const countryNames = await json.map(({ name }) => name);
      setCountries(await countryNames);
    };

    fetchCountries();
  }, []);

  return (
    <>
      <label htmlFor="country">
        Country
        <select name="country" onChange={(e) => handler(e.target.value)}>
          {countries.map((country) => (
            <option>{`${country}`}</option>
          ))}
        </select>
      </label>
    </>
  );
}
