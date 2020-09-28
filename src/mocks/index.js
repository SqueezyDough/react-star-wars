export const characterWithTitle = {
  title: 'title',
  url: 'http://swapi.dev/api/people/1/',
  props: {
    mass: 77,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19bby',
    gender: 'male',
    homeworld: 'http://swapi.dev/api/planets/1/'
  }
}

export const characterWithName = {
  name: 'name',
  url: 'http://swapi.dev/api/people/1/',
  props: [{
    mass: 77,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19bby',
    gender: 'male',
    homeworld: 'http://swapi.dev/api/planets/1/'
  }]
}

export const option = {
  value: {
    name: 'name',
    url: 'url'
  }
}

export const options = [option]

export const resource = {
  name: 'people'
}

export const loadingState = {
  start: true,
  loaders: 8
}
