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

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default userDetail.reducer;
