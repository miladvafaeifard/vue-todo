<template>
  <div class="todo container">
    <div>
      <h1>Vue Todo</h1>
      <div class="input-group mb-3">
        <input type="text" 
               class="form-control"
               v-model="inputValue" 
               placeholder="What your mind is saying ...">
        <div class="input-group-append">
          <button type="button" 
                  class="btn btn-primary" 
                  @click="executeAdd()">Add</button>
        </div>
      </div>
    </div>
      <ul class="list-group">
        <li class="list-group-item" 
            v-for="(todo, key, index) in this.$props.todos" :key="index"
            >
            <label>
                <input type="checkbox" :checked="todo.completed">{{todo.title}}
            </label>
            <button class="close">
              <span>X</span>
            </button>
        </li>
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
  .list-group-item {
    label {
      input {
        margin-right: 0.5rem;
      }
    }
    .close {
      margin-top: 0.13rem;
    }
  }
}
</style>
