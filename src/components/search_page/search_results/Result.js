import React from 'react'

export default function Result({data}) {

    let resultOutput = [];

    for (let key in data) {
        resultOutput += `${key}: ${data[key]}. `;
    }

    return (
        <li>
            {resultOutput}
        </li>
    )
}
