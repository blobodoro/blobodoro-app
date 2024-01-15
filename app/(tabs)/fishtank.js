import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, ImageBackground, Animated, Easing, Dimensions } from 'react-native';

const FishTank = () => {
  const fish1Position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const fish2Position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    const animateFish = (position) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(position, {
            toValue: { x: Math.random() * 200, y: Math.random() * 200 },
            duration: 5000, // Adjust the duration for a slower animation
            easing: Easing.linear,
            useNativeDriver: false,
          }),
          Animated.timing(position, {
            toValue: { x: 0, y: 0 },
            duration: 5000, // Adjust the duration for a longer pause before it repeats
            easing: Easing.linear,
            useNativeDriver: false,
          }),
        ]),
      ).start();
    };

    animateFish(fish1Position);
    animateFish(fish2Position);

    return () => {
      fish1Position.stopAnimation();
      fish2Position.stopAnimation();
    };
  }, [fish1Position, fish2Position]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/aquarium_background_gif.gif')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Add other content/components related to the aquarium here */}
        <Animated.Image
          source={require('./images/fish1.gif')}
          style={[
            styles.fish,
            { transform: [{ translateX: fish1Position.x }, { translateY: fish1Position.y }] },
          ]}
          resizeMode="contain" // Adjust resizeMode to 'contain'
        />
        <Animated.Image
          source={require('./images/fish2.gif')}
          style={[
            styles.fish,
            { transform: [{ translateX: fish2Position.x }, { translateY: fish2Position.y }] },
          ]}
          resizeMode="contain" // Adjust resizeMode to 'contain'
        />
        {/* Add more Animated.Image components for additional fish */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fish: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
});

export default FishTank;
