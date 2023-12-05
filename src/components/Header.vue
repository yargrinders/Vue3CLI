<template>
    <nav class="navigation-menu">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/lessons" class="nav-link">Lessons list</router-link>
      <router-link to="/test" class="nav-link">Test page</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationMenu',
  };
  </script>
  
  <style scoped>

 
  /* Стили для NavigationMenu */
  nav {
    min-height: 25px;
  }
  .navigation-menu {
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    background-color: #333;
    padding: 10px 0;
  }
  
  .nav-link {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    transition: color 0.3s ease-in-out;
  }
  
  .nav-link:hover {
    color: #ffd700; /* Измените цвет при наведении по вашему вкусу */
  }
  </style>
  