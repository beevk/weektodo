<template>
  <confirm-modal :id="'clearListModal'" :title="$t('ui.clearList')" :text="$t('ui.clearListConfirm')" :ico="'bi-trash'"
    :okText="$t('ui.clear')" @on-ok="clearList">
  </confirm-modal>
</template>

<script>
import toDoListRepository from "../../repositories/toDoListRepository";
import confirmModal from "../confirmModal.vue";
import notifications from "../../helpers/notifications";

export default {
  name: "clearListModal",
  components: {
    confirmModal
  },
  methods: {
    clearList: function () {
      let listId = this.$store.getters.listToClearId;
      this.$store.commit('clearTodoList', listId);
      toDoListRepository.update(listId, []);
      notifications.refreshDayNotifications(this, listId);
    }
  }
}
</script>
