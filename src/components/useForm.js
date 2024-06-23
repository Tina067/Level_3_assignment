import { useState, useEffect } from 'react';

const useForm = (initialValues, validate, submitCallback) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        fetchAdditionalQuestions(values.surveyTopic).then(() => {
          submitCallback();
          setIsSubmitting(false);
        });
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting, submitCallback, values.surveyTopic]);

  const fetchAdditionalQuestions = async (topic) => {
    try {
      // Replace with actual API call
      const response = await fetch(`https://66785ac80bd45250561e6841.mockapi.io/surveydata/${topic.toLowerCase()}`);
      const data = await response.json();
      setAdditionalQuestions(data);
    } catch (error) {
      console.error('Error fetching additional questions:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    additionalQuestions,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
