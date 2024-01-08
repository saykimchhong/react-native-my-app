// HomeScreen.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Profilescreen: undefined;
};

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, "Home">;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profilescreen");
        }}
      />
    </View>
  );
};

export default HomeScreen;
