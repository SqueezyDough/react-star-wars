import { Api } from './index'

export const noop = () => {}

export function getFirstCharacter (string) {
  if (!string) return
  return string.slice(0, 1)
}

export function getInitials (name) {
  if (!name) {
    return null
  }

  const substrings = name.split(' ')
  return substrings.map(string => getFirstCharacter(string))
    .join('')
    .toUpperCase()
}

export const findRelations = (resource, criteria) => {
  const url = `${process.env.REACT_APP_API}${resource}`
  return Api.fetchData(url)
    .then(characters => {
      const relations = characters.results.filter(character => {
        const name = character.name.toLowerCase() || character.title.toLowerCase()
        return name.includes(criteria.shouldInclude) && name !== criteria.shouldExclude
      })

      return relations.length > 0 ? relations : null
    })
    .catch(noop)
}

export const filterListedProperties = (raw, allowed) => {
  return Object.keys(raw)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = raw[key]
      return obj
    }, {})
}

export const fetchDisplayName = (url) => {
  return Api.fetchData(url)
    .then(character => {
      return character.name || character.title
    })
    .catch(noop)
}

export const cleanDisplayLabel = label => {
  return label.charAt(0).toUpperCase() + label.replace('_', ' ').slice(1)
}

export const cleanCharacterDetails = (character, listedProps) => {
  if (character) {
    const charListedProps = filterListedProperties(character, listedProps)

    return {
      name: character.name || character.title,
      props: [charListedProps]
    }
  }
}

export function getBaseURL () {
  return window.location.origin
}

export function getCharacterURL (rawURL) {
  rawURL = rawURL.includes('https') ? rawURL : rawURL.replace('http', 'https')

  const API_URL = process.env.REACT_APP_API
  const endpoint = rawURL.replace(API_URL, '')
  const baseURL = getBaseURL()

  return new URL(endpoint, baseURL)
}

export function getRandomValueFromArray (array) {
  return array[Math.floor(Math.random() * array.length)]
}

export function getRandomValue (min, max, floor) {
  if (floor) {
    return Math.floor(Math.random() * (max - min) + min)
  } else {
    return Math.random() * (max - min) + min
  }
}
