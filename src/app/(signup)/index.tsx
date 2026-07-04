import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";
import { z } from "zod";

export default function signup() {
  const signup = z
    .object({
      fullName: z.string().min(4, "Please input your Full Name"),
      email: z.email("Please input your Email"),
      phone: z.string().min(10, "Please input a Phone Number"), // e164 format is "+(areaCode)1234567890"
      password: z.string().min(8, "Password must be longer than 8 characters"),
      passwordConfirm: z.string().min(8, "Passwords must match"),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      // message: "Passwords Must Match",
      path: ["passwordConfirm"],
    });

  type signupFormType = z.infer<typeof signup>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupFormType>({
    resolver: zodResolver(signup),
  });

  // console.log(errors);

  return (
    <View style={styles.container}>
      <View>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <TextInput {...register("fullName")} placeholder="Full Name" />
          <p>{errors.fullName?.message}</p>
          <TextInput {...register("email")} placeholder="Email" />
          <p>{errors.email?.message}</p>
          <TextInput {...register("phone")} placeholder="Phone Number" />
          <p>{errors.phone?.message}</p>
          <TextInput {...register("password")} placeholder="Password" />
          <p>{errors.password?.message}</p>
          <TextInput
            {...register("passwordConfirm")}
            placeholder="Confirm Password"
          />
          <p>{errors.passwordConfirm?.message}</p>
          <input type="submit" />
        </form>
      </View>
      <View>
        <Link href="/(signin)"> Wish to sign in? Click here </Link>
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
