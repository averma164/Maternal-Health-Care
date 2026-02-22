import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../styles/AfterLoginStyles";
import { Stack } from "expo-router";

export default function AfterLogin() {
  // Sample vaccination schedule data
  const [schedule, setSchedule] = useState([
    { age: "At Birth", vaccine: "BCG", status: "Pending" },
    { age: "At Birth", vaccine: "OPV-0", status: "Pending" },
    { age: "6 Weeks", vaccine: "DPT-1", status: "Pending" },
    { age: "6 Weeks", vaccine: "OPV-1", status: "Pending" },
    { age: "6 Weeks", vaccine: "Hepatitis B-2", status: "Pending" },
    { age: "10 Weeks", vaccine: "DPT-2", status: "Pending" },
    { age: "10 Weeks", vaccine: "OPV-2", status: "Pending" },
    { age: "14 Weeks", vaccine: "DPT-3", status: "Pending" },
    { age: "14 Weeks", vaccine: "OPV-3", status: "Pending" },
    { age: "14 Weeks", vaccine: "Hepatitis B-3", status: "Pending" },
  ]);

  const renderItem = ({ item }: { item: typeof schedule[0] }) => (
    <View style={styles.rowt}>
      <Text style={[styles.cell, { flex: 1 }]}>{item.age}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{item.vaccine}</Text>
      <Text style={[styles.cell, { flex: 1 }]}>{item.status}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "Vaccination Tracker", 
          headerTitleAlign: "left", 
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <FontAwesome name="user-circle" size={24} color="#333" />
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 100 }} 
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcome}>Welcome, XYZ</Text>
        </View>

        {/* Child Info */}
        <View style={styles.cardPink}>
          <Text style={styles.cardTitle}>My Child</Text>
          <Text>Name: Aarav</Text>
          <Text>DOB: Jan 15, 2024</Text>
          <Text>Age: 2 Months</Text>
          <Text>Blood Group: B+</Text>
        </View>

        {/* Next Vaccine & Progress */}
        <View style={styles.row}>
          <View style={styles.cardGreen}>
            <Text style={styles.cardTitle}>Next Vaccine</Text>
            <Text style={styles.boldText}>DPT-2</Text>
            <Text>Due in: 5 Days</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Mark as Done</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardBlue}>
            <Text style={styles.cardTitle}>Progress</Text>
            <Text style={styles.boldText}>7 / 15</Text>

            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>
        </View>

        {/* Vaccination Schedule Table */}
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}> Vaccination Schedule</Text>
          <View style={[styles.rowt, styles.headerRow]}>
            <Text style={[styles.cell, { flex: 1, fontWeight: "bold" }]}>
              Age
            </Text>
            <Text style={[styles.cell, { flex: 1, fontWeight: "bold" }]}>
              Vaccine
            </Text>
            <Text style={[styles.cell, { flex: 1, fontWeight: "bold" }]}>
              Status
            </Text>
          </View>

          <FlatList
            data={schedule}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => alert("Set Reminders clicked")}
        >
          <FontAwesome name="bell" size={20} color="#007AFF" />
          <Text style={styles.navText}>Set Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.navItem}
        onPress={() => alert("Documents clicked")}
        >
        <FontAwesome name="file" size={20} color="#007AFF" />
        <Text style={styles.navText}>Documents</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => alert("Edit Profile clicked")}
        >
          <FontAwesome name="edit" size={20} color="#007AFF" />
          <Text style={styles.navText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => alert("Basic Info clicked")}
        >
          <FontAwesome name="info-circle" size={20} color="#007AFF" />
          <Text style={styles.navText}>Basic Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
