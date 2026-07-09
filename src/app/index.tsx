import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { pStyles, rStyles } from "../../constants/GlobalStyles";

export default function Selector() {
  const router = useRouter();

  return (
    <View style={[pStyles.p5, rStyles.formView, pStyles.justifyCenter]}>
      <View>
        <View style={[pStyles.wFull, pStyles.itemsCenter]}>
          <View style={[pStyles.w50, pStyles.aspect1]}>
            <Image
              source={require("@/assets/images/icon.png")}
              style={[rStyles.imageSizing, pStyles.radius20]}
            />
          </View>
          <View style={[pStyles.ptb5]}>
            <Text style={[pStyles.textCenter, pStyles.size20]}>Welcome to</Text>
            <Text style={[pStyles.textCenter, pStyles.size30, pStyles.ptb2]}>
              Mobile Dev Assignment3 ZodForms
            </Text>
          </View>
        </View>
      </View>
      <View style={[pStyles.gap10, pStyles.wFull]}>
        <Pressable
          style={[rStyles.blueButton, pStyles.borderBlack]}
          onPress={() => {
            router.navigate("/auth/(signin)");
          }}
        >
          <Text style={[pStyles.size30, pStyles.textWhite]}>Auth Sign In</Text>
        </Pressable>
        <Pressable
          style={[rStyles.blueButton, pStyles.borderBlack]}
          onPress={() => {
            router.navigate("/auth/(signup)");
          }}
        >
          <Text style={[pStyles.size30, pStyles.textWhite]}>Auth Sign Up</Text>
        </Pressable>
        <Pressable
          style={[rStyles.blueButton, pStyles.borderBlack]}
          onPress={() => {
            router.navigate("/emp");
          }}
        >
          <Text style={[pStyles.size30, pStyles.textWhite]}>
            Employee Info Form
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
