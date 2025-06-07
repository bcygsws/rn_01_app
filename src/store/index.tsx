import {configureStore} from '@reduxjs/toolkit';
import userReducer from '@/store/modules/userStore';
import authReducer from '@/store/modules/authStore';

/**
 * @Desc；react-redux + @reduxjs/tooolkit实现状态管理
 *
 * */
const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer
    }
});
export default store;
