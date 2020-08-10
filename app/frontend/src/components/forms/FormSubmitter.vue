<template>
  <Formio
    :form="formSchema"
    :submission="submission"
    @change="onChangeMethod"
    @submit="onSubmitMethod"
    :options="getOptions"
  />
</template>

<script>
import {Form} from 'vue-formio';
import formioService from '@/services/formioService';

export default {
  name: 'FormSubmitter',
  components: {
    Formio: Form
  },
  computed: {
    getOptions() {
      return { readOnly: (undefined !== this.$route.params.formSubmissionId)};
    }
  },
  created () {
    this.getData();
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getData'
  },
  data: () => ({
    submission: {
      data: {}
    },
    formSchema: {}
  }),
  methods: {
    async getData() {
      this.formSchema = {};
      if (this.$route.params.formId && this.$route.params.formVersionId) {
        try {
          const response = await formioService.readVersion(this.$route.params.formId, this.$route.params.formVersionId);
          const data = response.data;
          this.formSchema = data.schema;
        } catch (error) {
          console.error(`Error getting form schema: ${error}`); // eslint-disable-line no-console
        }
      }
      if (this.$route.params.formSubmissionId) {
        try {
          const response = await formioService.readSubmission(this.$route.params.formId, this.$route.params.formVersionId, this.$route.params.formSubmissionId);
          const data = response.data;
          this.submission = data.submission;
        } catch (error) {
          console.error(`Error getting form data: ${error}`); // eslint-disable-line no-console
        }
      }
    },
    onChangeMethod(change) {
      const changed = change.changed;
      if (changed) {
        this.submission.data[changed.instance.path] = changed.value;
      }
    },
    // eslint-disable-next-line no-unused-vars
    async onSubmitMethod(data) {
      if (this.$route.params.formId && this.$route.params.formVersionId) {
        try {
          const response = await formioService.createSubmission(this.$route.params.formId, this.$route.params.formVersionId, this.submission.data);
          if (response.status === 201) {
            this.$router.push({ name: 'FormSubmissions', params: { formId: this.$route.params.formId, formVersionId: this.$route.params.formVersionId } });
          }
        } catch (error) {
          console.error(`Error creating new submission: ${error}`); // eslint-disable-line no-console
        }
      }
    }
  }
};
</script>
