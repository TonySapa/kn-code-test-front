import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './partials/Countries'
import Filter from './partials/Filter'

const CountriesMenu = () => {
  const [countries, setCountries] = useState([])
  const [filterName, setFilterName] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])
  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <Countries countries={countries} filterName={filterName} filter={handleFilterChange} />
    </div>
  )
}

export default CountriesMenu