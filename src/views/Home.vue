<template>
  <div class="home">
    <HelloWorld msg="Welcome to Vue Todo"/>
    <TodoList :todos="$store.state.todos"></TodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import TodoList from '@/components/TodoList.vue';

@Component({
  components: {
    HelloWorld,
    TodoList
  }
})
export default class Home extends Vue {}
</script>
