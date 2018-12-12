import { MutationTree } from "vuex";
import { ProfileState } from "./types";

export const mutations: MutationTree<ProfileState> = {
  setProfile(state, payload) {
    state.profile = payload;
    state.status.loading = false;
  },

  error(state, payload) {
    state.status.error = payload;
    state.status.loading = false;
  },

  loading(state) {
    state.status.loading = true;
  },

  success(state, payload) {
    state.status.loading = false;
    state.status.success = payload;
  },
  clearStatus(state) {
    state.status.success = false;
  }
};
