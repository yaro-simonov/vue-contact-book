<template>
  <div class="contacts">
    <div v-for="(contact, idx) in contacts" :key="contact.id" class="contact">
      <div class="contact__row main-row">
        <h2 class="contact__heading">{{contact.title}}</h2>
        <router-link
          class="contact__link"
          :to="'/contact/' + contact.id"
          exact
          @click.native="deleteOpenReset(idx)"
          active-class="active"
        >Edit</router-link>
        <button @click="deleteOpen(idx)" v-if="!contact.deleteOpen" class="contact__delete">✖</button>
      </div>
      <div class="contact__row delete-row" v-if="contact.deleteOpen">
        <p class="contact__delete-text">Delete this Contact?</p>
        <button @click="deleteContact(idx)" class="contact__delete">YES</button>
        <button @click="deleteOpen(idx)" class="contact__cancel">Cancel</button>
      </div>
      <div v-if="contact.items.length" class="contact__items">
        <div v-for="(item, idx) in contact.items" :key="idx" class="contact__row">
          <p><strong>{{item.title}}:</strong> {{item.value}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  data: () => ({
  }),
  computed: {
    contacts() {
      return this.$store.getters.contacts
    }
  },
  methods: {
    deleteOpen(idx) {
      this.$store.dispatch('deleteOpen', idx)
    },
    deleteOpenReset(idx) {
      this.$store.dispatch('deleteOpenReset', idx)
    },
    deleteContact(idx) {
      this.$store.dispatch('deleteContact', idx)
    }
  }
}
</script>

<style lang="scss" scoped>

.contact {
  border: 1px solid #e0e0e0;
  border-left: 5px solid #46bd87;
  margin-bottom: 15px;
  transition-duration: .3s;
  &:last-child {
    margin-bottom: 0;
  }
  &__row {
    display: flex;
    align-items: center;
    padding: 5px;
  }
  &__delete-text {
    margin-left: auto;
  }
  &__link {
    margin-left: auto;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
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
  &__delete {
    color: #f76060;
    border: none;
    padding: 5px;
    font-weight: 700;
    background-color: #fff;
    min-width: 34px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 15px;
    transition-duration: .3s;
    border: 1px solid #e0e0e0;
    &:hover {
      background-color: #f76060;
      color: #fff;
      border: 1px solid #f76060;
    }
    &:active {
      transform: translateY(2px);
    }
    &:focus {
      outline-color: #f76060;
    }
  }
  &__cancel {
    color: #000;
    border: none;
    padding: 5px;
    font-weight: 700;
    background-color: #fff;
    min-width: 34px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 15px;
    transition-duration: .3s;
    border: 1px solid #e0e0e0;
    &:hover {
      background-color: #46bd87;
      color: #fff;
      border: 1px solid #46bd87;
    }
    &:active {
      transform: translateY(2px);
    }
    &:focus {
      outline: none;
    }
  }
  &__items {
    border-top: 5px solid #46bd87;
  }
}


</style>