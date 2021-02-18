// Powered By Development Here
// www.devhere.co
// Terms: https://devhere.co/terms-and-conditions
// Started in (28-05-2020)
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  FlatList,
  Dimensions,
} from "react-native";
import Theme from "../Theme";
import { ScrollView } from "react-native-gesture-handler";
import DarkTheme from "../DarkTheme";
import { tranlateText } from "../translation/translate";
import {useTheme} from '@react-navigation/native';
import { useSelector } from "react-redux";

const DEVICE_HEIGHT = Dimensions.get('window').height;

//login
class Login extends React.Component {
  render() {
    const { config, colors } = this.props;
    let myTheme = Theme;
    myTheme = config.theme === 'dark' ? DarkTheme: Theme;

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>
            How are you
          </Text>
        </ScrollView>

      </View>
    );
  }
}

export default function(props) {
  const {colors} = useTheme();
  const config = useSelector((state) => state.config);
  return <Login {...props} colors={colors} config={config}/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
    paddingHorizontal: 20,
  },
  logoWrapper: {
    marginTop: 60,
  },
  entryWrapper: {
    flex: 5,
    marginTop: 15
  },
  socialWrapper: {
    paddingHorizontal: 20,
    justifyContent: "space-around",
    backgroundColor: "green"
  },
  forgotWrapper: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 14,
    fontFamily: Theme.poppins,
  },
  mainBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.primary,
  },
  line: {
    borderColor: "#e5e5e5",
    borderWidth: 0.5,
    height: 0.7,
  },
  socialIcons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  placeholderWrapper: {
    paddingVertical: Platform.OS === "ios" ? 15 : 0,
    fontSize: 14,
    opacity: 0.9,
    fontFamily: Theme.poppins,
  },
  title: {
    // paddingVertical: Platform.OS === "ios" ? 15 : 0,
    fontSize: 18,
    fontFamily: Theme.poppinsbold,
    textAlign: "left"
  },
  inputgroup: {
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 15
  },
  arrow: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    transform: [{ rotate: '-90deg' }]
  },
  texttip: {
    fontSize: 12,
    fontFamily: Theme.poppins,
    opacity: 0.8,
    textAlign: "left"
  },
  btnsocial: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    borderWidth: 1,
    marginBottom: 15,
  }
});
