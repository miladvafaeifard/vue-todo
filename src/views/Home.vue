<template>
  <div class="home">
    <TodoList :todos="todos"></TodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import TodoList from '@/components/TodoList.vue';
import ITodo from '../model/todo.interface';

@Component({
  components: {
    TodoList
  }
})
export default class Home extends Vue {
  @State('todos') todos!: Array<ITodo>;
}
</script>
