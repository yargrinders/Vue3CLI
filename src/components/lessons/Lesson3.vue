<template>
    <div>
      <h2>Lesson 3</h2>
      <p>This is the description for Lesson 3.</p>
      <p>Example: {{ example }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Lesson3',
    data() {
      return {
        example: 'Example content for Lesson 3',
      };
    },
  };
  </script>
  
  <style scoped>
  /* Стили для Lesson3 */
  </style>
  