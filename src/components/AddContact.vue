<template>
  <form @submit.prevent="submitContact" class="contact-form">
    <input v-model="title" type="text" class="contact-form__input" required placeholder="Contact Name">
    <button class="contact-form__button btn" type="submit">Add Contact</button>
  </form>
</template>

<script>
export default {
  name: 'AddContact',
  data: () => ({
    title: ''
  }),
  methods: {
    submitContact() {
      const contact = {
        title: this.title,
        id: Date.now(),
        items:[],
        deleteOpen: false
      }
      this.$store.dispatch('addContact', contact)
      this.title = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #46bd87;
  display: flex;
  &__input {
    flex-grow: 1;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    &:focus {
      outline-color: #46bd87;
    }
  }
  &__button {
    margin-left: 15px;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    padding: 5px;
    transition-duration: .3s;
    &:hover {
      color: #fff;
      background-color: #46bd87;
      border: 1px solid #46bd87;
    }
    &:active {
      transform: translateY(2px);
    }
    &:focus {
      outline-color: #46bd87;
    }
  }
}
</style>