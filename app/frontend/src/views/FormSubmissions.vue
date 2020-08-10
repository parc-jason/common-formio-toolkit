<template>
  <v-container>
    <h1 class="my-6 text-center">Submissions</h1>
    <SubmissionList />
  </v-container>
</template>

<script>
import SubmissionList from '@/components/forms/SubmissionList.vue';

export default {
  name: 'Submissions',
  components: {
    SubmissionList
  }
};
</script>
