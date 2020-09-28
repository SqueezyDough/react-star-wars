import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'resource',
  initialState: {
    selectedOption: '',
    allOptions: []
  },
  reducers: {
    initState: (_, { payload }) => {
      return { selectedOption: payload[0], allOptions: payload }
    },
    nextValue: (state) => {
      const { selectedOption, allOptions } = state
      const currentIndex = allOptions.findIndex(opt => opt === selectedOption)
      const newSelectedOption = currentIndex === allOptions.length - 1 ? allOptions[0] : allOptions[(currentIndex + 1)]
      return { ...state, selectedOption: newSelectedOption }
    },
    changeValue: (state, { payload }) => {
      return { ...state, selectedOption: payload }
    }
  }
})

export const { initState, nextValue, changeValue } = actions
export default reducer
