<template>
  <nav class="left-side-menu">
    <router-link to="/lessons/lesson/1">Lesson 1</router-link>
    <router-link to="/lessons/lesson/2">Lesson 2</router-link>
    <router-link to="/lessons/lesson/3">Lesson 3</router-link>
  </nav>
</template>

<script>
export default {
  name: 'LeftSideMenu',
};
</script>

<style scoped>
/* Стили для LeftSideMenu */
nav {
  display: flex;
  flex-direction: column;
  background-color: #eee;
  padding: 10px;
  border-radius: 5px;
}

router-link {
  display: block;
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;
}

router-link:hover {
  color: #007bff;
}
</style>
