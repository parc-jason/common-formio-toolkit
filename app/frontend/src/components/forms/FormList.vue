<template>
  <div>
    <v-container>
      <v-btn
        text
        small
        color="primary"
        class="pl-0"
        @click="createForm"
      >
        <v-icon class="mr-1">add</v-icon>
        <span>NEW FORM</span>
      </v-btn>

    </v-container>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="forms"
        :items-per-page="20"
        class="elevation-1"
      >
        <template v-slot:item.design="{ item }">
          <router-link :to="{ name: 'FormDesigner', params: { formId: item.formId, formVersionId: item.formVersionId } }">
            <v-btn color="textLink" text small>
              <span>Design</span>
            </v-btn>
          </router-link>
        </template>
        <template v-slot:item.submit="{ item }">
          <router-link :to="{ name: 'FormSubmitter', params: { formId: item.formId, formVersionId: item.formVersionId } }">
            <v-btn color="textLink" text small>
              <span>Submit</span>
            </v-btn>
          </router-link>
        </template>
        <template v-slot:item.submissions="{ item }">
          <router-link :to="{ name: 'FormSubmissions', params: { formId: item.formId, formVersionId: item.formVersionId } }">
            <v-btn color="textLink" text small>
              <span>View Submissions</span>
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
    loading: true,
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Description', value: 'description' },
      { text: 'Version', value: 'version' },
      { text: 'Design', value: 'design' },
      { text: 'Submit', value: 'submit' },
      { text: 'Submissions', value: 'submissions' },
    ],
    forms: []
  }),
  methods: {
    createForm() {
      this.$router.push({ name: 'FormDesigner', params: { } });
    },
    async getData() {
      try {
        this.forms = [];
        const response = await formioService.listForms();
        const data = response.data;
        data.forEach(f => {
          f.versions.forEach(v => {
            this.forms.push({
              name: f.name,
              description: f.description,
              version: v.version,
              formId: v.formId,
              formVersionId: v.formVersionId
            });
          });
        });
        console.info(this.forms); // eslint-disable-line no-console
      } catch (error) {
        console.error(`Error getting forms: ${error}`); // eslint-disable-line no-console
      }
    }
  },
  mounted() {
    this.getData();
  }};
</script>
