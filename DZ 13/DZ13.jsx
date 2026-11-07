import React from 'react';

const UserCard = ({ name, age, email }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.text}><strong>Возраст:</strong> {age} лет</p>
      <p style={styles.text}><strong>Email:</strong> {email}</p>
    </div>
  );
};

const styles = {
  card: { border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '12px 0', backgroundColor: '#f9f9f9', maxWidth: '300px' },
  name: { margin: '0 0 8px 0', color: '#333' },
  text: { margin: '4px 0', color: '#666' }
};

export default UserCard;
