import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const SpendingScreen = ({ goBack }) => {
  const chartData = [
    {
      name: 'Home',
      amount: 500,
      color: '#ff6384',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Food',
      amount: 200,
      color: '#36a2eb',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Transport',
      amount: 300,
      color: '#ffce56',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Entertainment',
      amount: 150,
      color: '#4bc0c0',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Spending</Text>
        <View style={{ width: 24 }} /> {/* Empty space to balance back icon */}
      </View>

      {/* Balance */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>$1,150</Text>
      </View>

      {/* Pie Chart */}
      <View style={styles.chartContainer}>
        <PieChart
          data={chartData}
          width={screenWidth - 32}
          height={180}
          chartConfig={{
            color: () => '#000',
          }}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="10"
          absolute
        />
      </View>

      {/* Legend */}
      <FlatList
        data={chartData}
        keyExtractor={(item) => item.name}
        style={styles.legendList}
        renderItem={({ item }) => (
          <View style={styles.legendItem}>
            <View style={[styles.colorDot, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.name}</Text>
            <Text style={styles.legendAmount}>${item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7ff',
  },
  header: {
    backgroundColor: '#1e57f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  balanceContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  balanceLabel: {
    color: '#999',
    fontSize: 14,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  legendList: {
    paddingHorizontal: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  colorDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 12,
  },
  legendText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  legendAmount: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SpendingScreen;
