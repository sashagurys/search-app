import React, { useEffect, useState } from 'react'

export default function DateInputs({handler}) {
    
    const today = new Date(new Date().getTime())
    const minStartDate = today.toISOString().split('T')[0]
    const [maxStartDate, setMaxStartDate] = useState("")
    const [minEndDate, setMinEndDate] = useState(today.toISOString().split('T')[0])
    
    const [dates, setDates] = useState({
        startDate: "",
        endDate: "",
    })

    const handleUserStartDateSet = (e) => {
        setMinEndDate(e.target.value);
        setDates({...dates, startDate: e.target.value})
    }
    const handleUserEndDateSet = (e) => {
        setMaxStartDate(e.target.value);
        setDates({...dates, endDate: e.target.value})
    }

    useEffect(() => handler(dates), [dates])

    return (
        <>
            <label htmlFor="start-date">
                Start Date
                <input 
                name="start-date" 
                type="date" 
                min={minStartDate}
                max={maxStartDate}
                onChange={ handleUserStartDateSet }
                />
            </label>
            <label htmlFor="end-date">
                End Date
                <input 
                name="end-date" 
                type="date" 
                min={minEndDate}
                onChange={ handleUserEndDateSet }
                />
            </label>

        </>
    )
}
