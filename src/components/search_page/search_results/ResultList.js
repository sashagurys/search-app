import React from 'react'
import Result from './Result'

export default function ResultList({searchResults}) {


    return (
        <ul>
            {searchResults.map(result => <Result data={result}/>)}            
        </ul>
    )
}
