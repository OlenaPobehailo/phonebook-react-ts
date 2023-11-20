import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './authOperations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState,

  extraReducers: builder => {
    builder

      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return (state = initialState);
      })

      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          registerThunk.rejected,
          loginThunk.rejected
        ),
        (state) => {
          return state;
        }
      );
  },
});

export default authSlice.reducer;
