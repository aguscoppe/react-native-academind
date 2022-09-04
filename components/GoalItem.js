import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem({ deleteGoalHandler, itemId, children }) {
  return (
    <View style={styles.goalItem} onPress>
      <Pressable
        android_ripple={{ color: '#ddd' }}
        onPress={deleteGoalHandler.bind(this, itemId)}
        /* exclusive for iphone style */
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5E0ACC',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#fff',
    padding: 8,
  },
});

export default GoalItem;
