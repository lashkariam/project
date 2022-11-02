import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchResults:[],
    isLoading:false,
    errorMessage:"",
    searchTerm:null
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addSearchResults: (state, action) => {
      state.searchResults = state.searchResults.concat(action.payload);
    },
    setLoading:(state) => {
        state.isLoading = !state.isLoading;
    },
    setErrorMessage:(state,action) => {
        state.errorMessage = action.payload;
    },
    setDefaultResults:(state) => {
        state.searchResults = [];
    },
    addSearchTerm:(state , action) => {
        state.searchTerm = action.payload;
    }
  },
});

export const {
  addSearchResults,
  setErrorMessage,
  setLoading,
  addSearchTerm,
  setDefaultResults,
} = resultSlice.actions;
export const selectSearchResults = (state) => state.result.searchResults;
export const selectSearchTerm = (state) => state.result.searchTerm;

export default resultSlice.reducer;
