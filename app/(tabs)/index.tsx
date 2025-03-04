import YouTubeVideoCard from '@/components/YoutubeCard';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function TabOneScreen() {
  // YouTube API Key
  const apiKey = 'AIzaSyBMkwVXYKA_YBzEmq14LYDBRbUO_WjF2Bk';  // Replace with your actual API key

  const videoData = [
    {
      videoId: 'dQw4w9WgXcQ',
      title: 'Amazing Video 1',
      description: 'This is an amazing video description for video 1.',
      thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    },
    {
      videoId: 'tQ1s00GnFHI',
      title: 'Amazing Video 2',
      description: 'This is an amazing video description for video 2.',
      thumbnailUrl: 'https://img.youtube.com/vi/tQ1s00GnFHI/0.jpg',
    },
    {
      videoId: 'JtYgq3e4Kl0',
      title: 'Amazing Video 3',
      description: 'This is an amazing video description for video 3.',
      thumbnailUrl: 'https://img.youtube.com/vi/JtYgq3e4Kl0/0.jpg',
    },
  ];

  const handlePress = (videoId: string) => {
    console.log(`Playing video with ID: ${videoId}`);
    // Here you could add more functionality to play the video in full screen or navigate to a video page
  };

  return (
    <></>
    // <ScrollView style={styles.container}>
    //   {videoData.map((video, index) => (
    //     // <YouTubeVideoCard
    //     //   key={index}
    //     //   videoId={video.videoId}
    //     //   title={video.title}
    //     //   description={video.description}
    //     //   thumbnailUrl={video.thumbnailUrl}
    //     //   onPress={() => handlePress(video.videoId)}
    //     //   apiKey={apiKey}
    //     // />
    //   ))}
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
});
