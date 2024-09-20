import React, { useState } from 'react';


function ServiceList({ services, updateService, deleteService }) {
  const [editingService, setEditingService] = useState(null);

  const handleEditClick = (service) => {
    setEditingService(service);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (editingService.name && editingService.description && editingService.price) {
      updateService(editingService);
      setEditingService(null);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div>
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <ul className="list-group">
          {services.map((service) => (
            <li key={service.id} className="list-group-item">
              {editingService && editingService.id === service.id ? (
                <form onSubmit={handleUpdateSubmit}>
                  <input 
                    type="text" 
                    value={editingService.name} 
                    onChange={(e) => 
                      setEditingService({ ...editingService, name: e.target.value })
                    } 
                    className="form-control mb-2"
                  />
                  <input 
                    type="text" 
                    value={editingService.description} 
                    onChange={(e) => 
                      setEditingService({ ...editingService, description: e.target.value })
                    } 
                    className="form-control mb-2"
                  />
                  <input 
                    type="number" 
                    value={editingService.price} 
                    onChange={(e) => 
                      setEditingService({ ...editingService, price: e.target.value })
                    } 
                    className="form-control mb-2"
                  />
                  <button type="submit" className="btn btn-success me-2">Update</button>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setEditingService(null)}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <div>
                    <strong>{service.name}</strong> - {service.description} - ${service.price}
                  </div>
                  <button 
                    className="btn btn-warning me-2" 
                    onClick={() => handleEditClick(service)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => deleteService(service.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServiceList;


