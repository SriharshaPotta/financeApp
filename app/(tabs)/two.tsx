import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function HomePage() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Back, [User]!</Text>
      </View>

      {/* Account Balances */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Balances</Text>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceItem}>
            <Text style={styles.balanceTitle}>Checking</Text>
            <Text style={styles.balanceAmount}>$1,500.00</Text>
          </View>
          <View style={styles.balanceItem}>
            <Text style={styles.balanceTitle}>Savings</Text>
            <Text style={styles.balanceAmount}>$3,250.00</Text>
          </View>
        </View>
      </View>

      {/* Income & Expense Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Income & Expense Summary</Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Income: $2,000.00</Text>
          <Text style={styles.summaryText}>Expenses: $1,200.00</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Add Income</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Add Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View Reports</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Spending Trends Graph */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Spending Trends</Text>
        <View style={styles.graphContainer}>
          {/* Placeholder for Graph */}
          <Image 
            source={{ uri: 'https://via.placeholder.com/300x150' }} 
            style={styles.graphImage} 
          />
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginRight: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceTitle: {
    fontSize: 16,
    color: '#888888',
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
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
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
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
});
