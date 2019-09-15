//environment.js
var environments = {
    staging: {
      FIREBASE_API_KEY: "AIzaSyATht3H7SJ-7ctuEo04CmmNL0OLM09E3Ns",
      FIREBASE_AUTH_DOMAIN: "splitit-d6de2.firebaseapp.com",
      FIREBASE_DATABASE_URL: "https://splitit-d6de2.firebaseio.com",
      FIREBASE_PROJECT_ID: 'splitit-d6de2',
      FIREBASE_STORAGE_BUCKET: 'splitit-d6de2.appspot.com',
      FIREBASE_MESSAGING_SENDER_ID: '774946483709',
      GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyC97jCRv8R6iXWOViPkGzcCsRkDyzO2hr8'
    },
    production: {
      // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
    }
  };
  
  function getReleaseChannel() {
    let releaseChannel = Expo.Constants.manifest.releaseChannel;
    if (releaseChannel === undefined) {
      return 'staging';
    } else if (releaseChannel === 'staging') {
      return 'staging';
    } else {
      return 'staging';
    }
  }
  function getEnvironment(env) {
    console.log('Release Channel: ', getReleaseChannel());
    return environments[env];
  }
  var Environment = getEnvironment(getReleaseChannel());
  export default Environment;