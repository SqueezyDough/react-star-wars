import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { CardsList } from './index'
import { getFirstCharacter, findRelations } from '../modules/utils'
import ThemeContext from '../styles/ThemeContext'

function RelatedCharacters ({ className, sourceRelation, loadingState }) {
  const [criteria, setCriteria] = useState()
  const [relations, setRelations] = useState()
  const { selectedOption } = useSelector(state => state)

  useEffect(() => {
    if (sourceRelation) {
      const name = sourceRelation.name || sourceRelation.title

      setCriteria({
        shouldInclude: getFirstCharacter(name).toLowerCase(),
        shouldExclude: name.toLowerCase()
      })
    }
  }, [sourceRelation])

  useEffect(() => {
    findRelations(selectedOption, criteria)
      .then(foundRelations => setRelations(foundRelations))
      .catch(() => {})
  }, [criteria, selectedOption])

  return (
    <>
      {relations ? (
        <section className={className}>
          <div className='content-wrapper'>
            <h2>
              Other <em>{selectedOption}</em> that include <em> {criteria.shouldInclude}</em>
            </h2>

            <ThemeContext.Provider value='dark'>
              <CardsList
                characters={relations}
                useInitials
                loadingState={loadingState}
              />
            </ThemeContext.Provider>
          </div>
        </section>
      ) : (
        null
      )}
    </>
  )
}

export default styled(RelatedCharacters)`
  position: relative;
  margin-top: 6rem;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.primaryColorLight};
  z-index: 1;

  h2 {
    font-size:  ${({ theme }) => theme.fontSizeS};
  }

  em {
    font-style: normal;
    color: ${({ theme }) => theme.primaryColorDark};

    &:last-of-type {
      text-transform: uppercase;
    }
  }
`
