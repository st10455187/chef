import React, { useState } from "react";
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   Image,
   TouchableOpacity,
   FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

interface MenuItem {
   name: string;
   description: string;
   course: string;
   price: number;
   emoji: string;
}

const AddMenuScreen: React.FC = () => {
   const [name, setName] = useState<string>("");
   const [description, setDescription] = useState<string>("");
   const [course, setCourse] = useState<string>("Appetizer");
   const [price, setPrice] = useState<string>("");
   const [emoji, setEmoji] = useState<string>("");
   const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

   const addMenu = () => {
      // Ensure that we enter all menu details
      if (!name || !description || !price || !emoji) {
         alert("Please fill in all fields.");
         return;
      }

      // Ensure that price is a valid number
      const parsedPrice = parseFloat(price);
      if (isNaN(parsedPrice) || parsedPrice <= 0) {
         alert("Please enter a valid price.");
         return;
      }

      const newMenuItem: MenuItem = {
         name,
         description,
         course,
         price: parsedPrice, // Converting our string price to a number
         emoji,
      };
      setMenuItems([...menuItems, newMenuItem]);

      setName("");
      setDescription("");
      setCourse("Appetizer");
      setPrice("");
      setEmoji("");
   };

   return (
      <View style={styles.container}>
         <Image
            style={styles.logoImage}
            source={require("./assets/logonobg.png")}
         />

         <Text style={styles.screenHeading}>Add Menu</Text>

         <TextInput
            style={styles.nameInput}
            placeholder="Name"
            value={name}
            onChangeText={setName}
         />

         <TextInput
            style={styles.descriptionInput}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
         />

         <Picker
            style={styles.picker}
            selectedValue={course}
            onValueChange={(itemValue) => setCourse(itemValue)}>
            {/* <Picker.Item label="Select Course" value="" enabled={false} /> */}
            <Picker.Item label="Appetizer" value="Appetizer" />
            <Picker.Item label="Main" value="Main" />
            <Picker.Item label="Salad" value="Salad" />
            <Picker.Item label="Hot Drinks" value="Hot Drinks" />
            <Picker.Item label="Cold Drinks" value="Cold Drinks" />
            <Picker.Item label="Soup" value="Soup" />
            <Picker.Item label="Dessert" value="Dessert" />
            <Picker.Item label="Side Dishes" value="Side Dishes" />
            <Picker.Item label="Starters" value="Starters" />
            <Picker.Item label="Snacks" value="Snacks" />
            <Picker.Item label="Vegetarian Dishes" value="Vegetarian Dishes" />
         </Picker>

         <TextInput
            style={styles.priceInput}
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
         />

         <TextInput
            style={styles.emojiInput}
            placeholder="Food Emoji"
            value={emoji}
            onChangeText={setEmoji}
         />

         <TouchableOpacity style={styles.addButton} onPress={addMenu}>
            <Text style={styles.addText}>+</Text>
         </TouchableOpacity>

         <Text style={styles.menuText}>Menu: ({menuItems.length})</Text>

         <FlatList
            data={menuItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
               <View style={styles.menuItem}>
                  <Text style={styles.emoji}>{item.emoji}</Text>
                  <View>
                     <Text style={styles.menuItemName}>{item.name}</Text>
                     <Text>{item.description}</Text>
                     <Text>R{item.price.toFixed(2)}</Text>
                  </View>
               </View>
            )}
         />
      </View>
   );
};

export default function App() {
   return <AddMenuScreen />;
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#e5f1ff",
      alignItems: "center",
      justifyContent: "center",
   },
   logoImage: {
      width: 90,
      height: 102,
   },
   screenHeading: {
      fontSize: 18,
      fontWeight: "bold",
   },
   nameInput: {
      width: 307,
      height: 50,
      backgroundColor: "#FFFFFF",
      marginTop: 20,
      borderRadius: 10,
      paddingLeft: 10,
   },
   descriptionInput: {
      width: 307,
      height: 75,
      backgroundColor: "#FFFFFF",
      marginTop: 10,
      borderRadius: 10,
      paddingLeft: 10,
   },
   picker: {
      width: 307,
      height: 50,
      backgroundColor: "#FFFFFF",
      marginTop: 10,
      borderRadius: 10,
   },
   priceInput: {
      width: 307,
      height: 50,
      backgroundColor: "#FFFFFF",
      marginTop: 10,
      borderRadius: 10,
      paddingLeft: 10,
   },
   emojiInput: {
      width: 307,
      height: 50,
      backgroundColor: "#FFFFFF",
      marginTop: 10,
      borderRadius: 10,
      paddingLeft: 10,
   },
   addButton: {
      width: 40,
      height: 40,
      backgroundColor: "#277bde",
      marginTop: 10,
      marginLeft: 265,
      borderRadius: 10,
      color: "#FFFFFF",
   },
   addText: {
      color: "#FFFFFF",
      fontSize: 27,
      fontWeight: "bold",
      textAlign: "center",
   },
   menuText: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 20,
   },
   menuItem: {
      flexDirection: "row",
      alignItems: "center",
      margin: 5,
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      padding: 10,
      marginLeft: 10,
      width: 307,
      height: 115,
      shadowColor: "#000000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   emoji: {
      fontSize: 50,
      marginRight: 50,
   },
   menuItemName: {
      fontWeight: "bold",
   },
});
