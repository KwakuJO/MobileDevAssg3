import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";
import { z } from "zod";

export default function Index() {
  const signin = z.object({
    email: z.email("Please input your Email"),
    password: z.string().min(8, "Password must be longer than 8 characters"),
  });

  type signinFormType = z.infer<typeof signin>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinFormType>({
    resolver: zodResolver(signin),
  });

  return (
    <View style={styles.container}>
      <View>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <TextInput {...register("email")} placeholder="Email" />
          <p>{errors.email?.message}</p>
          <TextInput {...register("password")} placeholder="Password" />
          <p>{errors.password?.message}</p>
          <TextInput type="submit" />
        </form>
      </View>
      <View>
        <Link href="/(signup)"> Wish to sign in? Click here </Link>
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

const preStyles = StyleSheet.create({
  borderRed: {
    borderColor: "red",
  },
  borderBlue: {
    borderColor: "blue",
  },
});
