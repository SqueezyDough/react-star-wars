import React from 'react'
import renderer from 'react-test-renderer'
import CardsList from '../../components/CardsList'
import { characterWithTitle, loadingState } from '../../mocks/index'

it('renders correctly', () => {
  const tree = renderer
    .create(<CardsList character={characterWithTitle} loadingState={loadingState} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
