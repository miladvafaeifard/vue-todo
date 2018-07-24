<template>
  <div class="todo">
      <input type="text" v-model="inputValue" placeholder="What your mind is saying ...">
      <button @click="executeAdd()">Add</button>
      <ul>
        <li v-for="(todo, key, index) in this.$props.todos" :key="index">{{todo.title}}</li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import ITodo from '@/model/todo.interface';

@Component({
  props: {
    todos: Array as () => Array<ITodo>
  }
})
export default class TodoList extends Vue {
  private inputValue = '';
  @Action('Add') Add!: ({ value }: { value: string }) => void; // map this.Add() to this.$store.dispatch('Add');
  @State('todos') Todos!: Array<ITodo>;

  executeAdd() {
    this.Add({ value: this.inputValue });
    console.log('state: ', this.Todos);
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
