import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validate";
import "./SurveyForm.css";

const SurveyForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const submit = () => {
    setFormData(values);
    setFormSubmitted(true);
  };

  const initialValues = {
    fullName: "",
    email: "",
    surveyTopic: "",
    programmingLanguage: "",
    experience: "",
    exerciseFreq: "",
    dietPreference: "",
    qualification: "",
    fieldOfStudy: "",
    feedback: "",
  };

  const { values, errors, additionalQuestions, handleChange, handleSubmit } =
    useForm(initialValues, validate, submit);

  return (
    <div className="border">
      <div className="wrapper">
        <div className="heading">Survey Form</div>
        <hr />
        {!formSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="section1">
              <label htmlFor="fullName" className="labell">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full name"
                className="input-field"
                value={values.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className="error">{errors.fullName}</span>
              )}

              <label htmlFor="email" className="labell">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="input-field"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <label htmlFor="surveyTopic" className="labell">
                Choose a Category
              </label>
              <select
                name="surveyTopic"
                id="surveyTopic"
                className="input-field"
                value={values.surveyTopic}
                onChange={handleChange}
              >
                <option value="">Select a Category</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
                <option value="education">Education</option>
              </select>
              {errors.surveyTopic && (
                <span className="error">{errors.surveyTopic}</span>
              )}
            </div>

            {values.surveyTopic === "technology" && (
              <div className="section2">
                <div className="technology">
                  <h2 className="subheading">Technology Section</h2>
                  <div className="questions">
                    <ol>
                      <li>
                        <div className="question">
                          <label htmlFor="programmingLanguage">
                            Favourite Programming Language:
                          </label>
                          <select
                            name="programmingLanguage"
                            id="programmingLanguage"
                            className="input-box"
                            value={values.programmingLanguage}
                            onChange={handleChange}
                          >
                            <option value="" disabled>
                              Select a Language
                            </option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="Java">Java</option>
                            <option value="C#">C#</option>
                          </select>
                          {errors.programmingLanguage && (
                            <span className="error">
                              {errors.programmingLanguage}
                            </span>
                          )}
                        </div>
                      </li>
                      <li>
                        <div className="question">
                          <label htmlFor="experience">
                            Years of Experience:
                          </label>
                          <input
                            type="number"
                            id="experience"
                            name="experience"
                            placeholder="Experience"
                            min="0"
                            className="input-box"
                            value={values.experience}
                            onChange={handleChange}
                          />
                          {errors.experience && (
                            <span className="error">{errors.experience}</span>
                          )}
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {values.surveyTopic === "health" && (
              <div className="section2">
                <div className="health">
                  <h2 className="subheading">Health Section</h2>
                  <div className="questions">
                    <ol>
                      <li>
                        <div className="question">
                          <label htmlFor="exerciseFreq">
                            Exercise Frequency:
                          </label>
                          <select
                            name="exerciseFreq"
                            id="exerciseFreq"
                            className="input-box"
                            value={values.exerciseFreq}
                            onChange={handleChange}
                          >
                            <option value="" default>
                              Select an option
                            </option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="rarely">Rarely</option>
                          </select>
                          {errors.exerciseFreq && (
                            <span className="error">{errors.exerciseFreq}</span>
                          )}
                        </div>
                      </li>
                      <li>
                        <div className="question">
                          <label htmlFor="dietPreference">
                            Diet Preference:
                          </label>
                          <select
                            name="dietPreference"
                            id="dietPreference"
                            className="input-box"
                            value={values.dietPreference}
                            onChange={handleChange}
                          >
                            <option value="" default>
                              Select an option
                            </option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="non-Vegetarian">
                              Non-Vegetarian
                            </option>
                          </select>
                          {errors.dietPreference && (
                            <span className="error">
                              {errors.dietPreference}
                            </span>
                          )}
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {values.surveyTopic === "education" && (
              <div className="section2">
                <div className="education">
                  <h2 className="subheading">Education Section</h2>
                  <div className="questions">
                    <ol>
                      <li>
                        <div className="question">
                          <label htmlFor="qualification">
                            Highest Qualification:
                          </label>
                          <select
                            name="qualification"
                            id="qualification"
                            className="input-box"
                            value={values.qualification}
                            onChange={handleChange}
                          >
                            <option value="" default>
                              Select an option
                            </option>
                            <option value="highSchool">High School</option>
                            <option value="bachelor">Bachelor's Degree</option>
                            <option value="master">Master's Degree</option>
                            <option value="phd">PhD</option>
                          </select>
                          {errors.qualification && (
                            <span className="error">
                              {errors.qualification}
                            </span>
                          )}
                        </div>
                      </li>
                      <li>
                        <div className="question">
                          <label htmlFor="fieldOfStudy">Field of Study:</label>
                          <input
                            type="text"
                            id="fieldOfStudy"
                            name="fieldOfStudy"
                            placeholder="Field of Study"
                            className="input-box"
                            value={values.fieldOfStudy}
                            onChange={handleChange}
                          />
                          {errors.fieldOfStudy && (
                            <span className="error">{errors.fieldOfStudy}</span>
                          )}
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            <div className="section3">
            <div className="section3-1"> <label htmlFor="feedback" className="labell">
                Feedback
              </label></div>
            <div className="section3-2">
            <textarea
                id="feedback"
                name="feedback"
                placeholder="Enter your feedback"
                className="input-field"
                rows="8"
                cols="50"
                value={values.feedback}
                onChange={handleChange}
              ></textarea>
            </div>
              
              {errors.feedback && (
                <span className="error">{errors.feedback}</span>
              )}
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        ) : (
          <div className="summary">
            <h2 className="subheading">Summary of Your Submission</h2>
            <p>
              <strong>Full Name:</strong> {formData.fullName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Survey Topic:</strong> {formData.surveyTopic}
            </p>

            {formData.surveyTopic === "technology" && (
              <div>
                <p>
                  <strong>Favourite Programming Language:</strong>{" "}
                  {formData.programmingLanguage}
                </p>
                <p>
                  <strong>Years of Experience:</strong> {formData.experience}
                </p>
              </div>
            )}

            {formData.surveyTopic === "health" && (
              <div>
                <p>
                  <strong>Exercise Frequency:</strong> {formData.exerciseFreq}
                </p>
                <p>
                  <strong>Diet Preference:</strong> {formData.dietPreference}
                </p>
              </div>
            )}

            {formData.surveyTopic === "education" && (
              <div>
                <p>
                  <strong>Highest Qualification:</strong>{" "}
                  {formData.qualification}
                </p>
                <p>
                  <strong>Field of Study:</strong> {formData.fieldOfStudy}
                </p>
              </div>
            )}

            <p>
              <strong>Feedback:</strong> {formData.feedback}
            </p>

            {additionalQuestions.length > 0 && (
              <div>
                <h3>Additional Questions</h3>
                {additionalQuestions.map((question) => (
                  <div key={question.id}>
                    <p>
                      <strong>{question.question}</strong>: {question.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyForm;
