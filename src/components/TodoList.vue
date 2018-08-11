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
            <input type="checkbox" 
                   :checked="todo.completed"
                   />
            <label>{{todo.title}}</label>
            <button class="close" 
                    @click="executeDelete(todo.id)"
                    >
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
  @Action('Delete') Delete!: ({ id }: { id: number }) => void; // map this.Add() to this.$store.dispatch('Add');
  @State('todos') Todos!: Array<ITodo>;

  executeAdd() {
    this.Add({ value: this.inputValue });
    console.log('state: ', this.Todos);
  }

  executeDelete(id: number) {
    console.log('id: ', id);
    this.Delete({ id });
  }
}
</script>

<style scoped lang="scss">
.todo {
  .list-group-item {
    input {
      margin-right: 0.5rem;
    }
    input:checked + label {
      text-decoration: line-through;
    }
  }
  .close {
    margin-top: 0.13rem;
  }
}
</style>
