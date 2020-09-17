<template>
  <div class="row">
    <AddContact />
    <ContactList />
  </div>
</template>

<script>
import AddContact from '@/components/AddContact'
import ContactList from '@/components/ContactList'

export default {
  name: 'Home',
  components: {
    AddContact,
    ContactList
  }
}
</script>
