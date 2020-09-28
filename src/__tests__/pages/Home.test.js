import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../../pages/Home'
import { Provider } from 'react-redux'
import { store, persistor } from '../../app/store'
import { PersistGate } from 'redux-persist/integration/react'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
