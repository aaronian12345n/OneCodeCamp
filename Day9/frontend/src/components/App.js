import React, { useState } from 'react';

function App() {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleDeliveryAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleOrderChange = (index, value, key) => {
    const newOrders = [...orders];
    newOrders[index] = { ...newOrders[index], [key]: value };
    setOrders(newOrders);
  };

  const handleAddOrder = () => {
    setOrders([...orders, { itemName: '', quantity: 0 }]);
  };

  const handleRemoveOrder = (index) => {
    const newOrders = orders.filter((order, i) => i !== index);
    setOrders(newOrders);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Order Form</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Customer Name:</label>
            <input type="text" value={customerName} onChange={handleCustomerNameChange} />
          </div>
          <div>
            <label>Delivery Address:</label>
            <input type="text" value={deliveryAddress} onChange={handleDeliveryAddressChange} />
          </div>
          <div>
            <label>Contact Number:</label>
            <input type="text" value={contactNumber} onChange={handleContactNumberChange} />
          </div>
          <div>
            <h3>Orders:</h3>
            {orders.map((order, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Item Name"
                  value={order.itemName}
                  onChange={(e) => handleOrderChange(index, e.target.value, 'itemName')}
                />
                <input
                  type="number"
                  min="0"
                  value={order.quantity}
                  onChange={(e) => handleOrderChange(index, e.target.value, 'quantity')}
                />
                <button type="button" onClick={() => handleRemoveOrder(index)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={handleAddOrder}>Add Order</button>
          </div>
          <button type="submit">Submit Order</button>
        </form>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Submitted Information</h2>
              <p>Customer Name: {customerName}</p>
              <p>Delivery Address: {deliveryAddress}</p>
              <p>Contact Number: {contactNumber}</p>
              <h3>Orders:</h3>
              <ul>
                {orders.map((order, index) => (
                  <li key={index}>
                    {order.quantity} x {order.itemName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
