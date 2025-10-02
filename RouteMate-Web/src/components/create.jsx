import { useState } from "react";

function Create() {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    description: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Party created:", formData);
  };

  return (
    <div className="flex justify-center items-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-amber-100 p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create a Party 🎉
        </h2>

        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-400"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Destination</span>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-400"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-400"
            rows="3"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Type</span>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-amber-400"
            required
          >
            <option value="">Select type</option>
            <option value="trip">Trip</option>
            <option value="birthday">Birthday</option>
            <option value="wedding">Wedding</option>
            <option value="other">Other</option>
          </select>
        </label>

        <button
          type="submit"
          className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
