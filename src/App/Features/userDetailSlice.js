import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosApi = "https://65a4bd2452f07a8b4a3da06a.mockapi.io/crud";

// Async Thunk for creating a user using Axios
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(axiosApi,data);

    return response.data;
  } catch (error) {
    console.log(error);
    // Use rejectWithValue to provide a value for the rejected action
    return rejectWithValue("Failed to create user");
  }
});

export const showUser = createAsyncThunk("showUser", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(axiosApi);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Failed to fetch users");
  }
});


export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (cases) => {
    cases
    .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
    .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Use the payload from rejectWithValue
      })
        // For showUser async thunk
        .addCase(showUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(showUser.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload; // Assuming the response is an array of users
        })
        .addCase(showUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload; // Use the payload from rejectWithValue
        });
  },
});

export default userDetail.reducer;
