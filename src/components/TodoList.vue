import { Component } from 'vue-property-decorator';
<template>
  <div class="container">
    <div class="todo-list">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TodoList extends Vue {}
</script>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
</style>
