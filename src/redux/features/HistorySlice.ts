import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    valid: false,
    local_format: "",
    intl_format: "",
    location: "",
    country: "",
    carrier: "",
    line_ype: "",
    userId: "",
};

export const historySlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeTheUserState: (
            state,
            action: PayloadAction<{
                id: string;
                valid: boolean;
                local_format: string;
                intl_format: string;
                location: string;
                country: string;
                carrier: string;
                line_ype: string;
                userId: string;
            }>
        ) => {
            state.id = action.payload.id;
            state.valid = action.payload.valid;
            state.local_format = action.payload.local_format;
            state.intl_format = action.payload.intl_format;
            state.location = action.payload.location;
            state.country = action.payload.country;
            state.carrier = action.payload.carrier;
            state.line_ype = action.payload.line_ype;
            state.userId = action.payload.userId;
        },
    },
});

export const { changeTheUserState } = historySlice.actions;
export default historySlice.reducer;
