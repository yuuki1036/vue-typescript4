<script setup lang="ts">
import { provide } from 'vue';
import TodoList from './components/TodoList.vue';
import {todos, todoKey} from './useTodo';

// アプリ間で使用する変数, 関数
provide(todoKey, todos)

</script>

<template>
<TodoList/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
