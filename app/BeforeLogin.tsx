import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Stack } from "expo-router";
import { styles } from "../styles/landingStyles";
import { router } from "expo-router";

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "HEALTHY MOM AND HEALTHY BABY",
          headerTitleAlign: "left",
        }}
      />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HERO SECTION */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            Track Your Baby’s Vaccination Journey{"\n"}
            <Text style={styles.highlight}>with Confidence</Text>
          </Text>

          <Text style={styles.heroSubtitle}>
            Never miss a vaccine. Get reminders, government schedule updates,
            and expert guidance — all in one place.
          </Text>

          {/* IMAGE AFTER SUBTITLE */}
          <Image
            source={require("../assets/hero.png")}
            style={styles.heroImage}
            resizeMode="contain"
          />

          {/* BUTTONS AFTER IMAGE */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Learn More</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FEATURES SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Mothers Trust Us</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Vaccine Reminders</Text>
            <Text style={styles.cardText}>
              Timely alerts for upcoming vaccines.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Govt. Approved Schedule</Text>
            <Text style={styles.cardText}>
              Based on Indian Pediatric Guidelines.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Growth Tracking</Text>
            <Text style={styles.cardText}>
              Track your baby’s development.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Secure & Private</Text>
            <Text style={styles.cardText}>
              Your data is safe with us.
            </Text>
          </View>
        </View>

        {/* CTA SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Start Protecting Your Baby Today
          </Text>

          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/AfterLogin")}>
            <Text style={styles.loginButtonText} >Login</Text>
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Data Secured | Pediatric Expert Approved | Terms
          </Text>
          <Text style={styles.footerTextSmall}>
            © 2026 Healthy Mom and Healthy Baby
          </Text>
        </View>
      </ScrollView>
    </>
  );
}