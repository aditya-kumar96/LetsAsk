// import { configureStore } from '@reduxjs/toolkit';
// import chatReducer from '../features/chat/chatSlice';

// export const store = configureStore({
//   reducer: {
//     chat: chatReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;



import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../features/chat/chatSlice.slice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch