import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="fishtank" />
            <Stack.Screen name="stats" />
            <Stack.Screen name="store" />
        </Stack>
    )
}

export default RootLayout;