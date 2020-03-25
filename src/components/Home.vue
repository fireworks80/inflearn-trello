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
    <AddBoard v-if="isAddBoard" @close="isAddBoard=false" @submit="onSubmit" />
  </div>
</template>

<script>
import { board } from "../api";
import AddBoard from './AddBoard';
import { mapState } from 'vuex';
export default {
  name: "Home",
  components: {
    AddBoard
  },
  data() {
    return {
      loading: false,
      boards: []
    };
  },
  created() {
    this.fetchData();
  },
  // 여러 스토어의 속성이나 getter를 사용하게 되는 경우 반복되고 장황해 질수 있다.
  // vuex에서는 getter함수를 생성하는 mapState 핼퍼 함수를 지원한다.
  // computed: {
  //   isAddBoard() {
  //     return this.$store.state.isAddBoard;
  //   }
  // },
  // =============================
  // mapState함수를 이렇게 사용하면 다른 컴퓨티드 속성을 사용할 수 없다.
  // mapState는 객체를 반환한다.
  // 최종 객체를 computed에 전달하도록 여러 객체를 하나로 병합하는 객체 전개 연사자를 사용한다.
  // computed: mapState([
  //   'isAddBoard'
  // ]),
  computed: {
    ...mapState([
      'isAddBoard'
    ])
    // 다른 computed속석을 추가 할 수 있다.
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
      // state속성을 컨트롤 하므로 mutation을 이용해야 한다.
      // this.isAddBoard = true;
      
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