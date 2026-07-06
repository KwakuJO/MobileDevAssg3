import { Stack } from "expo-router";
// import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="(signin)"
          options={{
            // title: "Sign In",
            // headerTitle: "Sign In",
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="(signup)"
          options={{
            // title: "Sign Up",
            // headerTitle: "Sign Up",
            headerShown: false,
          }}
        />
      </Stack>

    </>
  );
}
