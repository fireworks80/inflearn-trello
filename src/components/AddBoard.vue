<template>
  <Modal>
    <header slot="header">
      <h2>Add Board</h2>
    </header>
    <form slot="body" @submit.prevent="onSubmit">
      <p>
        <label for="board-name">board name</label>
        <input type="text" v-model="boardName" id="board-name">
      </p>
    </form>
    <div class="modal-footer" slot="footer">
      <button @click.prevent="onSubmit">create board</button>
      <button class="btn-close" @click="onClose">close</button>
    </div>
  </Modal>
</template>

<script>
  import Modal from './Modal';
  export default {
    name: 'AddBoard',
    components: { Modal },
    data() {
      return {
        boardName: ''
      };
    },
    methods: {
      onClose() {
        this.$emit('close');
      },
      onSubmit() {
        this.$emit('submit', this.boardName);
        this.$emit('close');
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