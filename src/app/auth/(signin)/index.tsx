import { Checkbox, Host } from "@expo/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";
import { pStyles, rStyles } from "../../../../constants/GlobalStyles";

export default function Index() {
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const signin = z.object({
    email: z.email("Please input your Email"),
    password: z
      .string("Please input your Password")
      .min(8, "Please input your Password"),
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
    <>
    <View style={[pStyles.h15, pStyles.m5]}>
      <Pressable style={[
        pStyles.aspect1,
        pStyles.hFull,
        pStyles.bgBlue,
        pStyles.radius50,
        pStyles.justifyCenter,
        pStyles.itemsCenter, 
        pStyles.absoluteTL,
        pStyles.borderBlack
      ]}
      onPress={router.back}>
        <Text style={[ pStyles.size30 ]}>X</Text>
      </Pressable>
    </View>
    <View style={[rStyles.formView, pStyles.gap10, pStyles.justifyCenter]}>
      <View style={[pStyles.wFull, pStyles.itemsCenter]}>
        <View style={[pStyles.w50, pStyles.aspect1]}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={[rStyles.imageSizing, pStyles.radius20]}
          />
        </View>
        <View>
          <Text style={[pStyles.textCenter, pStyles.size20, pStyles.ptb5]}>
            Authentication Sign In Form
          </Text>
        </View>
      </View>
      <View style={[pStyles.w70, pStyles.gap10]}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
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
          render={({ field: { onChange, onBlur, value } }) => (
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

        <Host matchContents>
          <Checkbox
            label="Keep me Signed In"
            value={accepted}
            onValueChange={setAccepted}
          />
        </Host>
        <Pressable
          style={[rStyles.blueButton, pStyles.borderBlack]}
          onPress={handleSubmit((data) => {
            console.log("junimo");
          })}
        >
          <Text style={[pStyles.size20, pStyles.ptb2]}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={[pStyles.gap10]}>
        <Text
          style={[pStyles.textCenter]}
          onPress={() => {
            router.replace("/auth/(signup)");
          }}
        >
          No account? Register here
        </Text>
        <Text
          style={[pStyles.textCenter]}
          onPress={() => {
            Alert.alert(
              "No Forgot Email Functionality", 
              "This functionality wasn't expected and therefore wasn't implemented"
            );
          }}
        >
          Forgot Email?
        </Text>
      </View>
    </View>
    </>
  );
}
