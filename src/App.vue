<template>
  <div id="app">
    <NavBar />
    <router-view db="test"/>
  </div>
</template>

<script>
import { db, storage } from './config/firebase';
import NavBar from './components/NavBar';

export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>

<style>
body, h1, h2, h3{
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
