// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeSection from '@/sections/HomeSection.vue';
import LessonsSection from '@/sections/LessonsSection.vue';
import TestSection from '@/sections/TestSection.vue';
import LessonsRandomSection from "@/sections/LessonsRandomSection.vue";

import Lesson1 from '@/components/lessons/Lesson1.vue';
import Lesson2 from '@/components/lessons/Lesson2.vue';
import Lesson3 from '@/components/lessons/Lesson3.vue';

const routes = [
  { path: '/', component: HomeSection },
  { path: '/lessons', component: LessonsSection, children: [
    { path: '',         component: LessonsRandomSection }, // Default component for /lessons
    { path: 'lesson/1', component: Lesson1 },
    { path: 'lesson/2', component: Lesson2 },
    { path: 'lesson/3', component: Lesson3 },
  ] },
  { path: '/test', component: TestSection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
