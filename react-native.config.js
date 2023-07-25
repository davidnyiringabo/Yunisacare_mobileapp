module.exports = {
  assets: ['./src/assets/fonts'], // Add this line to link the font folder
  ios: {
    project: './path/to/your.xcodeproj',
  },
  android: {
    sourceDir: './path/to/your/android/app',
  },
  // Define the font families used in the app
  fonts: {
    Poppins: './assets/fonts/Poppins-Black.ttf.ttf',
    // MyCustomFontBold: './assets/fonts/MyCustomFont-Bold.ttf',
  },
};
