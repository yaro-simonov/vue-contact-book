import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(window.localStorage.getItem('contacts'))
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact)
      window.localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    deleteContact(state, idx) {
      state.contacts.splice(idx, 1)
      window.localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    deleteOpen(state, idx) {
      const contact = state.contacts[idx]
      contact.deleteOpen = !contact.deleteOpen
    },
    deleteOpenItem(state, {id, idx}) {
      const item = state.contacts.find(contact => contact.id === id).items[idx]
      item.deleteOpen = !item.deleteOpen
    },
    deleteOpenReset(state, idx) {
      state.contacts[idx].deleteOpen = false
    },
    addItem(state, {item, id}) {
      state.contacts.find(contact => contact.id === id).items.push(item)
      window.localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    updateItem(state, {id, idx, newTitle, newValue}) {
      const item = state.contacts.find(contact => contact.id === id).items[idx]
      item.oldTitle = item.title
      item.oldValue = item.value
      item.title = newTitle
      item.value = newValue
      item.newTitle = item.newValue = ''
      window.localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    deleteItem(state, {id, idx}) {
      state.contacts.find(contact => contact.id === id).items.splice(idx, 1)
      window.localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    resetOpen(state, {id, idx}) {
      const item = state.contacts.find(contact => contact.id === id).items[idx]
      item.resetOpen = !item.resetOpen
    },
    resetItem(state, {id, idx}) {
      const item = state.contacts.find(contact => contact.id === id).items[idx]
      item.title = item.oldTitle
      item.value = item.oldValue
      item.oldTitle = item.oldValue = ''
      item.resetOpen = false
      window.localStorage.setItem('contacts', JSON.stringify(state.contacts))
    }
  },
  actions: {
    addContact({commit}, contact) {
      commit('addContact', contact)
    },
    deleteOpen({commit}, idx) {
      commit('deleteOpen', idx)
    },
    deleteOpenItem({commit}, {id, idx}) {
      commit('deleteOpenItem', {id, idx})
    },
    deleteOpenReset({commit}, idx) {
      commit('deleteOpenReset', idx)
    },
    deleteContact({commit}, idx) {
      commit('deleteContact', idx)
    },
    addItem({commit}, {item, id}) {
      commit('addItem', {item, id})
    },
    updateItem({commit}, {id, idx, newTitle, newValue}) {
      commit('updateItem', {id, idx, newTitle, newValue})
    },
    deleteItem({commit}, {id, idx}) {
      commit('deleteItem', {id, idx})
    },
    resetOpen({commit}, {id, idx}) {
      commit('resetOpen', {id, idx})
    },
    resetItem({commit}, {id, idx}) {
      commit('resetItem', {id, idx})
    }
  },
  modules: {
  },
  getters: {
    contacts: state => state.contacts,
    contactById: state => id => state.contacts.find(contact => contact.id === id)
  }
})
