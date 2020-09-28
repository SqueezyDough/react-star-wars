import React from 'react'
import renderer from 'react-test-renderer'
import CardsLoader from '../../../components/states/CardsLoader'
import { loadingState } from '../../../mocks/index'

it('renders correctly', () => {
  const tree = renderer
    .create(<CardsLoader state={loadingState} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
