import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/screens/Home';
import Students from '@/components/screens/Students';
import EditStudent from '@/components/screens/EditStudent';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/students',
      name: 'Students',
      component: Students,
    },
    {
      path: '/edit/:student_id',
      name: 'EditStudent',
      component: EditStudent,
    },
  ],
});
