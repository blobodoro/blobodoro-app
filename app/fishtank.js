import { StyleSheet, View, Text } from "react-native";
import ImageViewer from "../components/ImageViewer";

const BackgroundImage = require('../assets/FishTankBackgroundTemp.jpg')

export default function FishTank() {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Text>FishTank</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001a33',
        alignItems: 'center'
    },
    background: {
        flex: 1,
    }
})