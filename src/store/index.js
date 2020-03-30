import Vue from 'vue';
import Vuex from 'vuex';
import * as api from '../api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: []
  },
  mutations: {
    SET_IS_ADD_BOARD(state, toggle) {
      state.isAddBoard = toggle;
    },
    SET_BOARDS(state, list) {
      state.boards = list;
    }
  },
  actions: {
    FETCH_BOARDS({commit}) {
      return api.board.fetch()
                .then(datas => {
                  commit('SET_BOARDS', datas.list)
                });
    },
    ADD_BOARD(_, {title}) {
      return api.board.addBoard(title);
    }
  }
});

export default store;