import Joi from 'joi';

// Define the schema for user signup
const signupSchema = Joi.object({
  first_name: Joi.string().max(100).required(),
  last_name: Joi.string().max(100).required(),
  email: Joi.string().email().max(50).required(),
  password: Joi.string().min(6).max(42).required()
});

export default  {
    validateSignupData(data) {
        const { error, value } = signupSchema.validate(data, { abortEarly: false });
        if (error) {
          throw new Error(`Validation Error: ${error.details.map(x => x.message).join(', ')}`);
        }
        return value;
      }
};