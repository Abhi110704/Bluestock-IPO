import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const API_URL = '/api/ipo/';

function AdminDashboard() {
  const [ipos, setIpos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add'); // 'add' or 'edit'
  const [currentIPO, setCurrentIPO] = useState({ id: null, company_name: '', open_date: '', ipo_price: '' });

  // Fetch IPOs from API
  const fetchIPOs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch IPOs');
      const data = await res.json();
      setIpos(data.results || data); // paginated or plain
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchIPOs();
  }, []);

  const openAddModal = () => {
    setModalType('add');
    setCurrentIPO({ id: null, company_name: '', open_date: '', ipo_price: '' });
    setShowModal(true);
  };

  const openEditModal = (ipo) => {
    setModalType('edit');
    setCurrentIPO({ ...ipo });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentIPO((prev) => ({ ...prev, [name]: value }));
  };

  // Add or Edit IPO
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      let res;
      if (modalType === 'add') {
        res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentIPO),
        });
      } else {
        res = await fetch(`${API_URL}${currentIPO.id}/`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentIPO),
        });
      }
      if (!res.ok) throw new Error('Failed to save IPO');
      closeModal();
      fetchIPOs();
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete IPO
  const handleDelete = async (id) => {
    setError(null);
    if (!window.confirm('Delete this IPO?')) return;
    try {
      const res = await fetch(`${API_URL}${id}/`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete IPO');
      fetchIPOs();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>IPO Admin Dashboard</h2>
      <button onClick={openAddModal}>Add IPO</button>
      {loading ? (
        <p>Loading IPOs...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <table className="ipo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Open Date</th>
              <th>IPO Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ipos.map((ipo) => (
              <tr key={ipo.id}>
                <td>{ipo.id}</td>
                <td>{ipo.company_name}</td>
                <td>{ipo.open_date}</td>
                <td>{ipo.ipo_price}</td>
                <td>
                  <button onClick={() => openEditModal(ipo)}>Edit</button>
                  <button onClick={() => handleDelete(ipo.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{modalType === 'add' ? 'Add IPO' : 'Edit IPO'}</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Company Name:
                <input name="company_name" value={currentIPO.company_name} onChange={handleChange} required />
              </label>
              <label>
                Open Date:
                <input name="open_date" type="date" value={currentIPO.open_date} onChange={handleChange} required />
              </label>
              <label>
                IPO Price:
                <input name="ipo_price" type="number" value={currentIPO.ipo_price} onChange={handleChange} required />
              </label>
              <button type="submit">{modalType === 'add' ? 'Add' : 'Update'}</button>
              <button type="button" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard; 