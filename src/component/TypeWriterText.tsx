import { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
  speed?: number;
  style?: any;
};

const TypewriterText = ({ text, speed = 50, style }: Props) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <Text style={[styles.text, style]}>{displayedText}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 30,
  },
});

export default TypewriterText;
