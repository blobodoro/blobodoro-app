import { StyleSheet, View, Text } from "react-native";


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
        backgroundColor: '#ccc5b9',
        alignItems: 'center'
    },
    background: {
        flex: 1,
    }
})