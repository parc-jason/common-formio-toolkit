<template>
  <v-container>
    <h1 class="my-6 text-center">Form Submitter</h1>
    <FormSubmitter />
  </v-container>
</template>

<script>
import FormSubmitter from '@/components/forms/FormSubmitter.vue';

export default {
  name: 'FormSubmitterView',
  components: {
    FormSubmitter
  }
};
</script>
