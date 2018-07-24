<template>
  <div class="home">
    <HelloWorld msg="Welcome to Vue Todo"/>
    <TodoList :todos="todos"></TodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import HelloWorld from '@/components/HelloWorld.vue';
import TodoList from '@/components/TodoList.vue';
import ITodo from '../model/todo.interface';

@Component({
  components: {
    HelloWorld,
    TodoList
  }
})
export default class Home extends Vue {
  @State('todos') todos!: Array<ITodo>;
}
</script>
