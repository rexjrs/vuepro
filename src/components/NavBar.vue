<template>
  <div id="navbar">
    <router-link to="/">
      <h3>Home</h3>
    </router-link>
    <router-link to="/students">
      <h3>Students</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>
<style>
#navbar {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #CCC;
  box-shadow: 0px 0px 5px 0px #CCC;
  display: flex;
  align-items: center;
  justify-content: center;
}
#navbar > a{
  text-decoration: none;
  color: inherit;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
