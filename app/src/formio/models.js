const { Model } = require('objection');

class Form extends Model {
  static get tableName () {
    return 'form';
  }

  static get idColumn () {
    return 'formId';
  }

  static get relationMappings () {
    return {
      versions: {
        relation: Model.HasManyRelation,
        modelClass: FormVersion,
        join: {
          from: 'form.formId',
          to: 'form_version.formId'
        }
      }
    };
  }

  static get modifiers () {
    return {
      filterName(query, value) {
        if (value) {
          // ilike is postrges case insensitive like
          query.where('name', 'ilike', `%${value}%`);
        }
      },
      orderNameAscending(builder) {
        builder.orderBy('name', 'asc');
      }
    };
  }
}

class FormVersion extends Model {
  static get tableName () {
    return 'form_version';
  }

  static get idColumn () {
    return 'formVersionId';
  }

  static get relationMappings () {
    return {
      submissions: {
        relation: Model.HasManyRelation,
        modelClass: FormSubmission,
        join: {
          from: 'form_version.formVersionId',
          to: 'form_submission.formVersionId'
        }
      }
    };
  }

  static get modifiers () {
    return {
      filterFormId(query, value) {
        if (value !== undefined) {
          query.where('formId', value);
        }
      },
      orderVersionDescending(builder) {
        builder.orderBy('version', 'desc');
      }
    };
  }
}

class FormSubmission extends Model {
  static get tableName () {
    return 'form_submission';
  }

  static get idColumn () {
    return 'formSubmissionId';
  }

  static get modifiers () {
    return {
      filterFormVersionId(query, value) {
        if (value !== undefined) {
          query.where('formVersionId', value);
        }
      },
      orderDescending(builder) {
        builder.orderBy('submittedAt', 'desc');
      }
    };
  }
}

module.exports = {
  Form: Form,
  FormVersion: FormVersion,
  FormSubmission: FormSubmission
};
