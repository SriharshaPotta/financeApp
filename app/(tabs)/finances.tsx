import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';

export default function FinancialManagement() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Financial Management</Text>
      </View>

      {/* Monthly/Weekly Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Monthly/Weekly Summary</Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Income: $4,000.00</Text>
          <Text style={styles.summaryText}>Expenses: $3,200.00</Text>
          <Text style={styles.summaryText}>Savings: $800.00</Text>
        </View>
      </View>

      {/* Budget Insights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Budget Insights</Text>
        <View style={styles.budgetContainer}>
          <Text style={styles.budgetText}>You spent 10% less on dining out this month!</Text>
          <Text style={styles.budgetText}>Consider increasing your savings by $100 next month.</Text>
        </View>
      </View>

      {/* Parental Controls */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Parental Controls</Text>
        <View style={styles.parentalControlsContainer}>
          <Text style={styles.controlText}>Enable Parental Controls:</Text>
          <Switch value={true} onValueChange={() => {}} />
          <Text style={styles.controlText}>Set Spending Limit: $500</Text>
        </View>
      </View>

      {/* Bill Splitting */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bill Splitting</Text>
        <View style={styles.billSplittingContainer}>
          <Text style={styles.billText}>Shared Rent: $1,200</Text>
          <Text style={styles.billText}>Your Share: $600</Text>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay Your Share</Text>
          </TouchableOpacity>
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
  summaryContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 8,
  },
  budgetContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  budgetText: {
    fontSize: 16,
    marginBottom: 8,
  },
  parentalControlsContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlText: {
    fontSize: 16,
  },
  billSplittingContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  billText: {
    fontSize: 16,
    marginBottom: 8,
  },
  payButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
