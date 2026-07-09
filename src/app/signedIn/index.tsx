import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import BackButton from "../../../components/BackButton";
import { pStyles, rStyles } from "../../../constants/GlobalStyles";

export default function signedIn() {
  const params = useLocalSearchParams();
  const router = useRouter();
  return (
    <>
      <BackButton />
      <View
        style={[
          rStyles.formView,
          pStyles.gap20,
          pStyles.justifyCenter,
          pStyles.p5,
        ]}
      >
        <View style={[pStyles.itemsCenter]}>
          <Text style={[pStyles.size30]}>Congratulations!</Text>
          <Text style={[pStyles.size20]}>You just {params.name}!</Text>
        </View>
        <View
          style={[
            pStyles.itemsCenter,
            rStyles.blueButton,
            pStyles.borderWhite,
            pStyles.ptb2,
          ]}
        >
          <Pressable
            onPress={() => {
              router.dismissAll();
            }}
            style={pStyles.itemsCenter}
          >
            <Text style={[pStyles.textWhite, pStyles.size20]}>
              Click the X to go back or
            </Text>
            <Text style={[pStyles.textWhite, , pStyles.size20]}>
              Click here to go to the beginning!
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
