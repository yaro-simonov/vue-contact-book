<template>
  <div class="contacts">
    <form @submit.prevent="submitItem(id, idx, item.newTitle, item.newValue)" v-for="(item, idx) in contact.items" :key="idx" class="contact">
      <div class="contact__row flex">
        <p><strong>Title:</strong> {{item.title}}</p>
        <input class="contact__input" v-model="item.newTitle" placeholder="New Title" type="text">
      </div>
      <div class="contact__row flex">
        <p><strong>Value:</strong> {{item.value}}</p>
        <input class="contact__input" v-model="item.newValue" placeholder="New Value" type="text">
      </div>
      <div class="contact__row delete-row">
        <button type="submit" v-if="!item.deleteOpen && !item.resetOpen" :disabled="item.newValue == '' && item.newTitle == ''" class="contact__btn save" :class="{ disabled: item.newValue == '' && item.newTitle == '' }">Save</button>
        <button v-if="(!item.deleteOpen && !item.resetOpen) && (item.oldValue || item.oldTitle)"  @click.prevent="resetOpen(id, idx)" class="contact__btn return">⭯</button>
        <button v-if="!item.deleteOpen && !item.resetOpen" @click.prevent="deleteOpenItem(id, idx)" class="contact__btn delete">✖</button>
        <p v-if="item.deleteOpen" class="contact__delete-text">Delete this Item?</p>
        <button v-if="item.deleteOpen" @click.prevent="deleteItem(id, idx)" class="contact__btn yes-btn">YES</button>
        <button v-if="item.deleteOpen" @click.prevent="deleteOpenItem(id, idx)" class="contact__cancel">Cancel</button>
        <p v-if="item.resetOpen" class="contact__delete-text">Reset last changes?</p>
        <button v-if="item.resetOpen" @click.prevent="resetItem(id, idx)" class="contact__btn yes-btn">YES</button>
        <button v-if="item.resetOpen" @click.prevent="resetOpen(id, idx)" class="contact__cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ItemsList',
  props: ['id'],
  data: () => ({
  }),
  computed: {
    contact() {
      return this.$store.getters.contactById(+this.$route.params.id)
    }
  },
  methods: {
    deleteOpenItem(id, idx) {
      this.$store.dispatch('deleteOpenItem', {id, idx})
    },
    submitItem(id, idx) {
      let newTitle = this.contact.items[idx].newTitle
      let newValue = this.contact.items[idx].newValue
      if (this.contact.items[idx].newTitle == '') {
        newTitle = this.contact.items[idx].title
      }
      if (this.contact.items[idx].newValue == '') {
        newValue = this.contact.items[idx].value
      }
      this.$store.dispatch('updateItem', {id, idx, newTitle, newValue})
      this.contact.items[idx].newTitle = this.contact.items[idx].newValue = ''
    },
    deleteItem(id, idx) {
      this.$store.dispatch('deleteItem', {id, idx})
    },
    resetOpen(id, idx) {
      this.$store.dispatch('resetOpen', {id, idx})
    },
    resetItem(id, idx) {
      this.$store.dispatch('resetItem', {id, idx})
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
  &__input{
    border: 1px solid #e0e0e0;
    margin-bottom: 5px;
    padding: 5px;
    align-self: stretch;
    border-radius: 5px;
    &:last-child {
      margin-bottom: 0;
    }
    &:focus {
      outline-color: #46bd87;
    }
  }
  &__row {
    display: flex;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid #e0e0e0;
    p {
      overflow-wrap: break-word;
      word-break: break-all;
    }
    &:last-child {
      border-bottom: none;
    }
    &.delete-row {
      border-bottom: none;
    }
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
    background-color: #fff;
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
  &__btn {
    padding: 5px;
    font-weight: 700;
    background-color: #fff;
    min-width: 34px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 15px;
    transition-duration: .3s;
    border: 1px solid #e0e0e0;
    &.disabled {
      color: #e0e0e0 !important;
      &:hover {
        background-color: #fff !important;
        border: 1px solid #e0e0e0 !important;
      }
    }
    &.return {
      color: #46bd87;
      &:hover {
        background-color: #46bd87;
        color: #fff;
        border: 1px solid #46bd87;
      }
      &:focus {
        outline-color: #46bd87;
      }
    }
    &.save {
      color: #46bd87;
      margin-left: auto;
      &:hover {
        background-color: #46bd87;
        color: #fff;
        border: 1px solid #46bd87;
      }
      &:focus {
        outline-color: #46bd87;
      }
    }
    &.yes-btn {
      color: #f76060;
      &:hover {
        background-color: #f76060;
        border: 1px solid #f76060;
        color: #fff;
      }
      &:focus {
        outline-color: #f76060;
      }
    }
    &.delete {
      color: #f76060;
      &:hover {
        background-color: #f76060;
        border: 1px solid #f76060;
        color: #fff;
      }
      &:focus {
        outline-color: #f76060;
      }
    }
    &:active {
      transform: translateY(2px);
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
  .flex {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}


</style>