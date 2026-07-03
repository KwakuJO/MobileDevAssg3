import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <title>June</title>
      
      <Tabs>
        <Tabs.Screen
          name="(signin)" 
          options={{
            title: "Sign In",
            headerTitle: "Sign In"
          }}
        />
        <Tabs.Screen
          name="(signup)" 
          options={{
            title: "Sign Up",
            headerTitle: "Sign Up"
          }}
        />
      </Tabs>
    </>
  );
}
