import { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      onLogin(formData); // pass data to parent
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.email && <p className="text-sm text-red-500 mt-2">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.password && <p className="text-sm text-red-500 mt-2">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
