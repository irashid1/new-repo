import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to my New App!!!</Text>
      <Text style={styles.heading}>TODO List</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1A3C",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "200",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});
