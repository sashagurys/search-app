import React from 'react'

export default function HistoryPage({searchHistory}) {
    return (
        <div>
            {searchHistory.map(item => {
                let searchDataString = "";
                for (let key in item) {
                    if (typeof(item[key]) === "string") searchDataString += `${key}: ${item[key]} `
                    else for (let subKey in item[key]) searchDataString += `${subKey}: ${item[key][subKey]} `
                }
                return (<p>{searchDataString}</p>)
            })}
        </div>
    )
}
