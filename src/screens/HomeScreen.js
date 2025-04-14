import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f6f7ff' }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#999" />
          <Text style={styles.searchText}>Search “Payments”</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <Text style={styles.currencyText}>US Dollar</Text>
        <Text style={styles.balanceText}>$20,000</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="wallet" size={16} color="#1e57f1" style={{ marginRight: 8 }} />
          <Text style={styles.addText}>Add Money</Text>
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <ActionButton icon="paper-plane" label="Send" />
        <ActionButton icon="hand-holding-usd" label="Request" />
        <ActionButton icon="university" label="Bank" />
      </View>

      {/* Transactions */}
      <View style={styles.transactionSection}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <ScrollView>
          <TransactionItem icon="credit-card" label="Spending" amount="-500" color="#f44336" />
          <TransactionItem icon="dollar-sign" label="Income" amount="3000" color="#4caf50" />
          <TransactionItem icon="file-invoice" label="Bills" amount="-800" color="#ff9800" />
          <TransactionItem icon="piggy-bank" label="Savings" amount="1000" color="#e91e63" />
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#000" />
          <Text style={styles.navLabel}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="analytics-outline" size={24} color="#000" />
          <Text style={styles.navLabel}>Stats</Text>
        </View>
        <View style={styles.centerButton}>
          <FontAwesome5 name="plus" size={24} color="#fff" />
        </View>
        <View style={styles.navItem}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#000" />
          <Text style={styles.navLabel}>Chat</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#000" />
          <Text style={styles.navLabel}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const ActionButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.actionButton}>
    <FontAwesome5 name={icon} size={20} color="#1e57f1" />
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const TransactionItem = ({ icon, label, amount, color }) => (
  <View style={styles.transactionItem}>
    <View style={styles.transactionLeft}>
      <FontAwesome5 name={icon} size={20} color={color} />
      <Text style={styles.transactionLabel}>{label}</Text>
    </View>
    <Text style={{ color }}>{amount.startsWith('-') ? '-' : '+'}${amount.replace('-', '')}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e57f1',
    padding: 16,
    paddingTop: 48,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff33',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  searchText: {
    color: '#fff',
    marginLeft: 8,
  },
  balanceSection: {
    alignItems: 'center',
    backgroundColor: '#1e57f1',
    paddingBottom: 24,
  },
  currencyText: {
    color: '#fff',
    marginBottom: 6,
  },
  balanceText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addText: {
    color: '#1e57f1',
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionLabel: {
    marginTop: 6,
    color: '#1e57f1',
    fontSize: 12,
  },
  transactionSection: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 10,
    color: '#333',
    marginTop: 2,
  },
  centerButton: {
    backgroundColor: '#1e57f1',
    padding: 12,
    borderRadius: 30,
    marginTop: -24,
  },
});

export default HomeScreen;
