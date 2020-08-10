const Models = require('./models');

const {transaction} = require('objection');
const {v4: uuidv4} = require('uuid');

const service = {

  listForms: async () => {
    return Models.Form.query()
      .allowGraph('[versions]')
      .withGraphFetched('versions(orderVersionDescending)')
      .modify('orderNameAscending');
  },

  createForm: async (data) => {
    let trx;
    try {
      trx = await transaction.start(Models.Form.knex());

      const obj = {};
      obj.formId = uuidv4();
      obj.name = data.name;
      obj.description = data.description;
      obj.versions = [{formVersionId: uuidv4(), version: 1, formId: obj.formId, schema: data.schema }];

      await Models.Form.query(trx).insertGraph(obj);
      await trx.commit();
      const result = await service.readForm(obj.formId);
      return result;
    } catch (err) {
      if (trx) await trx.rollback();
      throw err;
    }
  },

  readForm: async (formId) => {
    return Models.Form.query()
      .findById(formId)
      .allowGraph('[versions]')
      .withGraphFetched('versions(orderVersionDescending)')
      .throwIfNotFound();
  },

  listVersions: async () => {
    return Models.FormVersion.query()
      .modify('orderVersionDescending');
  },

  createVersion: async (formId, data) => {
    let trx;
    try {
      const form = await service.readForm(formId);
      const versionNumber = form.versions[0].version + 1;

      trx = await transaction.start(Models.FormVersion.knex());

      const obj = {
        formVersionId: uuidv4(),
        version: versionNumber,
        formId: form.formId,
        schema: data
      };
      await Models.FormVersion.query(trx).insert(obj);
      await trx.commit();
      const result = await service.readVersion(obj.formVersionId);
      return result;
    } catch (err) {
      if (trx) await trx.rollback();
      throw err;
    }
  },

  readVersion: async (formVersionId) => {
    return Models.FormVersion.query()
      .findById(formVersionId)
      .throwIfNotFound();
  },

  listSubmissions: async (formVersionId) => {
    return Models.FormSubmission.query()
      .where('formVersionId', formVersionId)
      .modify('orderDescending');
  },

  createSubmission: async (formVersionId, data) => {
    let trx;
    try {
      const formVersion = await service.readVersion(formVersionId);
      trx = await transaction.start(Models.FormSubmission.knex());

      const obj = {
        formSubmissionId: uuidv4(),
        formVersionId: formVersion.formVersionId,
        submittedAt: new Date(),
        submission: {
          data: data
        }
      };

      await Models.FormSubmission.query(trx).insert(obj);
      await trx.commit();
      const result = await service.readSubmission(obj.formSubmissionId);
      return result;
    } catch (err) {
      if (trx) await trx.rollback();
      throw err;
    }
  },

  readSubmission: async (formSubmissionId) => {
    return Models.FormSubmission.query()
      .findById(formSubmissionId)
      .throwIfNotFound();
  }

};

module.exports = service;
