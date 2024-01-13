import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen 
            name="stats" 
            options={{ title: 'Stats' }} // Customize the title for the "stats" tab
            />
            <Tabs.Screen name="fishtank" 
            options={{ title: 'Fishtank' }} // Customize the title for the "fishtank" tab
            />
            <Tabs.Screen name="store" 
            options={{ title: 'Shop' }} // Customize the title for the "store" tab
            />
        </Tabs>
    )
}

export default TabsLayout;