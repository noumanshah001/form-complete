import React, { useEffect, useState } from 'react';
import './Table.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Table() {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setLocationState] = useState([]);

  useEffect(() => { 
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    setLocationState(storedData); 
  }, []);

  useEffect(() => {
    if (location.state) {
      setLocationState((prevData) => {
        const newData = [...prevData, location.state];
        localStorage.setItem('formData', JSON.stringify(newData));
        return newData;
      });
    }
  }, [location.state]);

  const handleRowClick = (rowData) => {
    navigate('/form', { state: rowData });
  };

  const handleDelete = (index) => {
    const newData = [...state];  
    newData.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(newData));
    setLocationState(newData);
  };

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone no</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((rowData, index) => (
            <tr key={index}>
              <td>{rowData.email}</td>
              <td>{rowData.firstname}</td>
              <td>{rowData.lastname}</td>
              <td>{rowData.phoneno}</td>
              <td>{rowData.password}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
