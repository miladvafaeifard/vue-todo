<template>
    <li class="list-group-item">
        <input type="checkbox" 
               :checked="isDone" 
               :value="isDone" 
               @change="toggleCheck()"/>

        <label @click="enableEdit()" 
               v-if="!isEdit">
               {{todo.task}}
        </label>

        <input type="text" 
               class="edit-item form-control"
               v-model="task"
               value="todo.task"
               @keyup.enter="disableEdit()"
               @blur="disableEdit()"
               v-if="isEdit"  v-focus/>

        <button class="close"
                @click="deleteHandle(todo._id)"
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
  task: string = '';
  isDone: boolean = false;

  mounted() {
    this.isDone = this.$props.todo.completed;
    this.task = this.$props.todo.task;
  }

  private enableEdit() {
    this.isEdit = true;
  }

  private disableEdit() {
    this.isEdit = false;
    this.updateModifiedTask();
  }

  private toggleCheck() {
    this.isDone = !this.isDone;
    this.updateModifiedTask();
  }

  private updateModifiedTask(){
    this.$props.updateHandle({
      _id: this.$props.todo._id,
      task: this.task,
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
