<template>
    <footer>
        <p>My Footer</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
/* Стили для Footer */
footer {
    min-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    padding: 10px 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    color: white;
}
p {
    margin: 0;
    padding: 0;
}
</style>
