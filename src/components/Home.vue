<template>
  <div>
    <h1>Persnal Boards</h1>
    <div>
      <ul class="board-list">
        <li class="board-item" v-for="board in boards" :key="board.id" ref="boardItem"  :data-bgColor="board.bgColor">
          <router-link :to="`/b/${board.id}`"><em>{{board.title}}</em></router-link>
        </li>
      </ul>
      <button type="button" @click="addBoard">Create Board</button>
    </div>
    <AddBoard v-if="isShow" @close="isShow=false" @submit="onSubmit" />
  </div>
</template>

<script>
import { board } from "../api";
import AddBoard from './AddBoard';
export default {
  name: "Home",
  components: {
    AddBoard
  },
  data() {
    return {
      loading: false,
      boards: [],
      isShow: false
    };
  },
  created() {
    this.fetchData();
  },
  updated() {
    this.$refs.boardItem.forEach((el) => {
      el.style.backgroundColor = el.dataset.bgcolor;
    });
  },
  methods: {
    fetchData() {
      this.loading = true;
      board
        .fetch()
        .then(data => {
          this.boards = data.list;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    addBoard() {
      this.isShow = true;
    },
    onSubmit(boardName) {
      board.addBoard(boardName)
            .then(() => {
              this.fetchData();
            })
            .catch(err => (console.log(err)));
    }
  }
};
</script>

<style>
.board-list {
  display: flex;
  flex-flow: wrap;
  padding-left: 0;
  list-style: none;
}

.board-item:nth-child(n + 2) {
  margin-left: 10px;
}

.board-item a {
  display: block;
  padding: 10px 30px;
  text-decoration: none;
}
</style>