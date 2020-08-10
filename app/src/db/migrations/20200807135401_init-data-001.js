const { v4: uuidv4 } = require('uuid');

exports.up = function(knex) {
  return knex('form').del()
    .then(() => {
      const data = {
        formId: uuidv4(),
        name: 'BC Gov. Common Feedback',
        description: 'Sample form taken from our FormIO Enterprise.'
      };
      return knex('form').insert(data).returning('formId');
    })
    .then(formIds => {
      const data = {
        formVersionId: uuidv4(),
        formId: formIds[0],
        version: 1,
        schema: {
          'type': 'form',
          'tags': [],
          'components': [
            {
              'label': 'Feedback on stand-alone forms in the FORM.IO tool:',
              'autoExpand': false,
              'tableView': true,
              'key': 'feedbackOnFormIoTool',
              'type': 'textarea',
              'input': true,
              'placeholder': '',
              'prefix': '',
              'customClass': '',
              'suffix': '',
              'multiple': false,
              'defaultValue': null,
              'protected': false,
              'unique': false,
              'persistent': true,
              'hidden': false,
              'clearOnHide': true,
              'refreshOn': '',
              'redrawOn': '',
              'modalEdit': false,
              'labelPosition': 'top',
              'description': '',
              'errorLabel': '',
              'tooltip': '',
              'hideLabel': false,
              'tabindex': '',
              'disabled': false,
              'autofocus': false,
              'dbIndex': false,
              'customDefaultValue': '',
              'calculateValue': '',
              'calculateServer': false,
              'widget': {
                'type': 'input'
              },
              'attributes': {},
              'validateOn': 'change',
              'validate': {
                'required': false,
                'custom': '',
                'customPrivate': false,
                'strictDateValidation': false,
                'multiple': false,
                'unique': false,
                'minLength': '',
                'maxLength': '',
                'pattern': '',
                'minWords': '',
                'maxWords': ''
              },
              'conditional': {
                'show': null,
                'when': null,
                'eq': ''
              },
              'overlay': {
                'style': '',
                'left': '',
                'top': '',
                'width': '',
                'height': ''
              },
              'allowCalculateOverride': false,
              'encrypted': false,
              'showCharCount': false,
              'showWordCount': false,
              'properties': {},
              'allowMultipleMasks': false,
              'mask': false,
              'inputType': 'text',
              'inputFormat': 'html',
              'inputMask': '',
              'spellcheck': true,
              'rows': 3,
              'wysiwyg': false,
              'editor': '',
              'fixedSize': true,
              'id': 'e66zt5b'
            },
            {
              'title': 'What would you use it for?',
              'collapsible': false,
              'tableView': false,
              'key': 'panel',
              'type': 'panel',
              'label': 'Panel',
              'input': false,
              'components': [
                {
                  'label': 'Embedding the form into a custom app',
                  'tableView': false,
                  'defaultValue': false,
                  'key': 'embeddingTheFormIntoACustomApp',
                  'type': 'checkbox',
                  'input': true,
                  'placeholder': '',
                  'prefix': '',
                  'customClass': '',
                  'suffix': '',
                  'multiple': false,
                  'protected': false,
                  'unique': false,
                  'persistent': true,
                  'hidden': false,
                  'clearOnHide': true,
                  'refreshOn': '',
                  'redrawOn': '',
                  'modalEdit': false,
                  'labelPosition': 'right',
                  'description': '',
                  'errorLabel': '',
                  'tooltip': '',
                  'hideLabel': false,
                  'tabindex': '',
                  'disabled': false,
                  'autofocus': false,
                  'dbIndex': false,
                  'customDefaultValue': '',
                  'calculateValue': '',
                  'calculateServer': false,
                  'widget': null,
                  'attributes': {},
                  'validateOn': 'change',
                  'validate': {
                    'required': false,
                    'custom': '',
                    'customPrivate': false,
                    'strictDateValidation': false,
                    'multiple': false,
                    'unique': false
                  },
                  'conditional': {
                    'show': null,
                    'when': null,
                    'eq': ''
                  },
                  'overlay': {
                    'style': '',
                    'left': '',
                    'top': '',
                    'width': '',
                    'height': ''
                  },
                  'allowCalculateOverride': false,
                  'encrypted': false,
                  'showCharCount': false,
                  'showWordCount': false,
                  'properties': {},
                  'allowMultipleMasks': false,
                  'inputType': 'checkbox',
                  'dataGridLabel': true,
                  'value': '',
                  'name': '',
                  'id': 'e09gy4e'
                },
                {
                  'label': 'Hosting an API of the form for others to hit with their apps',
                  'tableView': false,
                  'key': 'hostedFormApi',
                  'type': 'checkbox',
                  'input': true,
                  'defaultValue': false,
                  'placeholder': '',
                  'prefix': '',
                  'customClass': '',
                  'suffix': '',
                  'multiple': false,
                  'protected': false,
                  'unique': false,
                  'persistent': true,
                  'hidden': false,
                  'clearOnHide': true,
                  'refreshOn': '',
                  'redrawOn': '',
                  'modalEdit': false,
                  'labelPosition': 'right',
                  'description': '',
                  'errorLabel': '',
                  'tooltip': '',
                  'hideLabel': false,
                  'tabindex': '',
                  'disabled': false,
                  'autofocus': false,
                  'dbIndex': false,
                  'customDefaultValue': '',
                  'calculateValue': '',
                  'calculateServer': false,
                  'widget': null,
                  'attributes': {},
                  'validateOn': 'change',
                  'validate': {
                    'required': false,
                    'custom': '',
                    'customPrivate': false,
                    'strictDateValidation': false,
                    'multiple': false,
                    'unique': false
                  },
                  'conditional': {
                    'show': null,
                    'when': null,
                    'eq': ''
                  },
                  'overlay': {
                    'style': '',
                    'left': '',
                    'top': '',
                    'width': '',
                    'height': ''
                  },
                  'allowCalculateOverride': false,
                  'encrypted': false,
                  'showCharCount': false,
                  'showWordCount': false,
                  'properties': {},
                  'allowMultipleMasks': false,
                  'inputType': 'checkbox',
                  'dataGridLabel': true,
                  'value': '',
                  'name': '',
                  'id': 'eq69pum'
                }
              ],
              'placeholder': '',
              'prefix': '',
              'customClass': '',
              'suffix': '',
              'multiple': false,
              'defaultValue': null,
              'protected': false,
              'unique': false,
              'persistent': false,
              'hidden': false,
              'clearOnHide': false,
              'refreshOn': '',
              'redrawOn': '',
              'modalEdit': false,
              'labelPosition': 'top',
              'description': '',
              'errorLabel': '',
              'tooltip': '',
              'hideLabel': false,
              'tabindex': '',
              'disabled': false,
              'autofocus': false,
              'dbIndex': false,
              'customDefaultValue': '',
              'calculateValue': '',
              'calculateServer': false,
              'widget': null,
              'attributes': {},
              'validateOn': 'change',
              'validate': {
                'required': false,
                'custom': '',
                'customPrivate': false,
                'strictDateValidation': false,
                'multiple': false,
                'unique': false
              },
              'conditional': {
                'show': null,
                'when': null,
                'eq': ''
              },
              'overlay': {
                'style': '',
                'left': '',
                'top': '',
                'width': '',
                'height': ''
              },
              'allowCalculateOverride': false,
              'encrypted': false,
              'showCharCount': false,
              'showWordCount': false,
              'properties': {},
              'allowMultipleMasks': false,
              'tree': false,
              'theme': 'default',
              'breadcrumb': 'default',
              'id': 'ee4xww'
            },
            {
              'label': 'Email',
              'tableView': true,
              'key': 'email',
              'type': 'email',
              'input': true,
              'placeholder': '',
              'prefix': '',
              'customClass': '',
              'suffix': '',
              'multiple': false,
              'defaultValue': null,
              'protected': false,
              'unique': false,
              'persistent': true,
              'hidden': false,
              'clearOnHide': true,
              'refreshOn': '',
              'redrawOn': '',
              'modalEdit': false,
              'labelPosition': 'top',
              'description': '',
              'errorLabel': '',
              'tooltip': '',
              'hideLabel': false,
              'tabindex': '',
              'disabled': false,
              'autofocus': false,
              'dbIndex': false,
              'customDefaultValue': '',
              'calculateValue': '',
              'calculateServer': false,
              'widget': {
                'type': 'input'
              },
              'attributes': {},
              'validateOn': 'change',
              'validate': {
                'required': false,
                'custom': '',
                'customPrivate': false,
                'strictDateValidation': false,
                'multiple': false,
                'unique': false,
                'minLength': '',
                'maxLength': '',
                'pattern': ''
              },
              'conditional': {
                'show': null,
                'when': null,
                'eq': ''
              },
              'overlay': {
                'style': '',
                'left': '',
                'top': '',
                'width': '',
                'height': ''
              },
              'allowCalculateOverride': false,
              'encrypted': false,
              'showCharCount': false,
              'showWordCount': false,
              'properties': {},
              'allowMultipleMasks': false,
              'mask': false,
              'inputType': 'email',
              'inputFormat': 'plain',
              'inputMask': '',
              'spellcheck': true,
              'kickbox': {
                'enabled': false
              },
              'id': 'ekofnl'
            },
            {
              'type': 'button',
              'label': 'Submit',
              'key': 'submit',
              'disableOnInvalid': true,
              'input': true,
              'tableView': false,
              'placeholder': '',
              'prefix': '',
              'customClass': '',
              'suffix': '',
              'multiple': false,
              'defaultValue': null,
              'protected': false,
              'unique': false,
              'persistent': false,
              'hidden': false,
              'clearOnHide': true,
              'refreshOn': '',
              'redrawOn': '',
              'modalEdit': false,
              'labelPosition': 'top',
              'description': '',
              'errorLabel': '',
              'tooltip': '',
              'hideLabel': false,
              'tabindex': '',
              'disabled': false,
              'autofocus': false,
              'dbIndex': false,
              'customDefaultValue': '',
              'calculateValue': '',
              'calculateServer': false,
              'widget': {
                'type': 'input'
              },
              'attributes': {},
              'validateOn': 'change',
              'validate': {
                'required': false,
                'custom': '',
                'customPrivate': false,
                'strictDateValidation': false,
                'multiple': false,
                'unique': false
              },
              'conditional': {
                'show': null,
                'when': null,
                'eq': ''
              },
              'overlay': {
                'style': '',
                'left': '',
                'top': '',
                'width': '',
                'height': ''
              },
              'allowCalculateOverride': false,
              'encrypted': false,
              'showCharCount': false,
              'showWordCount': false,
              'properties': {},
              'allowMultipleMasks': false,
              'size': 'md',
              'leftIcon': '',
              'rightIcon': '',
              'block': false,
              'action': 'submit',
              'theme': 'primary',
              'dataGridLabel': true,
              'id': 'emwz28'
            }
          ],
          'access': [
            {
              'roles': [],
              'type': 'create_own'
            },
            {
              'roles': [],
              'type': 'create_all'
            },
            {
              'roles': [],
              'type': 'read_own'
            },
            {
              'roles': [],
              'type': 'read_all'
            },
            {
              'roles': [],
              'type': 'update_own'
            },
            {
              'roles': [],
              'type': 'update_all'
            },
            {
              'roles': [],
              'type': 'delete_own'
            },
            {
              'roles': [],
              'type': 'delete_all'
            },
            {
              'roles': [],
              'type': 'team_read'
            },
            {
              'roles': [],
              'type': 'team_write'
            },
            {
              'roles': [],
              'type': 'team_admin'
            }
          ],
          'submissionAccess': [
            {
              'roles': [],
              'type': 'create_own'
            },
            {
              'roles': [],
              'type': 'create_all'
            },
            {
              'roles': [],
              'type': 'read_own'
            },
            {
              'roles': [],
              'type': 'read_all'
            },
            {
              'roles': [],
              'type': 'update_own'
            },
            {
              'roles': [],
              'type': 'update_all'
            },
            {
              'roles': [],
              'type': 'delete_own'
            },
            {
              'roles': [],
              'type': 'delete_all'
            },
            {
              'roles': [],
              'type': 'team_read'
            },
            {
              'roles': [],
              'type': 'team_write'
            },
            {
              'roles': [],
              'type': 'team_admin'
            }
          ],
          'controller': '',
          'properties': {},
          'settings': {},
        }
      };
      return knex('form_version').insert(data).returning('formVersionId');
    })
    .then(formVersionIds => {
      const data = {
        formSubmissionId: uuidv4(),
        formVersionId: formVersionIds[0],
        submittedAt: new Date(),
        submission: {
          data: {
            email: 'admin@vue.org',
            embeddingTheFormIntoACustomApp: true,
            feedbackOnFormIoTool: 'help me!',
            hostedFormApi: false,
          }
        }
      };
      return knex('form_submission').insert(data);
    });
};

exports.down = function(knex) {
  return Promise.resolve()
    .then(() => {
      return knex('form_submission').del();
    })
    .then(() => {
      return knex('form_version').del();
    })
    .then(() => {
      return knex('form').del();
    });
};
