import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";
import BackButton from "../../../components/BackButton";
import { pStyles, rStyles } from "../../../constants/GlobalStyles";

export default function EmployeeInformationForm() {
  const router = useRouter();

  const empForm = z.object({
    fullName: z
      .string("Please input your Full Name")
      .min(4, "Please input your Full Name"),
    email: z.email("Please input your Email"),
    phone: z
      .string("Please input your Phone Number")
      .min(10, "Please input your Phone Number"), // e164 format is "+(areaCode)1234567890"
    postal: z
      .string("Please input your Postal Code")
      .min(6, "Please input 6 alphanumeric postal code")
      .max(6, "Please input 6 alphanumeric postal code"),

    address: z
      .string("Please input your Address")
      .min(8, "Please input your Address"),
  });

  type signupFormType = z.infer<typeof empForm>;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signupFormType>({
    resolver: zodResolver(empForm),
  });

  return (
    <>
      <BackButton />
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
              Employee Information Form
            </Text>
          </View>
        </View>
        <View style={[pStyles.w70, pStyles.gap10]}>
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={
                  !errors.fullName?.message ? rStyles.tInput : rStyles.tInputBad
                }
                placeholder="Full Name"
              />
            )}
          />
          {errors.fullName?.message && <Text>{errors.fullName.message}</Text>}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={
                  !errors.email?.message ? rStyles.tInput : rStyles.tInputBad
                }
                placeholder="Email"
              />
            )}
          />
          {errors.email?.message && <Text>{errors.email.message}</Text>}
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={
                  !errors.phone?.message ? rStyles.tInput : rStyles.tInputBad
                }
                placeholder="Phone Number"
              />
            )}
          />
          {errors.phone?.message && <Text>{errors.phone.message}</Text>}
          <Controller
            control={control}
            name="postal"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={
                  !errors.postal?.message ? rStyles.tInput : rStyles.tInputBad
                }
                placeholder="Postal Code (No Spaces)"
              />
            )}
          />
          {errors.postal?.message && <Text>{errors.postal.message}</Text>}
          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                style={
                  !errors.address?.message ? rStyles.tInput : rStyles.tInputBad
                }
                placeholder="Address"
              />
            )}
          />
          {errors.address?.message && <Text>{errors.address.message}</Text>}
          <Pressable
            style={[rStyles.blueButton, pStyles.borderBlack]}
            onPress={handleSubmit((data) => {
              router.push({
                pathname: "/signedIn",
                params: { name: "Submitted a form", path: "Employee" },
              });
            })}
          >
            <Text style={[pStyles.size20, pStyles.textWhite, pStyles.ptb2]}>
              Submit Employee Info Form
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
