import React from 'react'
import renderer from 'react-test-renderer'
import GhostCard from '../../../components/states/GhostCard'

it('renders correctly', () => {
  const tree = renderer
    .create(<GhostCard />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
