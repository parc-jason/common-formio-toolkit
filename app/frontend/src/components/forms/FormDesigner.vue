<template>
  <div>
    <v-container>
      <v-btn
        text
        small
        color="primary"
        class="pl-0"
        @click="submitBuilder"
      >
        <span>Save Form Design</span>
      </v-btn>

    </v-container>
    <v-form>
      <v-row>
        <v-col cols="12" xl="8" offset-xl="2">
          <label>Name</label>
          <v-text-field
            v-model="formName"
            flat
            outlined
            solo
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xl="8" offset-xl="2">
          <label>Description</label>
          <v-text-field
            v-model="formDescription"
            flat
            outlined
            solo
          />
        </v-col>
      </v-row>
    </v-form>
    <FormBuilder
      :form="formSchema"
      v-on:change="onChangeMethod" />
  </div>
</template>

<script>
import { FormBuilder } from 'vue-formio';
import formioService from '@/services/formioService';

export default {
  name: 'FormDesigner',
  data() {
    return {
      formName: '',
      formDescription: '',
      formSchema: {}
    };
  },
  components: {
    FormBuilder
  },
  created () {
    this.getFormSchema();
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getFormSchema'
  },
  methods: {
    async getFormSchema() {
      this.formSchema = {};
      if (this.$route.params.formId && this.$route.params.formVersionId) {
        try {
          const form = await formioService.readForm(this.$route.params.formId);
          this.formName = form.data.name;
          this.formDescription = form.data.description;

          const response = await formioService.readVersion(this.$route.params.formId, this.$route.params.formVersionId);
          const data = response.data;
          this.formSchema = data.schema;
        } catch (error) {
          console.error(`Error getting form schema: ${error}`); // eslint-disable-line no-console
        }
      }
    },
    async submitBuilder() {
      if (this.$route.params.formId && this.$route.params.formVersionId) {
        try {
          const response = await formioService.createVersion(this.$route.params.formId, this.formSchema);
          const data = response.data;
          this.formSchema = data.schema;
        } catch (error) {
          console.error(`Error creating new form schema version: ${error}`); // eslint-disable-line no-console
        }
      } else {
        try {
          const form = {
            name: this.formName,
            description: this.formDescription,
            schema: this.formSchema
          };
          const response = await formioService.createForm(form);
          const data = response.data;
          this.formSchema = data.schema;
        } catch (error) {
          console.error(`Error creating new form : ${error}`); // eslint-disable-line no-console
        }
      }
    },
    onChangeMethod(schema) {
      if (!this.formSchema) {
        this.formSchema = {};
      }
      this.formSchema = Object.assign(this.formSchema, schema);
    }
  }
};
</script>
