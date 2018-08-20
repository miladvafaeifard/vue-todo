<template>
    <div class="todo container">
        <div>
            <h1>Vue Todo</h1>
            <div class="input-group mb-3">
                <input type="text"
                       class="form-control"
                       :value="field"
                       @keyup.enter="executeAdd"
                       @keyup="executeFilter"
                       placeholder="What your mind is saying ...">
                <div class="input-group-append">
                    <button type="button"
                            class="btn"
                            @click="executeAdd(field)">Add
                    </button>
                </div>
            </div>
        </div>
        <TodoItem v-for="(todo) in todos"
                  :key="todo.id"
                  :todo="todo"
                  :deleteHandle="executeDelete"
                  :updateHandle="executeUpdate"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

import ITodo from '@/model/todo.interface';
// @ts-ignore
import TodoItem from '@/components/TodoItem';

@Component({
  components: {
    TodoItem
  }
})
export default class Todo extends Vue {
  private timer: number = 0;

  @Action('Add') Add!: () => void;
  @Action('Filter') Filter!: () => void;
  @Action('Delete') Delete!: ({ id }: { id: number }) => void;
  @Action('Update') Update!: ({ todo }: { todo: ITodo }) => void;

  @Getter('filteredTodos') filteredTodos!: Array<ITodo>;
  @Getter('field') field!: string;

  @State('todos') allTodos!: Array<ITodo>;

  mounted() {
    this.$store.dispatch('LoadTodos');
  }

  executeFilter(e: any) {
    this.$store.state.field = e.target.value;
    clearTimeout(this.timer);
    if (this.field.length > 3) {
      this.timer = window.setTimeout(() => {
        this.Filter();
      }, 500);
    } else if (this.field.length === 0) {
      this.Filter();
    }
  }

  executeAdd() {
    this.Add();
  }

  executeDelete(id: number) {
    this.Delete({ id });
  }

  executeUpdate(todo: ITodo) {
    this.Update({ todo });
  }

  get todos() {
    return this.filteredTodos ? this.filteredTodos : this.allTodos;
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
