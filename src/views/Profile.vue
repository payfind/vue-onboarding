<template>
	<v-container grid-list-xs>
		<v-snackbar color="success" v-model="_success" top right>
			{{_success}}
		</v-snackbar>

		<v-progress-linear :indeterminate="status.loading"></v-progress-linear>
		<v-layout row wrap>
			<v-flex xs12>
				<v-text-field label="Id" v-model="model.id"></v-text-field>
			</v-flex>
			<v-flex xs12>
				<v-text-field label="Name" v-model="model.name"></v-text-field>
			</v-flex>
			<v-flex xs12>
				<v-text-field label="Surname" v-model="model.surname"></v-text-field>
			</v-flex>
			<v-flex xs12>
				<v-text-field label="Tel" v-model="model.tel"></v-text-field>
			</v-flex>
			<v-flex xs12 class="text-xs-right">
				<v-btn color="success" @click="updateProfile(model)">Save</v-btn>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Status } from "@/store/profile/types";

const profileModule = namespace("profile");

@Component({})
export default class Profile extends Vue {
  @profileModule.Action fetchProfile!: () => void;
  @profileModule.Action updateProfile!: (data: Profile) => void;
  @profileModule.Action clearStatus!: () => void;
  @profileModule.State profile!: Profile;
  @profileModule.State status!: Status;

  private clickedUser = "";
  private model = {} as Profile;

  @Watch("profile", { deep: true })
  onProfileLoaded(val: Profile) {
    this.model = this.profile;
  }

  mounted() {
    this.fetchProfile();
  }

  get _success() {
    return this.status.success;
  }

  set _success(value) {
    if (value === true) return;
    this.clearStatus();
  }
}
</script>

<style scoped lang="stylus">
.btn {
  width: 100px;
  height: 50px;
  margin-bottom: 10px;
}
</style>
