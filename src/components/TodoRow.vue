<template functional>
  <div class="todo-list__row">
    <span>{{ props.id }}:</span>
    <span :class="{ 'todo-list__row-completed': props.completed }">
      {{ props.title }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { Component, Vue, Prop } from 'vue-property-decorator'
// import { ITodo } from '@/types'

@Component
export default class TodoRow extends Vue {
  // @Prop({ required: true }) todo!: ITodo
}
</script>

<style lang="scss">
.todo-list {
  &__row {
    width: 100%;
    text-align: left;
    color: #4169e1;
    &--completed {
      text-decoration: line-through;
      color: #2e8b57;
    }
  }
}
</style>
