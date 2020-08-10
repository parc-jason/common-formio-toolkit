<template>
  <v-container>
    <h1 class="my-6 text-center">Forms</h1>
    <FormList />
  </v-container>
</template>

<script>
import FormList from '@/components/forms/FormList.vue';

export default {
  name: 'Home',
  components: {
    FormList
  }
};
</script>
