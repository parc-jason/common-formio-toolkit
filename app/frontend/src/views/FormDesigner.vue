<template>
  <v-container>
    <h1 class="my-6 text-center">Form Designer</h1>
    <FormDesigner />
  </v-container>
</template>

<script>
import FormDesigner from '@/components/forms/FormDesigner.vue';

export default {
  name: 'FormDesignerView',
  components: {
    FormDesigner
  }
};
</script>
