import { defineStore } from 'pinia';
import { auth, usersCollection } from '@/includes/firebase';

export default defineStore('user', {

  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(
        values.email_field,
        values.password_field
      );

      // add user to the users collection and set document id to the user's uid
      await usersCollection.doc(userCred.user.uid).set({
        name: values.name_field,
        email: values.email_field,
        age: values.age_field,
        country: values.country_field,
      });

      // update the user's display name in the auth service (not the db)
      await userCred.user.updateProfile({
        displayName: values.name_field,
      });

      this.userLoggedIn = true
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(
        values.email_field,
        values.password_field
      );

      // if previous block of code is successful, it proceeds to this line,
      // otherwise it throws an error and the code below is not executed 
      this.userLoggedIn = true
    }
  }
});
