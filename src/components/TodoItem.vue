<template>
    <li class="list-group-item">
        <input type="checkbox" :checked="todo.completed">
        <label>{{todo.title}}</label>
        <button class="close"
                @click="deleteHandle(todo.id)"
                >
                  <span>X</span>
        </button>
    </li>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ITodo from '@/model/todo.interface';

@Component({
  props: {
    todo: Object as () => ITodo,
    // TODO: define param of id number as signature
    deleteHandle: Function as () => Function,
  }
})
export default class TodoItem extends Vue {}
</script>

<style scoped lang="scss">
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
</style>