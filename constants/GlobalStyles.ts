import { StyleSheet } from "react-native";

export const rStyles = StyleSheet.create({
    formView: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        // justifyContent: "space-evenly",
    },
    tInput: {
        backgroundColor: "white",
        padding: "2%",
        paddingLeft: "4%",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 20,
        width: "100%"
    },
    tInputBad: {
        backgroundColor: "white",
        padding: "2%",
        paddingLeft: "4%",
        width: "100%",
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "red",
        borderStyle: "solid",

    },
    imageSizing: {
        width: "100%",
        height: "100%"
    }
});

export const pStyles = StyleSheet.create({
    size20: {fontSize: 20},

    w50: { width: "30%" },
    w70: { width: "70%" },
    wFull: { width: "100%"},

    aspect1: { aspectRatio: 1 },
    flex: { display: "flex" },
    itemsCenter: { alignItems: "center" },
    justifyCenter: { justifyContent: "center" },
    gap10 : { gap: 10 },
    ptb5: { paddingBottom: "5%", paddingTop: "5%" },
    textCenter: { textAlign: "center" },
    radius20: { borderRadius: 20 }
});