import React from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <Layout>
      <div style={{width: '400px', border: '1px solid #000'}}>
        <h1>Layout Works</h1>
      </div>
    </Layout>
  );
}

export default App;
