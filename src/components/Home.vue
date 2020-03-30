<template>
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list" ref="boardList">
      <div class="board-item" v-for="b in boards" :key="b.id" 
        :data-bgcolor="b.bgColor" ref="boardItem">
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{b.title}}</div>
        </router-link>
      </div>
      <div class="board-item board-item-new">
        <a class="new-board-btn" href="" @click.prevent="addBoard">
          Create new board...
        </a>
      </div>
    </div>
    <AddBoard v-if="isAddBoard" />
  </div>
</template>

<script>
import AddBoard from './AddBoard'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  components: { AddBoard },
  data() {
    return {
      loading: false,
      error: '',
    }
  },
  created() {
    this.fetchData()
  },
  // 여러 저장소 속성이나 getter를 사용하면 반복적이고 장황해지므로
  // getter함수를 생성하는 mapState속성을 사용한다.
  // computed: {
  //   isAddBoard() {
  //     return this.$store.state.isAddBoard;
  //   }
  // },
  // ===========================
  // 이 상태는 다른 컴퓨티드 속성을 추가 할 수 없다.
  // mapState는 객체를 반환한다.
  // computed에 여려 계산된 속성을 사용하기 위해
  // 객체 전개 연산자를 이용하여 작성한다.
  // computed: mapState([
  //   'isAddBoard'
  // ]),
  computed: {
    ...mapState([
      'isAddBoard',
      'boards'
    ])
  },
  updated() {
    this.$refs.boardItem.forEach(el => {
      el.style.backgroundColor = el.dataset.bgcolor
    })
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD'
    ]),
    ...mapActions([
      'FETCH_BOARDS'
    ]),
    fetchData() {
      this.loading = true
      this.FETCH_BOARDS().finally(() => {
        this.loading = false
      });
    },
    addBoard() {
      // isAddBoard를 store -> state로 옮겼기때문에
      // mutation을 이용해서 상태 변이를 시켜야 한다.
      // this.showModal = true;
      this.SET_IS_ADD_BOARD(true);
    }
  }
}
</script>

<style>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item-new {
  background-color: #ddd;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0,0,0, .1);
  color: #666;
}
.board-item-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
}
.board-item a.new-board-btn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100px;
  width: inherit;
  color: #888;
  font-weight: 700;
}
</style>
