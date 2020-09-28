import React from 'react'
import renderer from 'react-test-renderer'
import Card from '../../components/Card'
import { characterWithTitle, characterWithName } from '../../mocks/index'

it('renders correctly with title', () => {
  const tree = renderer
    .create(<Card character={characterWithTitle} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('renders correctly with name', () => {
  const tree = renderer
    .create(<Card character={characterWithName} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
