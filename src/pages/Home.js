import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Header, CardsList, Selection } from '../components/index'
import { Api } from '../modules/index'
import ErrorBoundary from '../ErrorBoundary'
import { initState } from '../features/resource/resourceSlice'

function Home () {
  const { selectedOption } = useSelector(state => state)

  // manages all options
  const [options, setOptions] = useState([])

  // manages all characters from that resource
  const [characters, setCharacters] = useState([])

  // loading state
  const [loadingState, setLoadingState] = useState({
    start: true,
    loaders: 8
  })

  // fetch all options once
  useEffect(() => {
    Api.fetchData(process.env.REACT_APP_API)
      .then(res => Object.entries(res))
      .then(options => {
        initState(options.map(([key]) => key))
        setOptions(() => options.map(option => {
          return {
            value: { name: option[0], url: option[1] }
          }
        }))
      })
      .catch(() => {})
  }, [])

  // whenever our resource changes, fetch characters
  useEffect(() => {
    if (selectedOption) {
      setLoadingState(prevState => {
        const updatedState = {
          start: true,
          loaders: prevState.loaders
        }
        return { ...prevState, ...updatedState }
      })

      Api.fetchData(`${process.env.REACT_APP_API}${selectedOption}`)
        .then(res => setCharacters(res))
        .catch(() => {})
        .finally(() => {
          setLoadingState(prevState => {
            const updatedState = {
              start: false,
              loaders: prevState.loaders
            }
            return { ...prevState, ...updatedState }
          })
        })
    }
  }, [selectedOption])

  return (
    <main className='content-wrapper'>
      <Header />
      <span>What are you looking for?</span>

      {/* stupid comment */}

      <ErrorBoundary>
        <Selection options={options} />
      </ErrorBoundary>
      <ErrorBoundary>
        <CardsList characters={characters.results} loadingState={loadingState} />
      </ErrorBoundary>
    </main>
  )
}

export default Home
