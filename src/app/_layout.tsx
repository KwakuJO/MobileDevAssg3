import { Stack } from "expo-router";
// import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <>
      {/* <SafeAreaView> */}
      <Stack>
        <Stack.Screen
          name="(signin)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(signup)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      {/* </SafeAreaView> */}
    </>
  );
}
