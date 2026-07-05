import { Stack } from "expo-router";
// import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <title>June</title>

      {/* <Tabs>
        <Tabs.Screen
          name="(signin)"
          options={{
            title: "Sign In",
            headerTitle: "Sign In",
          }}
        />
        <Tabs.Screen
          name="(signup)"
          options={{
            title: "Sign Up",
            headerTitle: "Sign Up",
          }}
        />
      </Tabs> */}
    <Stack>
      <Stack.Screen 
        name="(signin)"
        options={{
          title: "Sign In",
          headerTitle: "Sign In",
        }}
      />
      <Stack.Screen 
        name="(signup)"
        options={{
          title: "Sign Up",
          headerTitle: "Sign Up",
        }}
      />
    </Stack>

    </>
  );
}
