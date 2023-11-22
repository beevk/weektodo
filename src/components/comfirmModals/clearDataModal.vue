<template>
  <confirm-modal :id="'clearDataModal'" :title="$t('settings.clearData')" :text="$t('settings.clearDataDetails')"
    :ico="'bi-x-circle'" :okText="$t('settings.clearData')" @on-ok="clearData">
  </confirm-modal>
</template>
<script>
import confirmModal from "../confirmModal.vue";
import exportTool from "../../helpers/exportTool";

export default {
  name: "clearDataModal",
  components: {
    confirmModal
  },
  methods: {
    clearData: function () {
      let isElectron = require("is-electron");
      if (isElectron()) {
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('set-tray-context-menu-label', { open: 'Open', quit: 'Quit' });
        ipcRenderer.send('set-dark-tray-icon',false);
      }
      exportTool.clear();
    },
  },
};
</script>
