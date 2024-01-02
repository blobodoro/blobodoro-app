import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import ImageViewer from '../components/ImageViewer';
import { Link } from 'expo-router';

const PlaceholderImage = require('../assets/logos/blobfish.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Link href={"/fishtank"}>
          <Pressable>
            <ImageViewer placeholderImageSource={PlaceholderImage} />
          </Pressable>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001a33',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
