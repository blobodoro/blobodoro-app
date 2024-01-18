import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Slot, useRouter, useSegments } from 'expo-router';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Cache the Clerk JWT
const tokenCache = {
	async getToken(key) {
		try {
			return SecureStore.getItemAsync(key);
		} catch (err) {
			return null;
		}
	},
	async saveToken(key, value) {
		try {
			return SecureStore.setItemAsync(key, value);
		} catch (err) {
			return;
		}
	}
};

const InitialLayout = () => {
	const { isLoaded, isSignedIn } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	useEffect(() => {
		console.log('isSignedIn ', isSignedIn);
		
		if (!isLoaded) return;
	
		const inTabsGroup = segments[0] === '(auth)';
	
	
		if (isSignedIn && !inTabsGroup) {
		  router.replace('/fishtank');
		} else if (!isSignedIn) {
		  router.replace('/login');
		}
	  }, [isSignedIn]);


	return <Slot/>;
}

const RootLayoutNav = () => {
	return (
		<ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
			<InitialLayout />
		</ClerkProvider>
	);
};

export default RootLayoutNav;