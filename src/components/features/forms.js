import React from "react"
import { Formik, Form, useField } from "formik"
import styled from "styled-components"
import * as Yup from "yup"
import { isMobile } from "react-device-detect"

const FormDiv = styled.div`
  input,
  textarea {
    font-size: 1.25rem;
    color: #707070;

    :focus {
      outline: none;
      border-radius: 10px;
      box-shadow: 0 0 2px #4caf50;
      border: 2px solid #4caf50;
    }
  }

  button[type="submit"] {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
    background-color: #4caf50;
    border-radius: 5px;
    display: table;
    clear: both;
    color: #fff;
    letter-spacing: -1.25px;
    transition: background-color 500ms cubic-bezier(0, 0, 0.2, 1);

    :hover {
      color: #fff;
      background-color: #2d9434;
      border-color: #2d9434;
    }
  }
`

const StyledErrorMessage = styled.span`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.25rem;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: -0.6px;
  text-align: left;
  color: #f44336;
`

const StyledLabel = styled.label`
  font-family: "Source Sans Pro", sans-serif;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: -0.6px;
  text-align: left;
  color: #434e52;

  > .required {
    position: relative;

    &::before {
      content: "*";
    }
  }
`

const StyledInput = styled.input`
  border: solid 3px #989c9f;
  border-radius: 10px;
  background-color: var(--white);
`

const StyledTextarea = styled.textarea`
  border: solid 3px #989c9f;
  border-radius: 10px;
  min-height: 15rem;
  background-color: var(--white);
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <React.Fragment>
      <div className={`form-control`}>
        <StyledLabel
          htmlFor={props.id || props.name}
          className={`block mb-2 text-2xl font-semibold not-italic tracking-tighter`}
        >
          {props.req ? <span className={`required`}>{label}</span> : "" + label}
        </StyledLabel>
        <StyledInput
          className={`block form-input ${
            isMobile ? "w-full" : "w-5/6"
          } h-20 p-6 ${meta.touched && meta.error ? "mb-3" : "mb-6"}`}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <StyledErrorMessage className={`error block mb-8 font-semibold`}>
            {meta.error}
          </StyledErrorMessage>
        ) : null}
      </div>
    </React.Fragment>
  )
}

const FormTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <React.Fragment>
      <StyledLabel
        htmlFor={props.id || props.name}
        className={`block mb-2 text-2xl font-semibold not-italic tracking-tighter`}
      >
        {props.req ? <span className={`required`}>{label}</span> : "" + label}
      </StyledLabel>
      <StyledTextarea
        className={`block form-input ${
          isMobile ? "w-full" : "w-5/6"
        } h-48 p-6 ${meta.touched && meta.error ? "mb-3" : "mb-6"}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage className={`error block mb-8 font-semibold`}>
          {meta.error}
        </StyledErrorMessage>
      ) : null}
    </React.Fragment>
  )
}

const Forms = ({ data }) => {
  return (
    <FormDiv>
      <Formik
        initialValues={{
          gmContactFullName: "",
          gmContactEmailAddress: "",
          gmContactCompanyName: "",
          gmContactCurrentUrl: "",
          gmContactMessage: "",
        }}
        validationSchema={Yup.object({
          gmContactFullName: Yup.string()
            .min(6, "Must be 6 characters or more")
            .required("Required field"),
          gmContactEmailAddress: Yup.string()
            .email("Invalid email address")
            .required("Required field"),
          gmContactCompanyName: Yup.string().min(
            3,
            "Must be 3 characters or more"
          ),
          gmContactCurrentUrl: Yup.string().url("Invalid URL"),
          gmContactMessage: Yup.string()
            .min(15, "Must be 15 characters or more")
            .required("Required field"),
        })}
      >
        <Form
          name={`gm-contact-form`}
          method={data.method}
          action={data.action}
        >
          {data.inputs.length
            ? data.inputs.map((val, index) => {
                return (
                  <React.Fragment key={index}>
                    {val.type !== "textarea" ? (
                      <FormInput
                        label={val.label}
                        name={val.name}
                        type={val.type}
                        req={val.req}
                      />
                    ) : (
                      <FormTextarea
                        label={val.label}
                        name={val.name}
                        type={val.type}
                        req={val.req}
                      />
                    )}
                  </React.Fragment>
                )
              })
            : null}
          <button
            type="submit"
            className={`text-2xl mt-12 px-4 py-2 font-bold not-italic tracking-tighter`}
          >
            Send your message
          </button>
        </Form>
      </Formik>
    </FormDiv>
  )
}

export default Forms
