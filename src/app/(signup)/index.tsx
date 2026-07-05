import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { z } from "zod";
import { pStyles, rStyles } from "../../../constants/GlobalStyles";

export default function signup() {

  const router = useRouter();

  const signup = z
    .object({
      fullName: z.string("Please input your Full Name").min(4),
      email: z.email("Please input your Email"),
      phone: z.string("Please input your Phone Number").min(10), // e164 format is "+(areaCode)1234567890"
      password: z.string("Please create a password").min(8, "Password must be longer than 8 characters"),
      passwordConfirm: z.string("Please confirm your password").min(8, "Passwords must match"),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      // message: "Passwords Must Match",
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

  // console.log(errors);

  return (
    <View style={[rStyles.formView]}>
      <View style={[pStyles.w70]}>
        <Controller 
          control={control}
          name="fullName"
          render={({ field: {onChange, onBlur, value}}) => (
            <TextInput 
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={[rStyles.tInput]}
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
              style={[rStyles.tInput]}
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
              style={[rStyles.tInput]}
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
              style={[rStyles.tInput]}
              placeholder="Password"
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
              style={[rStyles.tInput]}
              placeholder="Confirm Password"
            />
          )}
        />
        {errors.fullName?.message && <Text>{errors.fullName.message}</Text>}
        <Button title="Sign Up" onPress={handleSubmit((data) => {console.log("junimo");})}/>
      </View>
      <View>
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
