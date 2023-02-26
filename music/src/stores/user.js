import { defineStore } from 'pinia';
import { auth, usersCollection } from '@/includes/firebase';

export default defineStore('user', {

  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      await auth.createUserWithEmailAndPassword(
        values.email_field,
        values.password_field
      );

      await usersCollection.add({
        name: values.name_field,
        email: values.email_field,
        age: values.age_field,
        country: values.country_field,
      });

      this.userLoggedIn = true
    }
  }
});
