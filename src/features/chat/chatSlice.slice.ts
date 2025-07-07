import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchOpenAIResponse } from './chatAPI';


type Message = {
    id: string;
    text: string;
    isUser: boolean;
  };
  
  interface ChatState {
    messages: Message[];
    isTyping: boolean;
  }
  const initialState: ChatState = {
    messages: [],
    isTyping: false,
  };

  export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async (text: string) => {
      const reply = await fetchOpenAIResponse(text);
      return reply;
    // return 'Hi.....'
    }
  );

  const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
      addUserMessage: (state, action: PayloadAction<string>) => {
        state.messages.push({
          id: Date.now().toString(),
          text: action.payload,
          isUser: true,
        });
        state.isTyping = true;
      },
    },
    extraReducers: (builder) => {
      builder
      .addCase(sendMessage.pending,(state)=>{
        // state.messages.push()
        state.isTyping = true;

      })
        .addCase(sendMessage.fulfilled, (state, action) => {
          state.messages.push({
            id: Date.now().toString() + '-bot',
            text: action.payload,
            isUser: false,
          });
          state.isTyping = false;
        })
        .addCase(sendMessage.rejected, (state) => {
          state.isTyping = false;
        });
    },
  });
  
  export const { addUserMessage } = chatSlice.actions;
  
  export default chatSlice.reducer;