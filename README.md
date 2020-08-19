# React Native 0.63.2 Example Application

Create an app with React Native.

Features:
1.	Parses the provided .json located in src/json/TheHouseOfPleasures.json file (HouseofPleasures.json).
2.	Follow the provided UI mockup for how the app looks. (UI mockup image 1 and 2 provided)
3.	Shows the story text on screen.
4.	Text can be scrolled or clicked to proceed in the story.
5.	Has at least one choice situation with two options for user
6.	Text fades out when user comes to the choice situation.
7.	Use Lora font in Regular and Bold, found here: https://fonts.google.com/specimen/Lora#standard-styles


#UI Mockup 1 Reading story Situation
![alt text](Mockups/Book%20Read%20%201%20-%20Start.png)


#UI Mockup 2 Choice Situation
![alt text](Mockups/Book%20Read%20%202%20-%20Choices.png)
 
 
#Libraries used 
````
Packages Used:
    "@fortawesome/fontawesome-svg-core": "^1.2.30" => Fontawesome
    "@fortawesome/free-solid-svg-icons": "^5.14.0" => Fontawesome
    "@fortawesome/react-native-fontawesome": "^0.2.5"  => Fontawesome
    "@react-native-community/masked-view": "^0.1.10"  => Requried for React Navigatoin,
    "@react-navigation/native": "^5.7.3" => Requried for React Navigatoin,,
    "@react-navigation/stack": "^5.9.0" => Requried for React Navigatoin,,
    "prop-types": "^15.7.2" => Requried for React PropTypes,
    "react": "16.13.1" => Requried for React ,
    "react-native": "0.63.2" => Requried for React Native,
    "react-native-gesture-handler": "^1.7.0" => Requried for React Navigatoin,
    "react-native-reanimated": "^1.13.0" => Requried for React Navigatoin,
    "react-native-safe-area-context": "^3.1.4" => Requried for React Navigatoin,
    "react-native-screens": "^2.10.1" => Requried for React Navigatoin,
    "react-native-svg": "^12.1.0" => Requried for Font awsome,
    "react-native-splash-screen": "^3.2.0", => Required for splash screen
````

#Source Folder Structure
````
1. src => Main Source folder

2. src/components/android/AndroidBackButton.js => Components for Android devices back button when user clicks on the 
Reading sotry screen, appears on top of the screen.

3. src/components/ios/AndroidBackButton.js => Components for IOS devices back button when user clicks on the Reading 
story screen, appears on top of the screen.

4. src/components/Button.js => Common Component Button.

5. src/components/FadeInView.js => Common component FadeInView for animating the effect. Can be used for any component , 
just put child component inside it.

6. src/components/Loader.js => Common  component loading full screen view.

7. helpers/HelperFunction.js => Contains helper function which can be used any where in the application.

8. helper/HtmlEntities.js => edited library for decoding html entities in to text.

9. json/TheHouseOfPleasures.json => This folder contains json files.

10. routes/Routes => Application routes. React navigation is used for routing 

11. screens/homeScreenComponents/Home.js => Home screen and components related to it.

12. screen/storyScreenComponents/StoryMain.js => Story reading Mockup 1 and 2 component.

13. screen/storyScreenComponents/StoryScreenOptions.js => Component for changing story Mockup 1 and 2 fonts, and reset 
the application , reset meaning clear saved cache (Font size, layout changes, user story data etc)

14. styles/AndroidStyles.js => Styles realted to andorid devices.

15. styles/IosStyles.js => Styles realted to Ios devices.

16. src/Styles.js => Main Common styles for all devices, and other utilities such as paddings, margins, grid system, 
flex, widths, and much more. This is like a small bootstrap framework.

````

#Singed apk.

````
Singed apk for the release can be found inside android/app/release/app-release.apk

You can install the apk directly to mobile device or run below command 

npx react-native run-android --variant=release

````
