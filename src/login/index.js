import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../_store/login/actions/login';

class Login extends Component {

  onSubmit(values) {
    return this.props.login(values, () => this.props.history.push('/quiz'));
  }

  renderField(field) {

    const { input, label, meta: { touched, error } } = field;
    const formClassName = `form-group ${touched && error  ? 'has-danger' : '' }`;

    return (
      <div className={formClassName}>
        <label>{label}</label>
        <input
          className="form-control"
          type="text"
          {...input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="name"
          label="Enter your name"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Let's Quiz!</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (values.name && values.name.length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(null, { login })(Login)
);
