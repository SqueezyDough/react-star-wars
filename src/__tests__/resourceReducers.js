import reducer from '../features/resource/resourceSlice'
import { initState, nextValue } from '../features/resource/resourceSlice'

test('Reducer must set initial state correctly', () => {
  const state = reducer(undefined, initState(['foo', 'bar']))

  expect(state.selectedOption).toEqual('foo')
  expect(state.allOptions).toEqual(['foo', 'bar'])
})

test('Reducer must set next selectedOption correctly', () => {
  const initialState = {
    selectedOption: 'foo',
    allOptions: ['foo', 'bar', 'baz']
  }
  const state = reducer(initialState, nextValue())

  expect(state.selectedOption).toEqual('bar')

  const nextState = reducer(state, nextValue())
  expect(nextState.selectedOption).toEqual('baz')

  const nextState2 = reducer(nextState, nextValue())
  expect(nextState2.selectedOption).toEqual('foo')
})
