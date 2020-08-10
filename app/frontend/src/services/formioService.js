import { appAxios } from '@/services/interceptors';
import { ApiRoutes } from '@/utils/constants';

export default {
  listForms() {
    return appAxios().get(`${ApiRoutes.FORMIO}/`);
  },
  createForm(data) {
    return appAxios().post(`${ApiRoutes.FORMIO}/`, data);
  },
  readForm(formId) {
    return appAxios().get(`${ApiRoutes.FORMIO}/${formId}`);
  },
  listVersions(formId) {
    return appAxios().get(`${ApiRoutes.FORMIO}/${formId}/versions`);
  },
  createVersion(formId, data) {
    return appAxios().post(`${ApiRoutes.FORMIO}/${formId}/versions`, data);
  },
  readVersion(formId, formVersionId) {
    return appAxios().get(`${ApiRoutes.FORMIO}/${formId}/versions/${formVersionId}`);
  },
  listSubmissions(formId, formVersionId) {
    return appAxios().get(`${ApiRoutes.FORMIO}/${formId}/versions/${formVersionId}/submissions`);
  },
  createSubmission(formId, formVersionId, data) {
    return appAxios().post(`${ApiRoutes.FORMIO}/${formId}/versions/${formVersionId}/submissions`, data);
  },
  readSubmission(formId, formVersionId, formSubmissionId) {
    return appAxios().get(`${ApiRoutes.FORMIO}/${formId}/versions/${formVersionId}/submissions/${formSubmissionId}`);
  }

};
