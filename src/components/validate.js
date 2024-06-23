const validate = (values) => {
    let errors = {};
  
    if (!values.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.surveyTopic) {
      errors.surveyTopic = 'Survey Topic is required';
    }
  
    if (values.surveyTopic === 'technology') {
      if (!values.programmingLanguage) {
        errors.programmingLanguage = 'Favourite Programming Language is required';
      }
  
      if (!values.experience) {
        errors.experience = 'Years of Experience is required';
      }
    }
  
    if (values.surveyTopic === 'health') {
      if (!values.exerciseFreq) {
        errors.exerciseFreq = 'Exercise Frequency is required';
      }
  
      if (!values.dietPreference) {
        errors.dietPreference = 'Diet Preference is required';
      }
    }
  
    if (values.surveyTopic === 'education') {
      if (!values.qualification) {
        errors.qualification = 'Highest Qualification is required';
      }
  
      if (!values.fieldOfStudy.trim()) {
        errors.fieldOfStudy = 'Field of Study is required';
      }
    }
  
    if (!values.feedback) {
      errors.feedback = 'Feedback is required';
    } else if (values.feedback.length < 50) {
      errors.feedback = 'Feedback must be at least 50 characters long';
    }
  
    return errors;
  };
  
  export default validate;
  