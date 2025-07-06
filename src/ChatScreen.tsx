import { useState } from "react";
import { FlatList, KeyboardAvoidingView, Platform, SafeAreaView, View } from "react-native";
import MessageBubble from "./component/MessageBubble";
import MessageInput from "./component/MessageInput";

type Message = {
    id: string,
    text: string,
    isUser: boolean
}

const ChatScreen = () => {

    const [messages, setMessages] = useState<Message[]>([]);

    const handleSend = (text: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            isUser: true
        }

        setMessages((prev) => [...prev, newMessage]);

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now().toString() + '-bot',
                    text: `Echo: ${text}`,
                    isUser: false,
                },
            ]);
        }, 1000);


    }


    return <SafeAreaView className="flex-1 bg-black">
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
            className="flex-1"
        >
            <View className="flex-1 justify-end">
            <FlatList
                keyExtractor={(item) => item.id}
                data={messages}
                renderItem={({ item }) => (
                    <MessageBubble text={item.text} isUser={item.isUser} />
                )}
                contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 10 }}
                inverted // newer messages at bottom
            />

            <MessageInput 
                onSubmit={handleSend}
                placeholder="Ask Me Anything !"
                 className="bg-white-100 px-4 py-3 mx-2 mb-4"
            />
</View>
        </KeyboardAvoidingView>
    </SafeAreaView>

}

export default ChatScreen;