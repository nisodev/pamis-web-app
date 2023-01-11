import axios from "axios";

export default {
  state: {
    config: {
      ClientSetting: {
        logo: "",
      },
    },
  },
  getters: {
    config: (state) => state.config,
  },
  mutations: {
    setConfig(state, config) {
      state.config = config;
    },
  },
  actions: {
    async getConfig({ commit }) {
      const { data } = await axios.get("/cms/getconfig");
      commit("setConfig", data.data);
    },
  },
};
