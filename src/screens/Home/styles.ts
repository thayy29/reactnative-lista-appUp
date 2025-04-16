import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#000",
    padding: 10,
  },

  eventName: {
    color: "#F2FBEF",
    paddingTop: 10,
    fontSize: 20,
    alignItems: "flex-start",
  },

  eventDate: {
    color: "#525252",
    paddingTop: 1,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
    justifyContent: "flex-start",
  },

  input: {
    flex: 1,
    backgroundColor: "#191919",
    color: "#F2FBEF",
    padding: 16,
    fontSize: 16,
    borderRadius: 10,
    height: 56,
    marginRight: 12,
  },

  button: {
    backgroundColor: "#E63946",
    width: 56,
    height: 56,
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
  },

  form: {
    flexDirection: "row",
    width: "100%",
  },

  icon: {
    color: "#ffffff",
  },

  emptyListText: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",

    margin: 20,
    lineHeight: 20,
    // backgroundColor: "#ffffff",
  },
});
