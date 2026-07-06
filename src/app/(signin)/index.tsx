import { Checkbox, Host } from "@expo/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, Image, Text, TextInput, View } from "react-native";
import { z } from "zod";
import { pStyles, rStyles } from "../../../constants/GlobalStyles";

export default function Index() {
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const signin = z.object({
    email: z.email("Please input your Email"),
    password: z.string("Please input your Password").min(8, "Password must be longer than 8 characters"),
  });

  type signinFormType = z.infer<typeof signin>;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signinFormType>({
    resolver: zodResolver(signin),
  });

  console.log(errors);

  return (
    <View style={[rStyles.formView, pStyles.gap10, pStyles.justifyCenter]}>
      <View style={[pStyles.wFull, pStyles.itemsCenter]}>
        {/* <Image source={require('@/assets/images/android-icon-foreground.png')}/> */}
        <View style={[pStyles.w50, pStyles.aspect1]}>
          <Image source={require('@/assets/images/icon.png')} style={[rStyles.imageSizing, pStyles.radius20]}/>
        </View>
        <View>
          <Text style={[pStyles.textCenter, pStyles.size20, pStyles.ptb5]}>Employee Information Form</Text>
        </View>
      </View>
      <View style={[pStyles.w70, pStyles.gap10, pStyles.ptb5]}>
        <Controller 
          control={control}
          name="email"
          render={({ field: {onChange, onBlur, value}}) => (
            <TextInput 
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={[rStyles.tInput]}
              placeholder="Email"
            />
          )}
        />
        {errors.email?.message && <Text>{errors.email.message}</Text>}
        <Controller 
          control={control}
          name="password"
          render={({ field: {onChange, onBlur, value}}) => (
            <TextInput 
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={[rStyles.tInput]}
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
        />
        {errors.password?.message && <Text>{errors.password.message}</Text>}
                
        {/* Keep me signed in */}
        <Host matchContents>
          <Checkbox label="Keep me Signed In" value={accepted} onValueChange={setAccepted}/>
        </Host>
        <Button title="Sign In" onPress={handleSubmit((data) => {console.log("junimo");})}/>
      </View>
      <View style={[pStyles.gap10]}>
        <Text style={[pStyles.textCenter]} onPress={() => {router.replace("/(signup)")}}> No account? Register here </Text>
        {/* <Button title="Click here to sign up" onPress={() => {router.replace("/(signup)")}} /> */}
        <Text style={[pStyles.textCenter]} onPress={() => {Alert.alert("Dumb Dumb")}}> Forgot Email? </Text>
        {/* <Button title="Click here to sign up" onPress={() => {router.replace("/(signup)")}} /> */}
      </View>
    </View>
  );
}



