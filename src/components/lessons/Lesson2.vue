<template>
    <div>
      <h2>Lesson 2</h2>
      <p>This is the description for Lesson 2.</p>
      <p>Example: {{ example }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Lesson2',
    data() {
      return {
        example: 'Example content for Lesson 2',
      };
    },
  };
  </script>
  
  <style scoped>
  /* Стили для Lesson2 */
  </style>
  