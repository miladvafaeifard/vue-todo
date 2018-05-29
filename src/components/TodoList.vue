<template>
  <div class="todo"> 
      <input type="text" v-model="field" placeholder="What your mind is saying ...">
      <button @click="Add()">Add</button>
      <ul>
        <li v-for="(todo, key, index) in this.$props.todos" :key="index">{{todo.title}}</li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Todo from '@/interfaces/todo.interface';

@Component({
  props: {
    todos: Array as () => Array<Todo>
  }
})
export default class TodoList extends Vue {
  private field = '';
  Add() {
    this.$store.state.field = this.field;
    this.$store.dispatch('Add');
  }
}
</script>

<style scoped lang="scss">
.todo {
  li {
    font-size: 2rem;
    color: #079abd;
  }
}
</style>
