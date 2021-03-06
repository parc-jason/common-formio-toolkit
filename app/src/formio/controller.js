const service = require('./service');

module.exports = {
  listForms: async (req, res, next) => {
    try {
      const response = await service.listForms();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
  createForm:  async (req, res, next) => {
    try {
      const response = await service.createForm(req.body);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  },
  readForm:  async (req, res, next) => {
    try {
      const response = await service.readForm(req.params.formId);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
  listVersions: async (req, res, next) => {
    try {
      const response = await service.listVersions(req.params.formId);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
  createVersion:  async (req, res, next) => {
    try {
      const response = await service.createVersion(req.params.formId, req.body);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  },
  readVersion:  async (req, res, next) => {
    try {
      const response = await service.readVersion(req.params.formVersionId);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
  listSubmissions: async (req, res, next) => {
    try {
      const response = await service.listSubmissions(req.params.formVersionId);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
  createSubmission:  async (req, res, next) => {
    try {
      const response = await service.createSubmission(req.params.formVersionId, req.body);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  },
  readSubmission:  async (req, res, next) => {
    try {
      const response = await service.readSubmission(req.params.formSubmissionId);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },

};
