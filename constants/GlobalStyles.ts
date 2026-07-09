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
    width: "100%",
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
    height: "100%",
  },
  blueButton: {
    backgroundColor: "rgb(30, 165, 255)",
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const pStyles = StyleSheet.create({
  bgBlue: { backgroundColor: "rgb(30, 165, 255)" },

  absoluteTL: { position: "absolute", top: 0, left: 0 },

  size20: { fontSize: 20 },
  size30: { fontSize: 30 },

  textWhite: { color: "rgb(250,250,250)" },

  w5: { width: "12%" },
  w50: { width: "30%" },
  w70: { width: "70%" },
  wFull: { width: "100%" },

  h15: { height: "6%" },
  hFull: { height: "100%" },

  aspect1: { aspectRatio: 1 },
  flex: { display: "flex" },
  itemsCenter: { alignItems: "center" },
  justifyCenter: { justifyContent: "center" },

  gap10: { gap: 10 },
  gap20: { gap: 20 },

  m5: { margin: "5%" },

  ptb2: { paddingBottom: "2%", paddingTop: "2%" },
  p5: { padding: "5%" },
  ptb5: { paddingBottom: "5%", paddingTop: "5%" },

  textCenter: { textAlign: "center" },
  radius20: { borderRadius: 20 },
  radius50: { borderRadius: 50 },
  borderBlack: {
    borderStyle: "solid",
    borderColor: "rgba(10,10,10,0.5)",
    borderWidth: 2,
  },
  borderWhite: {
    borderStyle: "solid",
    borderColor: "rgba(245, 245, 245, 0.5)",
    borderWidth: 5,
  },
});
