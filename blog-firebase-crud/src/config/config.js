const config={
    apiKey:String(import.meta.env.REACT_APP_FIREBASE_API_KEY),
    authDomain:String(import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
    databaseURL:String(import.meta.env.REACT_APP_FIREBASE_DATABASE_URL),
    projectId:String(import.meta.env.REACT_APP_FIREBASE_PROJECT_ID),
    storageBucket:String(import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
    messagingSenderId:String(import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
    appId:String(import.meta.env.REACT_APP_FIREBASE_APP_ID),
    measurementId:String(import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID),
}

export default config