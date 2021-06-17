import React from 'react'

export default function TypeSelector({searchDataType, assignSearchType}) {



    return (
        <div className="type-selector">
            <button 
            className={`${searchDataType === "flights" ? "active" : ""}`}
            onClick={() => assignSearchType("flights")}
            >Flights</button>
            <button
            className={`${searchDataType === "cars" ? "active" : ""}`}
            onClick={() => assignSearchType("cars")}
            >Cars</button>
            <button
            className={`${searchDataType === "hotels" ? "active" : ""}`}
            onClick={() => assignSearchType("hotels")}
            >Hotels</button>
        </div>
    )
}
