import { Module } from "vuex";
import { ProfileState, Profile } from "./types";
import { getters } from "@/store/profile/getters";
import { actions } from "@/store/profile/actions";
import { mutations } from "@/store/profile/mutations";
import { RootState } from "../types";

export const state: ProfileState = {
  profile: {} as Profile,
  status: {
    error: false,
    loading: false,
    success: false
  }
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
