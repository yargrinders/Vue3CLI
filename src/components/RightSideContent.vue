<template>
  <div class="right-side-content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'RightSideContent',
};
</script>

<style scoped>
/* Стили для RightSideContent */
.right-side-content {
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  background-color: #f8f9fa;
}
</style>
