import { StyleSheet } from "react-native";

export const rStyles = StyleSheet.create({
    formView: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    tInput: {
        backgroundColor: "white",
        padding: "2%",
        paddingLeft: "4%",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 20,
        width: "100%"
    }
});

export const pStyles = StyleSheet.create({
    redBorder: {
        borderColor: "red",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 20
    },
    w70: { width: "70%" },
    flex: { display: "flex"},
    itemsCenter: { alignItems: "center"},
    justifyCenter: { justifyContent: "center"}
});