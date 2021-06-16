<template>
	<div class="page-signup">
		<h1>Create a New Account</h1>
		<form @submit.prevent="signUp" class="signup-form">
			<input
				type="text"
				v-model="email"
				class="input"
				placeholder="Email Address"
				required="required"
			/>
			<input
				type="password"
				v-model="password"
				class="input"
				placeholder="Password"
				required="required"
			/>
			<button class="button">Sign Up!</button>
			<button class="button" type="button">
				<router-link to="/login"> Back </router-link>
			</button>
		</form>
	</div>
</template>
<script>
import firebase from 'firebase';
import { db } from '@/db'

export default {
	name: 'signup',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	created() {
		db.collection('users')
			.get()
			.then(querySnapshot => {
				const documents = querySnapshot.docs.map(doc => doc.data())
				documents.forEach(doc => {
					console.log(doc);
				})
			})
	},
	methods: {
		signUp() {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
					// db.collection('users')
					// 	.add({
					// 		email: this.email
					// 	})
					this.$router.replace('/login')
					})
				.catch(function (error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					if (errorCode == 'auth/weak-password') {
						alert('The password is too weak.');
					} else {
						alert(errorMessage);
					}
					console.log(error);
				});
		},
	},
};
</script>
