import React, { useState } from 'react';

const ContactxForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    dynamicFields: [
      { id: 1, label: 'Phone Number', value: '' },
      { id: 2, label: 'Address', value: '' }
    ]
  });

  // Handle change for both static and dynamic fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'dynamicField') {
      const { id } = e.target.dataset;
      setFormData((prevData) => {
        const updatedFields = prevData.dynamicFields.map((field) =>
          field.id === parseInt(id) ? { ...field, value } : field
        );
        return { ...prevData, dynamicFields: updatedFields };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Example of submitting data to a backend or logging it
    console.log('Form submitted:', formData);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      dynamicFields: [
        { id: 1, label: 'Phone Number', value: '' },
        { id: 2, label: 'Address', value: '' }
      ]
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Dynamic Fields */}
      {formData.dynamicFields.map((field) => (
        <div key={field.id}>
          <label>{field.label}:</label>
          <input
            type="text"
            name="dynamicField"
            data-id={field.id}
            value={field.value}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactxForm;
