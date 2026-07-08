import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { pStyles, rStyles } from "../../constants/GlobalStyles";

export default function Selector() {
    const router = useRouter();
    
    return(

        <View style={[pStyles.gap10]}>
            <Pressable
            style={[rStyles.blueButton, pStyles.borderBlack]}
            onPress={() => {console.log("okay"); router.navigate("/auth/(signin)")}}>
                <Text style={[pStyles.size30]}>Auth Sign In</Text>
            </Pressable>
            <Pressable
            style={[rStyles.blueButton, pStyles.borderBlack]}
            onPress={() => {console.log("okay"); router.navigate("/auth/(signup)")}}>
                <Text style={[pStyles.size30]}>Auth Sign Up</Text>
            </Pressable>
            <Pressable
            style={[rStyles.blueButton, pStyles.borderBlack]}
            onPress={() => {console.log("okay"); router.navigate("/auth/(signin)")}}>
                <Text style={[pStyles.size30]}>Auth Sign In</Text>
            </Pressable>
        </View>
    );
}