import Home from '@/views/Home/Home.vue';
import About from '@/views/About/About.vue';
import Todo from '@/views/Todo/Todo.vue';

const router = {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
};

export default router;
