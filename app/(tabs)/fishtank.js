export default function FishTank() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./images/aquarium_background.jpg')} // Replace with your background image
          style={styles.background}
        >
          <View>
            <Text>Your Fish Tank</Text>
            {/* Add other content/components related to the aquarium here */}
          </View>
        </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc5b9',
      alignItems: 'center',
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  });
  