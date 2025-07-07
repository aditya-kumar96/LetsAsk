import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    StyleSheet,
    TextInputProps,
} from 'react-native';


type Props = {
    message?: string;
    onSubmit: (message: string) => void;

} & TextInputProps;

const MessageInput = ({ message = '', onSubmit, ...rest }: Props) => {
    const [msg, setMsg] = useState(message);

    const handleSubmit = () => {
        const trimmed = msg.trim();
        if (!trimmed) return;

        onSubmit(trimmed);
        setMsg('');
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={msg}
                onChangeText={setMsg}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
                style={styles.input}
                placeholderTextColor="#888"
                {...rest}
            />
            <TouchableOpacity
                onPress={handleSubmit}
                style={styles.sendBtn}
                disabled={!msg.trim()}
            >
                <Icon name="send" size={24} color='white' />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: 'black',
        borderTopWidth: 1,
        borderTopColor: '#e2e2e2',
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        fontSize: 16,
        color: 'black',
    },
    sendBtn: {
        marginLeft: 10,
        padding: 6,
        flex:0.09
    },
});

export default MessageInput;
