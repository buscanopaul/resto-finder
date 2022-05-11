import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {useState} from 'react';

const baseUrl = 'https://api.yelp.com/v3/businesses/search?term=';

const mapsUrl =
  'https://maps.googleapis.com/maps/api/geocode/json?latlng=14.743405%2c121.0188647&fields=city&key=AIzaSyAbHzx-vkDn5eyay_G8NMI955tX8CYovUM';

export const getRestaurantsAsync = createAsyncThunk(
  'getRestaurantsAsync',
  async (payload, thunkAPI) => {
    try {
      var config = {
        method: 'get',
        url:
          baseUrl +
          payload.searchTerm +
          `&latitude=${payload.latitude}&longitude=${payload.longitude}`,
        headers: {
          Authorization: `Bearer o96u3DZy4rLZsTfV-q1Boj0Avlr7ujfJ6t5tRYoz7BeB5oaWww9DBYmbxnG6qUDvi_y_fXdDqGkB5xdcsjPkXBAE-u_jnofmgaRedQg79DPBiY0EHTEYn2fgFdt0YnYx`,
        },
      };

      const response = await axios(config);
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({error: error.message});
    }
  },
);

interface homeState {
  title: String;
}

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    id: null,
    title: 'title',
    todos: [{title: 'test'}],
    businesses: [],
    loadingHome: false,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: (newTodo = {
          id: Date.now(),
          title: action.payload.title,
        }),
      };
      state.todos.push(newTodo);
    },
  },
  extraReducers: builder => {
    builder.addCase(getRestaurantsAsync.rejected, (state, action) => {
      console.log('error getRestaurantsAsync', action.error.message);
      state.loadingHome = false;
    });
    builder.addCase(getRestaurantsAsync.fulfilled, (state, action) => {
      state.businesses = action.payload.businesses;
      console.log('Success getRestaurantsAsync');
      state.loadingHome = false;
    });
    builder.addCase(getRestaurantsAsync.pending, (state, action) => {
      console.log('loading getRestaurantsAsync');
      state.loadingHome = true;
    });
  },
});

export const {addTodo} = homeSlice.actions;

// SELECTORS
export const businessesSelector = state => state.home.businesses;
export const loadingHomeSelector = state => state.home.loadingHome;

export default homeSlice.reducer;
