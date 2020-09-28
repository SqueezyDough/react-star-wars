import React from 'react'
import styled from 'styled-components'

function GhostCard ({ className }) {
  return (
    <div className={className}>
      <article className='card'>
        <span className='card__short-title'>L</span>
        <h1 className='card__title'>Loading...</h1>
      </article>
    </div>
  )
}

export default styled(GhostCard)` 
  background-color: ${({ theme }) => theme.primaryColorLight};
  transition: background ${({ theme }) => theme.transition};
  text-align: center;
  color:  ${({ theme }) => theme.secondaryColorDark};
  animation: pulse 1s infinite alternate;

  @keyframes pulse {
    0% {
      opacity: .2;
    }
  }

  &:first-of-type {
    grid-column: 2;
  }

  .card {
    padding: 10%;
  }

  .card__short-title {
    font-family: ${({ theme }) => theme.fontTitles}
    font-size: ${({ theme }) => theme.fontSizeXXL};
    font-weight: bold;
  }
`
