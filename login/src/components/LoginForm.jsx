import React from "react";
import Form from "react-jsonschema-form";

const LoginForm = () => {
  const schema = {
    type: "object",
    required: ["username", "password"],
    properties: {
      username: {
        type: "string",
        title: "Username",
      },
      password: {
        type: "string",
        title: "Password",
      },
    },
  };

  const uiSchema = {
    username: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:placeholder": "Username require",
    },
    password: {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!",
    },
  };

  const onSubmit = ({ formData }) => {
    console.log("Form data:", formData);
    alert(` your Data 👍, ${JSON.stringify(formData)}
    `);
  };

  return (
    <Form schema={schema} uiSchema={uiSchema} onSubmit={onSubmit}>
      <div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </div>
    </Form>
  );
};
export default LoginForm;
