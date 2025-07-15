import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import logo from "../assets/logo.jpg";

// Data user
const userList = [
  { name: "Widya Lintang", userID: "Admin", password: "123" },
  { name: "Helena Jemima", userID: "Super Admin", password: "456" },
  { name: "Febri Fairuz", userID: "User", password: "789" },
];

const LoginScreen = () => {

  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = () => {
    const user = userList.find(
      (u) => u.userID === userID && u.password === password // ✅ .find()
    );

    if (user) {
        setLoggedInUser(user);
        Alert.alert(
          `Welcome, ${user.name}!`,
          "Let's ngoding...",       
          [{ text: "Ok" }]          
        );
      } else {
        Alert.alert("Failed", "UserID or password is incorrect");
      }
      
  };

  const handleSignUp = () => {
    Alert.alert("Sign Up", "Sign up functionality will be here!");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Let's Make a Code</Text>

      {/*Form */}
      <TextInput
        style={styles.input}
        placeholder="UserID"
        value={userID}
        onChangeText={setUserID}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

    <TouchableOpacity style={styles.button} onPress={handleLogin}>
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>

    <Text style={styles.orText}>or</Text>

    <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
    <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  logo: { width: 250, height: 250, alignSelf: "center", marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
  greeting: { textAlign: "center", marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },  
  signUpButton: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  userList: { marginTop: 20 },
  subtitle: { fontWeight: "bold", marginBottom: 5 },
});

export default LoginScreen;
