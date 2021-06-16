<template>
	<div class="page-profile">
		<header class="profile-header">
			<h1>{{ user.data.email }}</h1>
		</header>
		<div class="profile-data">
			<table>
				<tbody>
					<tr v-for="(data, idx) in user.data" :key="data">
						<td>
							<strong>{{ idx }}</strong>
						</td>
						<td>{{ data }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="profile-form">
			<form>
				<div class="input">
          <label for="">First Name</label>
          <input v-model="firstName" type="text" />
          </div>
				<div class="input">
          <label for="">Last Name</label>
          <input v-model="lastName" type="text" />
          </div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Profile',
	data() {
		return {
			firstName: '',
			lastName: '',
		}
	},
	computed: {
		// map `this.user` to `this.$store.getters.user`
		...mapGetters({
			user: 'user',
		}),
	},
};
</script>
<style scoped lang="scss">
.profile-data {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
