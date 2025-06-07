import {createSlice} from '@reduxjs/toolkit';

/**
 * @Desc:路由鉴权
 * @Author: Bao Chengyi
 * 登录了，才允许进入；未登录，不允许进入，跳转到登录页面
 *
 * */
const authStore = createSlice({
    name: '_auth',
    initialState: {
        isLogin: false,// 模拟token
        info: {}// 从后端获取的用户信息
    },
    reducers: {
        LOGIN_SUCCESS: (state, action) => {
            state.isLogin = true;
            state.info = action.payload;

        },
        LOGIN_FAILED: (state) => {
            state.isLogin = false;
        }
    }
});
const {LOGIN_SUCCESS, LOGIN_FAILED} = authStore.actions;
const authReducer = authStore.reducer;
export {LOGIN_SUCCESS, LOGIN_FAILED};
export default authReducer;
