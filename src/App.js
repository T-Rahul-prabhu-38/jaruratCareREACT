import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceForm from './serviceForm';
import ServiceList from './serviceList';
import './App.css'

function App() {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) => 
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="container">
      <h1 className="my-4 title">Jarurat Care Services</h1>
      <ServiceForm addService={addService} />
      <ServiceList 
        services={services} 
        updateService={updateService} 
        deleteService={deleteService} 
      />
    </div>
  );
}

export default App;
