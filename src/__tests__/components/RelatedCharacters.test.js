import React from 'react'
import renderer from 'react-test-renderer'
import RelatedCharacters from '../../components/RelatedCharacters'
import { characterWithName } from '../../mocks/index'
import { Provider } from 'react-redux'
import { store, persistor } from '../../app/store'
import { PersistGate } from 'redux-persist/integration/react'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RelatedCharacters sourceRelation={characterWithName} />
        </PersistGate>
      </Provider>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
