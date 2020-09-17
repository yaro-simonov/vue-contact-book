<template>
  <nav class="navbar">
    <h1>Contact Book</h1>
    <router-link
      class="navbar__backlink"
      to="/"
      exact
      active-class="active"
      v-if="this.$route.path !== '/'"
      >🠔 Back</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    isActive: false
  })

}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  &__backlink {
    margin-left: 30px;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid #fff;
    padding: 5px;
    transition-duration: .3s;
    &:hover {
      background-color: #fff;
      color: #46bd87;
    }
    &:active {
      transform: translateY(2px);
    }
  }
}
</style>