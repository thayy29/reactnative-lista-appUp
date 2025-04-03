import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },

  title: {
    color: "white",
    paddingTop: 10,
    fontSize: 20,
    alignItems: "flex-start"
  },

  secondaryText: {
    color: "gray",
    paddingTop: 1,
    fontSize: 16,
    justifyContent: "flex-start"
  },

  textInput : {
    backgroundColor: "#2f2f33",
    marginTop: 12,
    color: "#ffffff",
    padding: 16,
    fontSize: 16,
    borderRadius: 10,
    outlineColor: "#2f2f33",
  },

  btnText: {
    backgroundColor: "#76e070",
    width: 50,
    height: 50,
    padding: 20,
    marginTop: 5,
    borderRadius: 10,
    fontSize:  16,
    justifyContent: "center"
  },
  box: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
  }

});
