<template>
  <div>
    <Header listName="My new todo list" />
    <main>
      <TodoList>
        <!-- <TodoCard
          v-for="{ id, title, completed } in todos"
          :key="id"
          :id="id"
          :title="title"
          :completed="completed"
        /> -->
        <TodoRow
          v-for="{ id, title, completed } in todos"
          :key="id"
          :id="id"
          :title="title"
          :completed="completed"
        />
      </TodoList>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ITodo, IApi } from '@/types'
import { Api } from '@/api/Api'
import TodoList from '@/components/TodoList.vue'
import Header from '@/components/Header.vue'
// import TodoCard from '@/components/TodoCard.vue'
import TodoRow from '@/components/TodoRow.vue'

@Component({
  components: { Header, TodoList, TodoRow }
})
export default class Home extends Vue implements IApi {
  todos: ITodo[] = []

  async mounted() {
    this.todos = await this.fetch()
  }

  async fetch(): Promise<ITodo[]> {
    const api = new Api()
    return await api.fetch('todos')
  }
}
</script>

<style lang="scss">
.container {
  padding: 1.5rem;
}
</style>
