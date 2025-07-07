import { useEffect } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import MessageBubble from "./component/MessageBubble";
import MessageInput from "./component/MessageInput";
import TypingBubble from "./component/TypingBubble";
import TypewriterText from "./component/TypeWriterText";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { addUserMessage, sendMessage } from "../src/features/chat/chatSlice.slice";

const ChatScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Redux state
  const messages = useSelector((state: RootState) => state.chat.messages);
  const isTyping = useSelector((state: RootState) => state.chat.isTyping);

  const handleSend = (text: string) => {
    dispatch(addUserMessage(text)); // Adds user message
    dispatch(sendMessage(text));    // Fetches OpenAI response
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      >
        <View style={styles.innerContainer}>
          {messages.length === 1 && !messages[0].isUser ? (
            <View style={styles.centeredContainer}>
              <TypewriterText text={"Welcome to LetsAsk!\nAsk me anything."} />
            </View>
          ) : (
            <FlatList
              data={[...messages].reverse()} // oldest at top
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <MessageBubble
                  id={item.id}
                  text={item.text}
                  isUser={item.isUser}
                />
              )}
              ListFooterComponent={isTyping ? <TypingBubble /> : null}
              contentContainerStyle={styles.messageList}
              keyboardShouldPersistTaps="handled"
              inverted
            />
          )}

          <View style={styles.inputContainer}>
            {!isTyping && (
              <MessageInput
                onSubmit={handleSend}
                placeholder="Ask Me Anything!"
              />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  keyboardView: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  messageList: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  inputContainer: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    backgroundColor: "black",
  },
});

export default ChatScreen;
