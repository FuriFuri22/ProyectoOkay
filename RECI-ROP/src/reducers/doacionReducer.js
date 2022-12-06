import { type } from "../types/types";


export const donacionReducer = (initialState, action) => {
    switch (action.types) {
        case type.SET_ALL_DONACIONS:
            return action.payload;
        case type.CREATE_DONACION:
            return {
                ...initialState,
                ...action.payload
            }
        case type.GET_ALL_DONACIONS:
            return initialState;
        case type.DELETE_DONACION:
            return initialState.map(DONACION => {
                if (DONACION._id === action.payload) {
                    return DONACION;
                }
            });
        case type.EDIT_DONACION:
            return initialState.map(DONACION => {
                if (DONACION._id === action.payload._id) {
                    DONACION = action.payload
                };
                return DONACION;
            })

        default:
            return initialState
    }
};