<template>
    <div>
      <h2>Lesson 1</h2>
      <p>This is the description for Lesson 1.</p>
      <p>Example: {{ example }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Lesson1',
    data() {
      return {
        example: 'Example content for Lesson 1',
      };
    },
  };
  </script>
  
  <style scoped>
  /* Стили для Lesson1 */
  </style>
  