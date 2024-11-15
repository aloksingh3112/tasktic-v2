import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { FC } from "react";
import HomeTab from "../screens/dashboard/HomeTab";
import CalendarTab from "../screens/dashboard/CalendarTab";
import GoalsTab from "../screens/dashboard/GoalsTab";
import CommunityTab from "../screens/dashboard/CommunityTab";
import ProgressTab from "../screens/dashboard/ProgressTab";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";
import { Colors } from "../constants/Colors";
import { FONTS } from "../constants/Fonts";
import { CalendarTabIcon, GoalsTabIcon, HomeTabIcon, CommunityTabIcon, ProgressTabIcon } from "./TabIcon";

const Tab = createBottomTabNavigator();

const BottomTab: FC = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingTop: Platform.OS === "ios" ? RFValue(5) : 0,
          paddingBottom: Platform.OS === "ios" ? 30 : 10,
          backgroundColor: colors.background,
          height: Platform.OS === "android" ? 70 : 80,
        },
        tabBarActiveTintColor: Colors.active_tab,
        tabBarInactiveTintColor: "#447777",
        headerShadowVisible: true,
        tabBarLabelStyle: {
          fontFamily: FONTS.Medium,
          fontSize: Platform.OS === "ios" ? RFValue(9) : RFValue(10),
          textAlign: "center",
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return <HomeTabIcon focused={focused} />;
          }
          if (route.name === "Calendar") {
            return <CalendarTabIcon focused={focused} />;
          }
          if (route.name === "Goals") {
            return <GoalsTabIcon focused={focused} />;
          }
          if (route.name === "Community") {
            return <CommunityTabIcon focused={focused} />;
          }
          if (route.name === "Progress") {
            return <ProgressTabIcon focused={focused} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Calendar" component={CalendarTab} />
      <Tab.Screen name="Goals" component={GoalsTab} />
      <Tab.Screen name="Community" component={CommunityTab} />
      <Tab.Screen name="Progress" component={ProgressTab} />
    </Tab.Navigator>
  );
};

export default BottomTab;
