<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <Navbar />
      </div>
    </header>
    <div class="container main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import reset from '@/assets/reset.css'
import store from '@/store'

export default {
  store,
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Noto Sans', sans-serif;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 720px;
}
.main-content {
  padding-top: 30px;
  padding-bottom: 30px;
}
.header {
  background-color: #46bd87;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
.main-content {
  margin-top: 56px;
}
</style>
