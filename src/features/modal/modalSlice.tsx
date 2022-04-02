import {createSlice} from '@reduxjs/toolkit';
interface IModal {
    modalContent:string
}
const initialState:IModal = {
    modalContent:'User'
}
const modalSlice= createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalContent: (state,action) => {
            state.modalContent = action.payload
        }
    }
});
export const {setModalContent} = modalSlice.actions;
export default modalSlice.reducer;