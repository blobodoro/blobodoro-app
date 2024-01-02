import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="stats" />
            <Tabs.Screen name="fishtank" />
            <Tabs.Screen name="store" />
        </Tabs>
    )
}

export default TabsLayout;