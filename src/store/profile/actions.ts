import { RootState } from "@/store/types";
import { ActionTree } from "vuex";
import { ProfileState, Profile } from "./types";

export const actions: ActionTree<ProfileState, RootState> = {
  async fetchProfile({ commit }) {
    try {
      commit("loading");

      const sleep = (m: any) => new Promise(r => setTimeout(r, m));
      await sleep(2000);

      const response = await localStorage.getItem("profile");

      if (response) commit("setProfile", JSON.parse(response));
    } catch (error) {
      commit("error", "Failed To Fetch Profile");
    }
  },

  async updateProfile({ commit }, data: Profile) {
    try {
      commit("loading");

      const sleep = (m: any) => new Promise(r => setTimeout(r, m));
      await sleep(2000);

      localStorage.setItem("profile", JSON.stringify(data));

      commit("success", "Profile has been update!");
    } catch (error) {
      commit("error", "Failed To Fetch Profile");
    }
  },

async clearStatus({commit}) {
  commit("clearStatus")
}
};
