const joi = require("joi");

function Loginvalidate(req, res, next) {
  const schema = joi.object({

    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  });
  const {error} = schema.validate(req.body);
  if (error) {
    return res.json({status:404,msg:error.message});
  } else {
    next();
  }
}
module.exports = Loginvalidate;
