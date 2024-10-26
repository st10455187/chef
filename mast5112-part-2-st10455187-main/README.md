MAST5112 POE PART 2
=

### Youtube Video <br>
[![](https://github.com/user-attachments/assets/93407952-3c2d-42a0-b9a5-eb36013f5e2d)](https://youtu.be/5gGbNDaiwYQ)

<hr>
<img src="https://github.com/user-attachments/assets/25735ea8-b27d-48c4-b057-b993e589ce6f" data-canonical-src="https://github.com/user-attachments/assets/25735ea8-b27d-48c4-b057-b993e589ce6f" width="60"/>
<img src="https://github.com/user-attachments/assets/2cca9fb1-e6af-4c85-baec-581cc585d920" data-canonical-src="https://github.com/user-attachments/assets/2cca9fb1-e6af-4c85-baec-581cc585d920" width="60"/>
<img src="https://github.com/user-attachments/assets/d1999c85-4f02-4c0f-9d82-5de0a879e838" data-canonical-src="https://github.com/user-attachments/assets/d1999c85-4f02-4c0f-9d82-5de0a879e838" width="60"/>
<img src="https://github.com/user-attachments/assets/3e6f783a-1cca-48df-8508-86b1147881a6" data-canonical-src="https://github.com/user-attachments/assets/3e6f783a-1cca-48df-8508-86b1147881a6" width="60"/>
<hr>

### 1. UI Design
- Pre-design (figma)

<img src="https://github.com/user-attachments/assets/f7c560a4-ff46-4610-bf69-7bc491885b38" data-canonical-src="https://github.com/user-attachments/assets/f7c560a4-ff46-4610-bf69-7bc491885b38" width="250"/> <br>

- Final-design (VS-Code)
<img src="https://github.com/user-attachments/assets/3bf1309d-d41b-40fe-87d3-6edf646ab1a7" data-canonical-src="https://github.com/user-attachments/assets/3bf1309d-d41b-40fe-87d3-6edf646ab1a7" width="250"/>



## Main Points
### 1. Imports
- Imports that were used in the process of this POE <br>
<img src="https://github.com/user-attachments/assets/dcbf1f60-28eb-4de0-9cac-8ca6e77e9ad9" data-canonical-src="https://github.com/user-attachments/assets/dcbf1f60-28eb-4de0-9cac-8ca6e77e9ad9" width="500"/>

### 2. Interface for the MenuItems
- The properties inside the **MenuItem** Object specifies what data types will be stored.
<img src="https://github.com/user-attachments/assets/35c68c6e-1f34-43c0-95e9-78c4245b7b03" data-canonical-src="https://github.com/user-attachments/assets/35c68c6e-1f34-43c0-95e9-78c4245b7b03" width="500"/>

### 3. Ensuring that user enters valid details
- The below code will ensure that the user does not try to save empty strings. As well as ensures that they enter valid numbers, though I have set they keyboard type to *numeric* for the price input, it will still help incase a user tries to type in the text using a physical keyboard.
<img src="https://github.com/user-attachments/assets/c65bbc86-d616-4c98-b8d2-c4f1ac01875e" data-canonical-src="https://github.com/user-attachments/assets/c65bbc86-d616-4c98-b8d2-c4f1ac01875e" width="500"/>

### 4. Creating an Array
- The spread operator creates a new array containing all the existing items in **menuItems**. The new array then includes the newMenuItem at the end. <br>
<img src="https://github.com/user-attachments/assets/431d16b2-fc14-4ffc-822d-0ad2fa7783ef" data-canonical-src="https://github.com/user-attachments/assets/431d16b2-fc14-4ffc-822d-0ad2fa7783ef" width="500"/>

### 5. Clearing the input
- After the user has saved a menu, the inputs will be cleared. <br> <br>
  

### 6. Displaying the Menu Items using a Flatlist
- The added menu items are displayed using a **FlatList** component. Each menu item includes the name, description, price and an emoji.
<img src="https://github.com/user-attachments/assets/4194372c-cbbf-48b1-a583-7c3e16ddcd07" data-canonical-src="https://github.com/user-attachments/assets/4194372c-cbbf-48b1-a583-7c3e16ddcd07" width="500"/>


### 7. Displaying the total number of menu items
The .length will display the total number of menu items stored in the **menuItems** array
<img src="https://github.com/user-attachments/assets/3a7bf91c-9968-4d40-8ca9-1c324d017d87" data-canonical-src="https://github.com/user-attachments/assets/3a7bf91c-9968-4d40-8ca9-1c324d017d87" width="500"/>

<hr>

### Application Splash Screen and Icon
To change the splash screen image and application icon, I had to make some few changes in the **app.json** file.
<img src="https://github.com/user-attachments/assets/84ba84a1-5d8a-4b7e-9edc-39bb4be1d324" data-canonical-src="https://github.com/user-attachments/assets/84ba84a1-5d8a-4b7e-9edc-39bb4be1d324" width="500"/><br><br>

## Release v2.1.1
https://github.com/VCSTDN/mast5112-part-2-st10455187/releases/tag/mast5112

# Referencing

- Meta Platforms, Inc. (2024). *Core Components and Native Components*. [Online]. Available at: https://reactnative.dev/docs/intro-react-native-components [Accessed 2 October 2024] <br>
- Node Package Manager. (2024). *React Native Picker*. [Online]. Available at: https://www.npmjs.com/package/@react-native-picker/picker [Accessed 3 October 2024] <br> 
- React TypeScript Cheatsheet. *Function Components*. [Online]. Available at: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/ [Accessed 3 October 2024]

<hr>

# ALL CODE <br> 
<img src="https://github.com/user-attachments/assets/f64f971b-66e7-4ba7-9d92-3b82318f1517" data-canonica-src="https://github.com/user-attachments/assets/f64f971b-66e7-4ba7-9d92-3b82318f1517" width="250"/>


