<template>
  <div id="navbar">
    <h3>Home</h3>
    <h3>Students</h3>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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
#navbar > h3{
  margin-left: 10px;
  margin-right: 10px;
}
</style>
