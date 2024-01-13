import { StyleSheet, View, Text } from "react-native";


export default function Store() {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Text>Store</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6bd60',
        alignItems: 'center'
    },
    background: {
        flex: 1,
    }
})