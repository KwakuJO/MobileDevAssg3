import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { pStyles } from "../constants/GlobalStyles";

export default function BackButton() {
  const router = useRouter();

  return (
    <View style={[pStyles.h15, pStyles.m5]}>
      <Pressable
        style={[
          pStyles.aspect1,
          pStyles.hFull,
          pStyles.bgBlue,
          pStyles.radius50,
          pStyles.justifyCenter,
          pStyles.itemsCenter,
          pStyles.absoluteTL,
          pStyles.borderWhite,
        ]}
        onPress={router.back}
      >
        <Text style={[pStyles.textWhite, pStyles.size30]}>X</Text>
      </Pressable>
    </View>
  );
}
