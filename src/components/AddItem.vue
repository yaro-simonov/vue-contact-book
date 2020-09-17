<template>
  <form @submit.prevent="submitItem(id)" class="contact-form">
    <div class="contact-form__fields">
      <input v-model="title" type="text" class="contact-form__input" required placeholder="Title">
      <input v-model="value" type="text" class="contact-form__input" required placeholder="Value">
    </div>
    <button class="contact-form__button btn" type="submit">Add Item</button>
  </form>
</template>

<script>
export default {
  name: 'AddItem',
  props: ['id'],
  data: () => ({
    title: '',
    value: ''
  }),
  methods: {
    submitItem(id) {
      const item = {
        title: this.title,
        value: this.value,
        newTitle: '',
        newValue: '',
        deleteOpen: false,
        resetOpen: false
      }
      this.$store.dispatch('addItem', {item, id})
      this.title = this.value = ''
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
  &__fields {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  &__input {
    border: 1px solid #e0e0e0;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 5px;
    &:last-child {
      margin-bottom: 0;
    }
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
    align-self: flex-start;
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