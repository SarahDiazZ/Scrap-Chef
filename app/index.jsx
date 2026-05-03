import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// --- Temporary placeholder data so the screen isn't empty on first load ---
const INITIAL_ITEMS = [
  { id: "1", name: "Chicken breast", quantity: "2", unit: "lbs" },
  { id: "2", name: "Spinach", quantity: "1", unit: "bag" },
  { id: "3", name: "Garlic", quantity: "4", unit: "cloves" },
];

export default function PantryScreen() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [newItemName, setNewItemName] = useState("");

  // --- Add a new item to the list ---
  const handleAddItem = () => {
    if (!newItemName.trim()) return; // don't add empty items

    const newItem = {
      id: Date.now().toString(), // simple unique id for now
      name: newItemName.trim(),
      quantity: "1",
      unit: "item",
    };

    setItems([...items, newItem]);
    setNewItemName(""); // clear the input after adding
  };

  // --- Remove an item from the list ---
  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // --- Render a single pantry item row ---
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetail}>
          {item.quantity} {item.unit}
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
        <Text style={styles.deleteButton}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 20}
    >

      {/* Header */}
      <Text style={styles.heading}>My Pantry</Text>
      <Text style={styles.subheading}>{items.length} items</Text>

      {/* Pantry item list */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items yet. Add something!</Text>
        }
      />

      {/* Add item input */}
      <View style={styles.addRow}>
        <TextInput
          style={styles.input}
          placeholder="Add an ingredient..."
          value={newItemName}
          onChangeText={setNewItemName}
          onSubmitEditing={handleAddItem} // lets user press Enter/Done on keyboard
          returnKeyType="done" // shows "done" on the keyboard instead of "Enter"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* TODO: Add a "Get Recipes" button here later that calls your Claude API */}

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  itemInfo: {
    gap: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemDetail: {
    fontSize: 13,
    color: "#999",
  },
  deleteButton: {
    fontSize: 14,
    color: "#ff4444",
  },
  emptyText: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 40,
  },
  addRow: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#2e7d32",
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});