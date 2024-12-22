import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DOMAIN ,pause } from '.';

/**
 * 삭제한 사용자를 반환해서, 사용자 배열에서도 삭제할수 있게 처리해야 함.
 */
const removeUser = createAsyncThunk("users/remove", async (user) =>{

    const response = await axios.delete(`${DOMAIN}/users/${user.id}`);
    await pause(1000);
    return user;
    // return response.data;
});


export {
    removeUser,
}