import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { pStyles } from "../../constants/GlobalStyles";
// import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <SafeAreaView style={[pStyles.hFull]}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="auth/(signin)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="auth/(signup)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signedIn"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaView>
    </>
  );
}
