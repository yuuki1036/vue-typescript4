<script setup lang="ts">
import { inject } from 'vue';
import { todoKey } from '../useTodo';

// 固有の文字列ではなくobject(InjectionKey)で取得する
const state = inject(todoKey)
if (!state) {
  throw new Error('state is undefined')
}

const {todos, addTodo} = state

</script>

<template>
  <div>
    <ul :style="{ listStyle: 'none' }">
      <li
        :style="{ backgroundColor: 'aliceblue', marginBottom: '10px' }"
        v-for="todo in todos"
      >{{ todo.title }}</li>
    </ul>
    <button @click="addTodo('add!')">Add</button>
  </div>
</template>

<style scoped>
</style>