import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

function MealsList({ items }) {
  function renderMealItem(itemData) {
    const { id, title, imageUrl, complexity, duration, affordability } =
      itemData.item;
    return (
      <MealItem
        id={id}
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
