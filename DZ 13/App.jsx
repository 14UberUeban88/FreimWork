import React from 'react';
import UserCard from './UserCard';

function App() {
  const users = [
    { id: 1, name: 'Иван Иванов', age: 25, email: 'ivan@example.com' },
    { id: 2, name: 'Мария Сидорова', age: 30, email: 'maria@example.com' },
    { id: 3, name: 'Алексей Петров', age: 19, email: 'alex@example.com' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', 
    alignItems: 'center',  justifyContent: 'center', minHeight: '100vh', gap: '10px' }}>
      <h1>Список пользователей</h1>
      <div style={{ display: 'flex', 
        flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>

        {users.map(user => (
          <UserCard 
            key={user.id} 
            name={user.name} 
            age={user.age} 
            email={user.email} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
