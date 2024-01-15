import { StyleSheet, View, Text } from "react-native";


export default function Stats() {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Text>This is the Stats</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#98c1d9',
        alignItems: 'center'
    },
    background: {
        flex: 1,
    }
})