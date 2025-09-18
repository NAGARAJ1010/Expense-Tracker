const Joi = require("joi");
exports.signUpValidation = Joi.object({
  email: Joi.string()
    .min(6)
    .max(60)
    .required()
    .email({
      tlds: { allow: ["com", "in", "net"] },
    }),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{8,}$")),
});
