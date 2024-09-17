import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfilePage() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Profile Image and Name */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image
          style={styles.profileImage}
        />
        <Text style={styles.displayName}>John Doe</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Global Rank */}
      <View style={styles.rankContainer}>
        <Text style={styles.rankText}>Global Rank: Diamond</Text>
      </View>

      {/* Financial Trends Graph */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Financial Trends</Text>
        <View style={styles.graphContainer}>
          {/* Placeholder for Graph */}
          <Image
            source={{ uri: 'https://via.placeholder.com/300x150' }}
            style={styles.graphImage}
          />
        </View>
      </View>

      {/* Past Financial Summaries */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Past Financial Summaries</Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>August 2024: Savings up by 12%</Text>
          <Text style={styles.summaryText}>July 2024: Spent $200 less on dining</Text>
          <Text style={styles.summaryText}>June 2024: Reached budget goal</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    padding: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  displayName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  rankContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888888',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  graphContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  graphImage: {
    width: '100%',
    height: 150,
  },
  summaryContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 8,
  },
});