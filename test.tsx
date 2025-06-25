import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login pressed", { email, password });
  };

  const handleForgotPassword = () => {
    console.log("Forgot password pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>tcp</Text>
          <Text style={styles.logoSeparator}>|</Text>
          <Text style={styles.logoText}>Humanity</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Log in to your account</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email or username"
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a2332",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "300",
    color: "#00bcd4",
    marginRight: 8,
  },
  logoSeparator: {
    fontSize: 24,
    color: "#666",
    fontWeight: "300",
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "300",
    color: "white",
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  globe: {
    fontSize: 14,
    marginRight: 6,
  },
  languageText: {
    fontSize: 14,
    color: "white",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "300",
    color: "white",
    marginBottom: 40,
    lineHeight: 34,
  },
  form: {
    flex: 1,
  },
  input: {
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
    paddingVertical: 16,
    fontSize: 16,
    color: "white",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#00bcd4",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPasswordButton: {
    alignItems: "center",
    marginTop: 16,
    paddingVertical: 12,
  },
  forgotPasswordText: {
    color: "#00bcd4",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
