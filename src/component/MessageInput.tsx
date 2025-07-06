import clsx from 'clsx';
import { useState } from 'react';
import { Keyboard, TextInput, TextInputProps, View } from 'react-native';

type MessageInputProps = {
  message?: string;
  onSubmit: (message: string) => void;
} & TextInputProps;

const   MessageInput = ({ message='', onSubmit, className, ...rest }: MessageInputProps) => {
  const [msg, setMsg] = useState(message || '');

  const classes = clsx(
    'bg-white text-black px-4 py-3 rounded-full border border-gray-300 text-base',
    className
  );


  const handleSubmit = () => {
    const trimmed = msg.trim();
    if (!trimmed) return;

    onSubmit(trimmed);
    setMsg('');
    Keyboard.dismiss();
  };

  return (
    <View className="p-2">
      <TextInput
        value={msg}
        onChangeText={setMsg}
        onSubmitEditing={handleSubmit}
        returnKeyType="send"
        placeholder="Type your message..."
        className={classes}
        {...rest}
      />
    </View>
  );
};

export default MessageInput;
