
exports.up = function(knex) {
  return Promise.resolve()
    .then(() => knex.schema.createTable('form', table => {
      table.uuid('formId').primary();
      table.string('name').unique().notNullable();
      table.string('description');
    }))
    .then(() => knex.schema.createTable('form_version', table => {
      table.uuid('formVersionId').primary();
      table.uuid('formId').references('formId').inTable('form').notNullable().index();
      table.integer('version').notNullable();
      table.unique(['formId', 'version']);
      table.jsonb('schema');
    }))
    .then(() => knex.schema.createTable('form_submission', table => {
      table.uuid('formSubmissionId').primary();
      table.uuid('formVersionId').references('formVersionId').inTable('form_version').notNullable().index();
      table.timestamp('submittedAt', {useTz: true}).defaultTo(knex.fn.now());
      table.jsonb('submission');
    }));
};

exports.down = function(knex) {
  return Promise.resolve()
    .then(() => knex.schema.dropTableIfExists('form_submission'))
    .then(() => knex.schema.dropTableIfExists('form_version'))
    .then(() => knex.schema.dropTableIfExists('form'));
};

