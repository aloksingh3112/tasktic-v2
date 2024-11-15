import Calendar from "../assets/tabicons/calendar.png";
import CalendarFocused from "../assets/tabicons/calendar_focused.png";
import Home from "../assets/tabicons/home.png";
import HomeFocused from "../assets/tabicons/home_focused.png";
import Goals from "../assets/tabicons/goals.png";
import GoalsFocused from "../assets/tabicons/goals_focused.png";
import Community from "../assets/tabicons/community.png";
import CommunityFocused from "../assets/tabicons/community_focused.png";
import Progress from "../assets/tabicons/progress.png";
import ProgressFocused from "../assets/tabicons/progress_focused.png";
import { FC } from "react";
import { Image } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";

interface TabProps {
  name: string;
}

interface IconProp {
  focused: boolean;
}

const TabIcon: FC<TabProps> = ({ name }) => {
  return (
    <Image
      source={name === "Home" ? Home : name === "Calendar" ? Calendar : name === "Goals" ? Goals : name === "Community" ? Community : Progress}
      style={[GlobalStyles.tabIcon]}
    />
  );
};

const TabIconFocused: FC<TabProps> = ({ name }) => {
  return (
    <Image
      source={
        name === "Home"
          ? HomeFocused
          : name === "Calendar"
          ? CalendarFocused
          : name === "Goals"
          ? GoalsFocused
          : name === "Community"
          ? CommunityFocused
          : ProgressFocused
      }
      style={[GlobalStyles.tabIcon]}
    />
  );
};

export const HomeTabIcon: FC<IconProp> = ({ focused }) => {
  return focused ? <TabIconFocused name="Home" /> : <TabIcon name="Home" />;
};

export const CalendarTabIcon: FC<IconProp> = ({ focused }) => {
  return focused ? <TabIconFocused name="Calendar" /> : <TabIcon name="Calendar" />;
};

export const GoalsTabIcon: FC<IconProp> = ({ focused }) => {
  return focused ? <TabIconFocused name="Goals" /> : <TabIcon name="Goals" />;
};

export const CommunityTabIcon: FC<IconProp> = ({ focused }) => {
  return focused ? <TabIconFocused name="Community" /> : <TabIcon name="Community" />;
};

export const ProgressTabIcon: FC<IconProp> = ({ focused }) => {
  return focused ? <TabIconFocused name="Progress" /> : <TabIcon name="Progress" />;
};
