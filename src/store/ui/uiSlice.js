import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true;
        },

        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false;
        }
    },
    
});
//console.log("hola", uiSlice )


//export const selectUi = state => state.ui.isDateModalOpen;
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;