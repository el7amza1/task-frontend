import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  loggedIn: false,
  id: "",
  userName:''
}


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeTheUserState: (state, action: PayloadAction<{
      loggedIn: boolean,
      id: string,
      userName: string
    }>) => {
      state.loggedIn = action.payload.loggedIn
      state.id = action.payload.id
      state.userName = action.payload.userName
    }
  }
})

export const { changeTheUserState } = userSlice.actions
export default userSlice.reducer