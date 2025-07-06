import { Text, View } from "react-native";


type MessageBubbleProps = {
    text: string,
    isUser?: boolean
}


const MessageBubble = ({ text, isUser = false }: MessageBubbleProps) => {
    const bubbleStyle = isUser
    ? 'bg-blue-600 ml-auto'
    : 'bg-gray-300 mr-auto';

    const textStyle = isUser
    ? 'text-white'
    : 'text-black';


    return <View className={`rounded-lg px-4 py-2 m-2 max-w-[80%] ${bubbleStyle}`}>
            <Text className={`text-base ${textStyle}`}>{text}</Text>
    </View>
}

export default MessageBubble