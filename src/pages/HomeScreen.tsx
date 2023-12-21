import React from 'react';
import Dashboard from '../components/Dashboard';
import Form from '../components/Form';

const Home: React.FC = () => {
  return (
    <div style={{ margin: "3rem auto" }}>
      <Form />
      <Dashboard />
    </div>
  );
};

export default Home;