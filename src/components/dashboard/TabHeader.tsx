import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import Logo from "../../assets/images/logo.png";
import CustomText from "../global/CustomText";
import { FONTS } from "../../constants/Fonts";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "@react-navigation/native";
import UserAvatar from "./UserAvatar";
import SettingsIcon from "../../assets/icons/settings.png";

interface TabProps {
  userName: string;
}

const TabHeader: FC<TabProps> = ({ userName }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
<View style={styles.flexRowCenter}>
  <UserAvatar />
  <View style={styles.flexColumnCenter}>
    {[ "Welcome", userName ].map((text, index) => (
      <CustomText 
        key={index} 
        style={styles.textStyle} 
      >
        {text || "Abhishek"}
      </CustomText>
    ))}
  </View>
</View>

      <View style={styles.flexRowCenter}>
        {/* <TouchableOpacity onPress={() => {}}>
          <Icon
            name="search"
            color={colors.text}
            style={styles.icon}
            size={RFValue(18)}
          />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => {}}>
          <Icon
            name="settings"
            color={colors.text}
            style={styles.icon}
            size={RFValue(18)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRowCenter: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    marginHorizontal: 6,
  },
  flexColumnCenter: {
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    alignItems: "center",
    paddingHorizontal: RFValue(12),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    width: RFValue(24),
    height: RFValue(24),
    resizeMode: "cover",
  },
    textStyle: {
    fontFamily: FONTS.Medium,
    fontSize: RFValue(10),
  },
});

export default TabHeader;
