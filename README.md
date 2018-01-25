# Hamara Internet app
The Hamara Internet app aims to provide digital security training advice for people facing harassment, and is a complement to the workshops of the Digital Rights Foundation. This app will be available on Android in both Urdu and English.

## Requirements
The Hamara Internet app is made using React Native, as a result you will need to install Node and React Native CLI. Once cloned locally, cd to project root and run ```npm install```

## Launch Android app
To run the Hamara Internet app locally, in a Terminal window pointed at the project root type ```react-native run-android``` You will need to have an Android device (version 4+) connected or an emulator open (Genymotion is recommended).



### Notes
#### iOS instructions
The Hamara Internet app does not have a planned iOS release yet so instructions for running an iOS version are not available. However, running ```react-native run-ios``` should work as expected.

#### Troubleshooting
Solutions to common errors:
- Check there are no hyphens in the app name, replace any "hamara-internet-app" names with "hamarainternetapp"
- Change to Java version 1.8.0
- Ensure you have ANDROID_HOME env variable set correctly; it should point to your sdk directory (e.g. Users/computerName/Library/Android/sdk)
- Ensure your PATH env variable is set correctly; should point to the tools and platform-tools folders within your sdk directory
- Ensure your JAVA_HOME env variable is set and correctly reflects your Java version (e.g. $(usr/libexec/java_home -v 1.8))
