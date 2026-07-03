import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { z } from "zod";

export default function signup() {

    const signup = z.object({
        fullName: z.string().min(4, "Please input your Full Name"),
        email: z.email("Please input your Email"),
        phone: z.string().min(10, "Please input a Phone Number"), // e164 format is "+(areaCode)1234567890"
        password: z.string().min(8, "Password must be longer than 8 characters"),
        passwordConfirm: z.string().min(8, "Passwords must match"),
    }).refine((data) => data.password === data.passwordConfirm, {
        // message: "Passwords Must Match",
        path: ["passwordConfirm"]
    });

    type signupFormType = z.infer<typeof signup>;

    const { register, handleSubmit, formState: {errors} } = useForm<signupFormType>({
        resolver: zodResolver(signup),
    });

    // console.log(errors);

    return(
        <View>
            <form onSubmit={handleSubmit((data) => { console.log(data); })}>
                <input {...register("fullName")} placeholder="Full Name"/>
                <p>{errors.fullName?.message}</p> 
                <input {...register("email")} placeholder="Email" />
                <p>{errors.email?.message}</p>
                <input {...register("phone")} placeholder="Phone Number" />
                <p>{errors.phone?.message}</p>
                <input {...register("password")} placeholder="Password" />
                <p>{errors.password?.message}</p>
                <input {...register("passwordConfirm")} placeholder="Confirm Password" />
                <p>{errors.passwordConfirm?.message}</p>
                <input type="submit" />
            </form>
        </View>
    );
}