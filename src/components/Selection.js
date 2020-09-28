import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeValue } from '../features/resource/resourceSlice'
import styled from 'styled-components'

function Select ({ className, options }) {
  const { selectedOption } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(changeValue(e.target.value))
  }

  return (
    <div className={className}>
      <select onChange={handleChange} value={selectedOption}>
        {options.map(option => (
          <option value={option.value.name} key={option.value.name}>{option.value.name}</option>
        ))}
      </select>
    </div>
  )
}

export default styled(Select)`
  display: inline;

  select {
    margin: 3rem .5rem 0;
    padding: .5rem 1rem;
    border: none;
    font-size: ${({ theme }) => theme.fontSizeXS}
  }
`
