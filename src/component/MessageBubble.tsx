import { Text, View, StyleSheet } from 'react-native';

type MessageBubbleProps = {
  text: string;
  isUser?: boolean;
  id?: string;
};

const MessageBubble = ({ text, isUser = false, id }: MessageBubbleProps) => {
  const isWelcome = id === 'welcome-message';

  return (
    <View
      style={[
        styles.bubble,
        isUser ? styles.userBubble : styles.botBubble,
        isWelcome && styles.welcomeBubble,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          isUser ? styles.userText : styles.botText,
          isWelcome && styles.welcomeText,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginVertical: 4,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#1E90FF',
    alignSelf: 'flex-end',
  },
  botBubble: {
    backgroundColor: '#e5e5ea',
    alignSelf: 'flex-start',
  },
  welcomeBubble: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginVertical: 20,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: 'white',
  },
  botText: {
    color: 'black',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});

export default MessageBubble;
