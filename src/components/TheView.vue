<template>
  <v-container>
    <v-row class="pa-4">
      <!-- <TemplateRefs></TemplateRefs> -->
      <ScriptSet></ScriptSet>
      <DynamicComponent></DynamicComponent>
    </v-row>
  </v-container>
</template>

<script setup>
  import TemplateRefs from "./TemplateRefs.vue";
  import ScriptSet from "./ScriptSetup.vue"
  import DynamicComponent from "./DynamicComponent.vue";

</script>

<style lang="scss" scoped>

</style>