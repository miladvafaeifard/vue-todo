<template>
    <li class="list-group-item">
        <input type="checkbox" 
               :checked="isDone" 
               :value="isDone" 
               @change="toggleCheck()"/>

        <label @click="enableEdit()" 
               v-if="!isEdit">
               {{todo.title}}
        </label>

        <input type="text" 
               class="edit-item form-control"
               v-model="title"
               value="todo.title"
               @keyup.enter="disableEdit()"
               @blur="disableEdit()"
               v-if="isEdit"  v-focus/>

        <button class="close"
                @click="deleteHandle(todo.id)"
                >
                  <span>X</span>
        </button>        
    </li>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import focus from '@/directives/focus';
import ITodo from '@/model/todo.interface';

@Component({
  props: {
    todo: Object as () => ITodo,
    // TODO: define param of id number as signature
    deleteHandle: Function as () => Function,
    updateHandle: Function as () => Function
  },
  directives: {
    focus
  }
})
export default class TodoItem extends Vue {
  isEdit: boolean = false;
  title: string = '';
  isDone: boolean = false;

  mounted() {
    this.isDone = this.$props.todo.completed;
    this.title = this.$props.todo.title;
  }

  private enableEdit() {
    this.isEdit = true;
  }

  private disableEdit() {
    this.isEdit = false;
    this.$props.updateHandle({
      id: this.$props.todo.id,
      title: this.title,
      completed: this.isDone
    });
  }

  private toggleCheck() {
    this.isDone = !this.isDone;
    this.$props.updateHandle({
      id: this.$props.todo.id,
      title: this.title,
      completed: this.isDone
    });
  }
}
</script>

<style scoped lang="scss">
.list-group-item {
  input {
    display: inline-block;
    margin-right: 0.5rem;
  }
  input:checked + label {
    text-decoration: line-through;
  }
}
.close {
  margin-top: 0.13rem;
}

.edit-item {
  width: 80%;
}
</style>
