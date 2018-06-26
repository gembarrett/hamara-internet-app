# Hamara Internet app
The Hamara Internet app aims to provide digital security training advice for people facing harassment, and is a complement to the workshops of the Digital Rights Foundation. This app will be available on Android in both Urdu and English.

## Requirements
The Hamara Internet app is made using React Native, as a result you will need to install Node and React Native CLI. Once cloned locally, cd to project root and run ```npm install```. This app is built to support Android versions from 4 (Kit Kat) upwards, below that is untested and may have issues.

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

#### Phone override
When a dash is in the middle of English numbers inside a block of text that is primarily in a right-to-left language, the numbers are swapped around. This can cause issues with text orientation and particularly with react-native-autolink. Therefore, add the following code to react-native-autolink/matchers.js and change the regex to suit your needs.

``` javascript  
{
    id: 'phone',
    regex: /[0-9]{4}[\.-][0-9]{5}/g,
    Match: Autolinker.Util.extend(Autolinker.match.Match, {
      constructor(cfg) {
        Autolinker.match.Match.prototype.constructor.call(this, cfg);

        this.phone = cfg.phone;
      },
      getType() {
        return 'phone';
      },
      getPhone() {
        return this.phone;
      },
      getAnchorHref() {
        return this.phone;
      },
      getAnchorText() {
        return this.phone;
      },
    }),
  }
```
