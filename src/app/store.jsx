import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../utils/auth'

export default configureStore({
    reducer: authReducer,
});
