import React, { FC, useState } from "react";
import CustomSafeAreaView from "../../components/global/CustomSafeAreaView";
import CustomText from "../../components/global/CustomText";
import { View, Text, StyleSheet, Pressable } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import DropDownPicker from 'react-native-dropdown-picker';
// import { MaterialIcons, Feather } from '@expo/vector-icons';

const TaskCard = ({ title, description, priority, status, dueDate, isGoalTask }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.titleContainer}>
          {/* <Feather name="file-text" size={20} color="#fff" /> */}
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <Pressable style={styles.checkbox} />
      </View>
      <Text style={styles.descriptionText}>{description}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.statusText}>{status}</Text>
        <View style={[styles.priorityBadge, 
          priority === 'High' ? styles.highPriority : 
          priority === 'Medium' ? styles.mediumPriority : 
          styles.lowPriority
        ]}>
          <Text style={styles.priorityText}>{priority}</Text>
        </View>
        {dueDate && (
          <View style={styles.dateContainer}>
            {/* <MaterialIcons name="update" size={16} color="#888" /> */}
            <Text style={styles.dateText}>{dueDate}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

// ProgressChart Component
const ProgressChart = ({ tasksCompleted, totalTasks, goalsCompleted, totalGoals }) => {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>{`${tasksCompleted}/${totalTasks}`}</Text>
        <Text style={styles.statsLabel}>Tasks Completed</Text>
      </View>
      <CircularProgress
        value={75}
        radius={40}
        duration={2000}
        progressValueColor={'#fff'}
        maxValue={100}
        title={'T'}
        titleColor={'#fff'}
        titleStyle={{ fontSize: 20 }}
        activeStrokeColor={'#8A2BE2'}
        inActiveStrokeColor={'#2f2f2f'}
        inActiveStrokeOpacity={0.5}
      />
      <View style={styles.statsContainer}>
        <Text style={styles.statsText} style={{ color: '#8A2BE2' }}>{`${goalsCompleted}/${totalGoals}`}</Text>
        <Text style={styles.statsLabel}>Goals Completed</Text>
      </View>
    </View>
  );
};

// CustomDropdown Component
const CustomDropdown = ({ placeholder, items, value, setValue }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      placeholder={placeholder}
      style={styles.dropdown}
      dropDownContainerStyle={styles.dropdownContainer}
      textStyle={styles.dropdownText}
      labelStyle={styles.dropdownLabel}
      placeholderStyle={styles.dropdownPlaceholder}
      theme="DARK"
    />
  );
};

const styles = StyleSheet.create({
  // Card Styles
  cardContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  descriptionText: {
    color: '#888888',
    fontSize: 14,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statusText: {
    color: '#FFA500',
    fontSize: 14,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  highPriority: {
    backgroundColor: '#FF4444',
  },
  mediumPriority: {
    backgroundColor: '#FFA500',
  },
  lowPriority: {
    backgroundColor: '#4CAF50',
  },
  priorityText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#444444',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateText: {
    color: '#888888',
    fontSize: 12,
  },

  // Progress Chart Styles
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
  },
  statsContainer: {
    alignItems: 'center',
  },
  statsText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statsLabel: {
    color: '#888888',
    fontSize: 14,
    marginTop: 4,
  },

  // Dropdown Styles
  dropdown: {
    backgroundColor: '#1E1E1E',
    borderColor: '#333333',
    borderRadius: 8,
    height: 40,
  },
  dropdownContainer: {
    backgroundColor: '#1E1E1E',
    borderColor: '#333333',
  },
  dropdownText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  dropdownLabel: {
    color: '#FFFFFF',
  },
  dropdownPlaceholder: {
    color: '#888888',
  },
});

const HomeTab: FC = () => {
  return (
    <CustomSafeAreaView>
      <CustomText>Home Tab</CustomText>
      <TaskCard
        title="Task 1"
        description="Description 1"
        priority="High"
        status="In Progress"
        dueDate="2024-01-01"
        isGoalTask={false}
      />
      <ProgressChart
        tasksCompleted={10}
        totalTasks={20}
        goalsCompleted={5}
        totalGoals={10}
      />
      <CustomDropdown
        placeholder="Select an option"
        items={[]}
        value="1"
        setValue={(value) => console.log(value)}
      />
    </CustomSafeAreaView>
  );
};

export default HomeTab;
