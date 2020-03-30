<template>
  <Modal>
    <header slot="header">
      <h2>Add Board</h2>
    </header>
    <form slot="body" @submit.prevent="addBoard">
      <p>
        <label for="board-name">board name</label>
        <input type="text" ref="input" v-model="boardName" id="board-name">
      </p>
    </form>
    <div class="modal-footer" slot="footer">
      <button @click.prevent="addBoard">create board</button>
      <button type="button" class="btn-close" @click="SET_IS_ADD_BOARD(false)">close</button>
    </div>
  </Modal>
</template>

<script>
  import Modal from './Modal';
  import { mapMutations, mapActions } from 'vuex';
  export default {
    name: 'AddBoard',
    components: { Modal },
    data() {
      return {
        boardName: ''
      };
    },
    mounted() {
      return this.$refs.input.focus();
    },
    methods: {
      ...mapMutations([
        'SET_IS_ADD_BOARD'
      ]),
      ...mapActions([
        'ADD_BOARD',
        'FETCH_BOARDS'
      ]),
      addBoard() {
        this.ADD_BOARD({title: this.boardName})
            .then(() => {
              this.FETCH_BOARDS();
            });
        this.SET_IS_ADD_BOARD(false);
      }
    }
  }
</script>

<style scoped>
  .modal-footer {
    overflow: hidden;
  }
  .modal-footer button:last-child {
    float: right;
  }
</style>