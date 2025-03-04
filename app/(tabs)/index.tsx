import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import YouTubeVideoCard from '@/components/YoutubeCard';
import Colors from '@/constants/Colors';

export default function TabOneScreen() {
  // YouTube API Key (Move this to environment variables in production)
  const apiKey = 'AIzaSyBMkwVXYKA_YBzEmq14LYDBRbUO_WjF2Bk';

  const videoData = [
    {
      videoId: 'dQw4w9WgXcQ',
      title: 'Incredible Nature Wonders',
      description: 'Discover the breathtaking beauty of the world’s most extraordinary natural wonders, from massive waterfalls to towering mountains.',
      thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    },
    {
      videoId: 'tQ1s00GnFHI',
      title: 'Exploring Ancient Civilizations',
      description: 'Journey back in time to explore the secrets of ancient civilizations, from Egypt to the Inca Empire, uncovering their fascinating cultures and technologies.',
      thumbnailUrl: 'https://img.youtube.com/vi/tQ1s00GnFHI/0.jpg',
    },
    {
      videoId: 'JtYgq3e4Kl0',
      title: 'Space Exploration 101',
      description: 'A beginner’s guide to space exploration, covering the most important space missions, technologies, and milestones in humanity’s quest to explore the cosmos.',
      thumbnailUrl: 'https://img.youtube.com/vi/JtYgq3e4Kl0/0.jpg',
    },
    {
      videoId: 'aC7dQs5kLhA',
      title: 'Unveiling the Deep Sea Mysteries',
      description: 'Dive deep into the mysterious world beneath the ocean, exploring rare species, underwater ecosystems, and the cutting-edge technology used to study the deep sea.',
      thumbnailUrl: 'https://img.youtube.com/vi/aC7dQs5kLhA/0.jpg',
    },
    {
      videoId: 'b7K7QcBxWcY',
      title: 'The Future of Artificial Intelligence',
      description: 'What does the future hold for artificial intelligence? Explore the incredible advancements in AI, from machine learning to autonomous vehicles and beyond.',
      thumbnailUrl: 'https://img.youtube.com/vi/b7K7QcBxWcY/0.jpg',
    },
    {
      videoId: '5hRjXOSGv0I',
      title: 'The Rise of Electric Vehicles',
      description: 'A comprehensive look at the growing popularity of electric vehicles, the technology behind them, and how they are reshaping the automotive industry.',
      thumbnailUrl: 'https://img.youtube.com/vi/5hRjXOSGv0I/0.jpg',
    },
    {
      videoId: 'fZINtI2fl3Q',
      title: 'Exploring the Mysteries of Quantum Physics',
      description: 'Step into the fascinating world of quantum physics, where particles behave in strange and unpredictable ways, challenging everything we thought we knew about reality.',
      thumbnailUrl: 'https://img.youtube.com/vi/fZINtI2fl3Q/0.jpg',
    },
    {
      videoId: '2QZiUlkF62A',
      title: 'The Wonders of the Solar System',
      description: 'A visual tour through our solar system, showcasing the stunning planets, moons, and other celestial objects that make up our cosmic neighborhood.',
      thumbnailUrl: 'https://img.youtube.com/vi/2QZiUlkF62A/0.jpg',
    },
    {
      videoId: 'C8jSppVXsQs',
      title: 'Revolutionary Advances in Medicine',
      description: 'From groundbreaking genetic therapies to innovative surgical techniques, this video explores the cutting-edge advancements transforming the field of medicine.',
      thumbnailUrl: 'https://img.youtube.com/vi/C8jSppVXsQs/0.jpg',
    },
    {
      videoId: 'LR32dbbMi2s',
      title: 'How the Internet Has Changed the World',
      description: 'A deep dive into the evolution of the internet, exploring its impact on society, communication, business, and daily life throughout the decades.',
      thumbnailUrl: 'https://img.youtube.com/vi/LR32dbbMi2s/0.jpg',
    },
    {
      videoId: '6t7LQXnfeWw',
      title: 'The Fascinating Life of Honeybees',
      description: 'Learn about the crucial role honeybees play in the environment, the science behind their behavior, and why they are essential for pollination and agriculture.',
      thumbnailUrl: 'https://img.youtube.com/vi/6t7LQXnfeWw/0.jpg',
    },
    {
      videoId: '7XYWzWi1J6s',
      title: 'Building the Smart Cities of Tomorrow',
      description: 'Explore how technology and innovation are transforming urban landscapes, creating more efficient, sustainable, and connected cities for the future.',
      thumbnailUrl: 'https://img.youtube.com/vi/7XYWzWi1J6s/0.jpg',
    },
    {
      videoId: '0dPZ3yhp0NA',
      title: 'The Power of Renewable Energy',
      description: 'An insightful look at the rise of renewable energy sources such as solar, wind, and hydroelectric power, and their potential to combat climate change.',
      thumbnailUrl: 'https://img.youtube.com/vi/0dPZ3yhp0NA/0.jpg',
    },
    {
      videoId: 'mD5jmv6LD3s',
      title: 'The Evolution of Human Technology',
      description: 'Trace the incredible journey of human technological progress, from the invention of the wheel to modern computing, and how it’s shaping our future.',
      thumbnailUrl: 'https://img.youtube.com/vi/mD5jmv6LD3s/0.jpg',
    },
    {
      videoId: 'oXgGJrLGTjQ',
      title: 'The Incredible Power of Volcanoes',
      description: 'Uncover the science behind volcanic eruptions, their role in shaping the Earth’s landscape, and the dangers and wonders they bring.',
      thumbnailUrl: 'https://img.youtube.com/vi/oXgGJrLGTjQ/0.jpg',
    },
    {
      videoId: 'p5qJk07odmY',
      title: 'The Future of Space Tourism',
      description: 'An exciting look into the burgeoning industry of space tourism, as companies like SpaceX, Blue Origin, and Virgin Galactic bring human spaceflight closer to the public.',
      thumbnailUrl: 'https://img.youtube.com/vi/p5qJk07odmY/0.jpg',
    },
    {
      videoId: 'qOge01Zsjzk',
      title: 'Understanding the Human Brain',
      description: 'Take a journey through the complexities of the human brain, exploring its functions, mysteries, and how neuroscientists are unlocking its secrets.',
      thumbnailUrl: 'https://img.youtube.com/vi/qOge01Zsjzk/0.jpg',
    },
    {
      videoId: 'rDoSMukTX28',
      title: 'The Science of Climate Change',
      description: 'Learn about the science of climate change, the impact it’s having on our planet, and what steps are being taken to address this global crisis.',
      thumbnailUrl: 'https://img.youtube.com/vi/rDoSMukTX28/0.jpg',
    },
    {
      videoId: 's0ge6i65zAw',
      title: 'The Art of Modern Architecture',
      description: 'Explore the innovative designs and groundbreaking techniques that are shaping the field of modern architecture, from skyscrapers to sustainable homes.',
      thumbnailUrl: 'https://img.youtube.com/vi/s0ge6i65zAw/0.jpg',
    },
    {
      videoId: 'uJHgFjzx3zw',
      title: 'How AI is Transforming Healthcare',
      description: 'Examine the ways in which artificial intelligence is revolutionizing healthcare, from predictive diagnostics to robotic surgeries and drug development.',
      thumbnailUrl: 'https://img.youtube.com/vi/uJHgFjzx3zw/0.jpg',
    },
  ];

  const handlePress = (videoId: string) => {
    console.log(`Playing video with ID: ${videoId}`);
    // Add video playback logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {videoData.map((video) => (
          <YouTubeVideoCard
            key={video.videoId}
            videoId={video.videoId}
            title={video.title}
            description={video.description}
            thumbnailUrl={video.thumbnailUrl}
            onPress={() => handlePress(video.videoId)}
            apiKey={apiKey}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
    gap: 16,
  },
});