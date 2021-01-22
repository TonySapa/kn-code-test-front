/* eslint-disable react/prop-types */
import React from 'react'
import RelevantInfo from './RelevantInfo'

const CountryDetail = ({ country }) => {
  return (
    <div>
      <RelevantInfo country={country} />
    </div>
  )
}

export default CountryDetail