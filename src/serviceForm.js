import React, { useState } from 'react';

function ServiceForm({ addService }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      const newService = {
        id: Date.now(),
        name,
        description,
        price: parseFloat(price),
      };
      addService(newService);
      setName('');
      setDescription('');
      setPrice('');
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Service Name</label>
        <input 
          type="text" 
          className="form-control" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input 
          type="text" 
          className="form-control" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input 
          type="number" 
          className="form-control" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Service</button>
    </form>
  );
}

export default ServiceForm;
