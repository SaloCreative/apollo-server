const { GraphQLError } = require('graphql/error');

function format_nested_errors(errors) {
  return errors.map((error) => {
    return Object.keys(error).reduce((prev, err) => {
      return error[err][0];
    }, []);
  });
}

function handle_error( { data, status, formatted_errors }) {
  const { message, errors } = data;
  const error_messages = formatted_errors ? formatted_errors : errors;
  throw new GraphQLError('SALO_ERROR', null, null, null, null, null,
    { 
      code: 'SALO_ERROR',
      status,
      message,
      errors: error_messages
    }
  );
}

module.exports = {
  handle_error,
  format_nested_errors
}