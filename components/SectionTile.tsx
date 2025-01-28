import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface SectionDividerProps {
  title: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ title }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        paddingVertical: 22,
        height: 50,
      }}
    >
      <LinearGradient
        colors={['transparent', '#FFFFFF', 'transparent']}
        start={[0, 0]}
        end={[1, 0]}
        style={{
          width: '100%',
          height: 2,
        }}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          top: '50%',
          transform: [{ translateY: -5 }],
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default SectionDivider;
