<template>
  <div class="todo container">
      <div>
        <h1>Vue Todo</h1>
        <div class="input-group mb-3">
          <input type="text"
               class="form-control"
               v-model="inputValue"
               @keyup.enter="executeAdd()"
               placeholder="What your mind is saying ...">
          <div class="input-group-append">
            <button type="button" 
                  class="btn"
                  @click="executeAdd()">Add</button>
          </div>
        </div>
      </div>
      <TodoItem v-for="(todo, key, index) in this.todos"
                :key="index" 
                :todo="todo" 
                :deleteHandle="executeDelete"
                :updateHandle="executeUpdate"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import ITodo from '@/model/todo.interface';
// @ts-ignore
import TodoItem from '@/components/TodoItem';
import { HttpService } from '@/core/services/http-service';

@Component({
  components: {
    TodoItem
  }
})
export default class Todo extends Vue {
  private inputValue = '';
  @Action('Add') Add!: ({ value }: { value: string }) => void; // map this.Add() to this.$store.dispatch('Add');
  @Action('Delete') Delete!: ({ id }: { id: number }) => void; // map this.Add() to this.$store.dispatch('Add');
  @Action('Update') Update!: ({ todo }: { todo: ITodo }) => void;
  @State('todos') todos!: Array<ITodo>;

  mounted() {
    this.$store.dispatch('LoadTodos');
  }

  executeAdd() {
    if (this.inputValue) {
      this.Add({ value: this.inputValue });
      this.inputValue = '';
    }
  }

  executeDelete(id: number) {
    this.Delete({ id });
  }

  executeUpdate(todo: ITodo) {
    this.Update({ todo });
  }
}
</script>

<style scoped lang="scss">
$c-vue-green: #42b983;

input {
  &.form-control:focus {
    box-shadow: -3px 0px 5px 0.1rem rgba(66, 185, 131, 0.555);
  }
}
button {
  color: white;
  background-color: $c-vue-green;
  border-color: $c-vue-green;
}
</style>
