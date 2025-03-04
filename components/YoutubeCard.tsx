import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';

interface YouTubeVideoCardProps {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  onPress: () => void;
  apiKey: string;
}

const YouTubeVideoCard: React.FC<YouTubeVideoCardProps> = ({
  videoId,
  title,
  description,
  thumbnailUrl,
  onPress,
  apiKey,
}) => {
  return (
    <View style={styles.cardContainer}>
      {/* Displaying Thumbnail Image */}
      <Image
        source={{ uri: thumbnailUrl }}
        style={styles.thumbnail}
      />
      
      {/* YouTube Player Component */}
      <YouTube
        videoId={videoId}
        apiKey={apiKey}
        play={false}
        fullscreen={false}
        loop={false}
      />
      
      {/* Video Title */}
      <Text style={styles.title}>{title}</Text>
      
      {/* Video Description */}
      <Text style={styles.description}>{description}</Text>
      
      {/* Button to simulate "Play" functionality */}
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.playButton}>Watch Video</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  youtubePlayer: {
    height: 200,
    width: '100%',
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
  },
  description: {
    color: '#555',
    marginVertical: 5,
  },
  playButton: {
    color: 'blue',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default YouTubeVideoCard;
