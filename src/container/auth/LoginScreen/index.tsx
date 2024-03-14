import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/images/loginImage.jpg")}
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").width,
        }}
      />
    </View>
  );
};

export default LoginScreen;
