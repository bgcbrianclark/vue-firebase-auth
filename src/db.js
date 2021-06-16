'use strict'

import firebase from 'firebase/app'
import 'firebase/firestore'
import store from './store'

// Create a firebase config file
import fbConfig from './fbConfig'

// Get a Firestore instance
export const db = firebase
  .initializeApp(fbConfig)
  .firestore()

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
})

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })