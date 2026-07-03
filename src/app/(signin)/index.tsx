import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { z } from "zod";

export default function Index() {

  const signin = z.object({
    email: z.email("Please input your Email"),
    password: z.string().min(8, "Password must be longer than 8 characters"),
  });

  type signinFormType = z.infer<typeof signin>;

  const { register, handleSubmit, formState: {errors} } = useForm<signinFormType>({
    resolver: zodResolver(signin),
  });

  return (
    <View style={styles.container}>
      <View>
        <form onSubmit={handleSubmit((data) => { console.log(data); })}>
          <input {...register("email")} placeholder="Email" />
          <p>{errors.email?.message}</p>
          <input {...register("password")} placeholder="Password" />
          <p>{errors.password?.message}</p>
          <input type="submit" />
        </form>
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
    borderColor: "red"
  },
  borderBlue: {
    borderColor: "blue"
  },
  
});