import {createSlice} from '@reduxjs/toolkit';

const userStore = createSlice({
    name: '_user',
    initialState: {
        num: 1// 初始值
    },
    reducers: {// 该reducers函数中，有两个action
        inc: (state, action) => {
            state.num += action.payload;
        },
        dec: (state, action) => {
            state.num -= action.payload;
        }

    }
});
const {inc, dec} = userStore.actions;
const userReducer = userStore.reducer;
export {
    inc,
    dec
};
export default userReducer;
