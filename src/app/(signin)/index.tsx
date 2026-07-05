import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import { z } from "zod";
import { pStyles, rStyles } from "../../../constants/GlobalStyles";


export default function Index() {

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
    <View style={[rStyles.formView]}>
      <View style={[pStyles.w70]}>
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
            />
          )}
        />
        {errors.password?.message && <Text>{errors.password.message}</Text>}
        <Button title="Sign In" onPress={handleSubmit((data) => {console.log("junimo");})}/>
      </View>
      <View>
        <Text onPress={() => {router.replace("/(signup)")}}> Click here to sign up </Text>
        {/* <Button title="Click here to sign up" onPress={() => {router.replace("/(signup)")}} /> */}
      </View>
    </View>
  );
}



