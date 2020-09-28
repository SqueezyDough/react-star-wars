import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Utils } from '../modules'
import { ContentLoader } from './'

function Details ({ className, character, state }) {
  const [isDone, setIsDone] = useState(false)

  // Apply a minumum delay before loading animation finishes
  useEffect(() => {
    let timer
    if (state === false) {
      timer = setTimeout(function () {
        setIsDone(true)
      }, 3000)
    } else {
      setIsDone(false)
    }

    return () => { clearTimeout(timer) }
  }, [state])

  return (
    <article className={className}>
      <ContentLoader done={isDone} />
      {character
        ? (
          <div className={`character-details ${isDone ? 'done' : ''}`}>
            <h1>{character.name}</h1>
            <ul className='props-list'>
              {character.props.map(prop => (
                Object.entries(prop).map(([key, val]) =>
                  <li className='props-list__item' key={key}>
                    <label className='props-list__item__label'>{Utils.cleanDisplayLabel(key)}</label>

                    <span className='props-list__item__value'>
                      {val ? (
                        `${val}`
                      ) : (
                        'N/A'
                      )}
                    </span>
                  </li>
                )
              ))}
            </ul>
          </div>
        )
        : null}
    </article>
  )
}

export default styled(Details)`
  min-height: 25rem;

  h1 {
    align-self: center;
    font-size: ${({ theme }) => theme.fontSizeXXL};
  }

  .character-details {
    display: none;
    justify-content: space-between;
    
    &.done {
      display: flex;
    }  
  }

  .props-list {
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    justify-content: space-evenly;

    &__item {
      margin: .5rem;

      * { display: block; }

      &__label {
        font-weight: bold;
      }

      &__value {
        text-transform: uppercase;
      }
    }
  }
`
