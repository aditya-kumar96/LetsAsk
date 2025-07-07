import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';

const TypingBubble = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{
      backgroundColor: '#e2e2e2',
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 16,
      alignSelf: 'flex-start',
      margin: 8,
      maxWidth: '80%',
    }}>
      <Text style={{ fontSize: 16, color: 'black' }}>LetsAsk is typing{dots}</Text>
    </View>
  );
};

export default TypingBubble;
