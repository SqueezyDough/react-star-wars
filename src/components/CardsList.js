import React from 'react'
import { Card, CardsLoader } from './index'
import styled from 'styled-components'

function CardsList ({ className, characters, useInitials, loadingState }) {
  return (
    <>
      <CardsLoader state={loadingState} />
      <section>
        <div className={className}>
          {characters ? (
            characters.map(character => (
              <Card
                key={character.url}
                character={character}
                useInitials={useInitials}
              />
            ))
          ) : (
            null
          )}
        </div>
      </section>
    </>
  )
}

export default styled(CardsList)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 5rem;
  padding: 1rem 0;
`
