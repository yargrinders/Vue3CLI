<template>
  <section>
    <LeftSideMenu />
    <RightSideContent />
  </section>
</template>

<script>
import LeftSideMenu from '@/components/LeftSideMenu.vue';
import RightSideContent from '@/components/RightSideContent.vue';

export default {
  name: 'LessonsSection',
  components: {
    LeftSideMenu,
    RightSideContent,
  },
};
</script>

<style scoped>
/* Стили для LessonsSection */
section {
  display: flex;
}
</style>
