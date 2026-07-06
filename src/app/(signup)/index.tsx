import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { z } from "zod";
import { pStyles, rStyles } from "../../../constants/GlobalStyles";

export default function signup() {

  const router = useRouter();

  const signup = z
    .object({
      fullName: z.string("Please input your Full Name").min(4, "Please input your Full Name"),
      email: z.email("Please input your Email"),
      phone: z.string("Please input your Phone Number").min(10, "Please input your Phone Number"), // e164 format is "+(areaCode)1234567890"
      password: z.string("Please create a password").min(8, "Password must be longer than 8 characters"),
      passwordConfirm: z.string("Please confirm your password").min(8, "Please confirm your password"),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "Passwords must Match",
      path: ["passwordConfirm"],
    });

  type signupFormType = z.infer<typeof signup>;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signupFormType>({
    resolver: zodResolver(signup),
  });

  

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
      <View style={[pStyles.w70, pStyles.gap10]}>
        <Controller 
          control={control}
          name="fullName"
          render={({ field: {onChange, onBlur, value}}) => (
            <TextInput 
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={(!errors.fullName?.message) ? (rStyles.tInput): (rStyles.tInputBad)}
              placeholder="Full Name"
            />
          )}
        />
        {errors.fullName?.message && <Text>{errors.fullName.message}</Text>}
        <Controller 
          control={control}
          name="email"
          render={({ field: {onChange, onBlur, value}}) => (
            <TextInput 
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={(!errors.email?.message) ? (rStyles.tInput): (rStyles.tInputBad)}
              placeholder="Email"
            />
          )}
        />
        {errors.email?.message && <Text>{errors.email.message}</Text>}
        <Controller 
          control={control}
          name="phone"
          render={({ field: {onChange, onBlur, value}}) => (
            <TextInput 
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={(!errors.phone?.message) ? (rStyles.tInput): (rStyles.tInputBad)}
              placeholder="Phone Number"
            />
          )}
        />
        {errors.phone?.message && <Text>{errors.phone.message}</Text>}
        <Controller 
          control={control}
          name="password"
          render={({ field: {onChange, onBlur, value}}) => (
            <TextInput 
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={(!errors.password?.message) ? (rStyles.tInput): (rStyles.tInputBad)}
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
        />
        {errors.password?.message && <Text>{errors.password.message}</Text>}
        <Controller 
          control={control}
          name="passwordConfirm"
          render={({ field: {onChange, onBlur, value}}) => (
            <TextInput 
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={(!errors.passwordConfirm?.message) ? (rStyles.tInput): (rStyles.tInputBad)}
              placeholder="Confirm Password"
              secureTextEntry={true}
              
            />
          )}
        />
        {(errors.passwordConfirm?.message) && <Text>{errors.passwordConfirm.message}</Text>}
        <Button title="Sign Up" onPress={handleSubmit((data) => {console.log("junimo");})}/>
      </View>
      <View style={[pStyles.gap10]}>
        <Text onPress={() => {router.replace("/(signin)")}}> Have an account? Sign in here </Text>
        {/* <Button title="Have an account? Sign in here" onPress={() => {router.replace("/(signin)")}} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
