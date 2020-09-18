<template>
  <div class="row">
    <div v-if="contact">
      <h2>{{contact.title}} - Contact Editing</h2>
      <AddItem :id="+this.$route.params.id" />
      <ItemsList :id="+this.$route.params.id" />
    </div>
    <h2 v-else>Contact not found</h2>
  </div>
</template>

<script>
import AddItem from '@/components/AddItem'
import ItemsList from '@/components/ItemsList'

export default {
  name: 'Contact',
  components: {
    AddItem,
    ItemsList
  },
  computed: {
    contact() {
      return this.$store.getters.contactById(+this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #46bd87;
  overflow-wrap: break-word;
  word-break: break-all;
}
</style>