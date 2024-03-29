export default function validateSchema(schema) {
  return (res, req, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) return res.status(422).send(error.details.map((detail) => detail.message));

    next();
  };
}
