import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header, Details, RelatedCharacters } from '../components/index'
import { Api, Utils } from '../modules/index'
import ErrorBoundary from '../ErrorBoundary'
import LISTED_PROPS from '../data/listed-props.json'

export default function Character () {
  const { resource, id } = useParams()
  const [character, setCharacter] = useState()

  // loading state
  const [cardsLoadingState, setCardsLoadingState] = useState({})
  const [detailsLoadingState, setDetailsLoadingState] = useState({})

  useEffect(() => {
    const currentListedProps = LISTED_PROPS[resource]
    const state = {
      start: true,
      loaders: 2
    }

    setCardsLoadingState(state)
    setDetailsLoadingState(true)

    Api.fetchData(`${process.env.REACT_APP_API}${resource}/${id}`)
      .then(char => {
        setCharacter(Utils.cleanCharacterDetails(char, currentListedProps, process.env.REACT_APP_API))
      })
      .catch(() => {})
      .finally(() => {
        state.start = false
        setCardsLoadingState(state)
        setDetailsLoadingState(false)
      })
  }, [id, resource])

  // fetch display name when prop has http as value
  useEffect(() => {
    if (character) {
      Object.entries(character.props[0]).map(async val => {
        if (!val[1]) return
        if (val[1].includes('http')) {
          const key = val[0]
          const value = val[1]
          const updatedCharacter = { ...character }

          updatedCharacter.props[0][key] = await Utils.fetchDisplayName(value)
          setCharacter(updatedCharacter)
        }
      })
    }
  }, [character])

  return (
    <div className='flex'>
      <main className='content-wrapper'>
        <Header small />
        <ErrorBoundary>
          <Details character={character} state={detailsLoadingState} />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <RelatedCharacters
          sourceRelation={character}
          loadingState={cardsLoadingState}
        />
      </ErrorBoundary>
    </div>
  )
}
