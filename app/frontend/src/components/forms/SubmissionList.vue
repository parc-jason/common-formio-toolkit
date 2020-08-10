<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="submissions"
        :items-per-page="20"
        class="elevation-1"
      >
        <template v-slot:item.view="{ item }">
          <router-link :to="{ name: 'FormSubmitter', params: { formId: item.formId, formVersionId: item.formVersionId, formSubmissionId: item.formSubmissionId } }">
            <v-btn color="textLink" text small>
              <span>View</span>
            </v-btn>
          </router-link>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import formioService from '@/services/formioService';

export default {
  name: 'FormList',
  data: () => ({
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Description', value: 'description' },
      { text: 'Version', value: 'version' },
      { text: 'Submitted At', value: 'submittedAt' },
      { text: 'View', value: 'view' },
    ],
    submissions: []
  }),
  created () {
    this.getData();
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getData'
  },
  methods: {
    async getData() {
      try {
        this.submissions = [];
        if (this.$route.params.formId && this.$route.params.formVersionId) {
          const fresp = await formioService.readForm(this.$route.params.formId);
          const form = fresp.data;
          const vresp = await formioService.readVersion(this.$route.params.formId, this.$route.params.formVersionId);
          const version = vresp.data;
          const response = await formioService.listSubmissions(this.$route.params.formId, this.$route.params.formVersionId);
          const data = response.data;
          data.forEach(d => {
            this.submissions.push({
              name: form.name,
              description: form.description,
              version: version.version,
              formId: form.formId,
              formVersionId: version.formVersionId,
              formSubmissionId: d.formSubmissionId,
              submittedAt: d.submittedAt
            });
          });
        }
      } catch (error) {
        console.error(`Error getting submissions: ${error}`); // eslint-disable-line no-console
      }
    }
  }};
</script>
