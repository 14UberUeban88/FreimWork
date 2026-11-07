import React, { useState } from 'react';

// 1. Создаем компонент UserStatus, который принимает проп isLoggedIn
const UserStatus = ({ isLoggedIn }) => {
  return (
    <div style={styles.statusContainer}>
      {/* 2 и 3. Условный рендеринг через тернарный оператор */}
      {isLoggedIn ? (
        <h2 style={styles.welcomeText}>Добро пожаловать, пользователь!</h2>
      ) : (
        <button style={styles.loginBtn}>Войти</button>
      )}
    </div>
  );
};

// 4. Главный компонент приложения
function App() {
  // Создаем состояние для отслеживания: вошел пользователь или нет (по умолчанию false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Функция для переключения состояния при нажатии на кнопку
const toggleLogin = () => {
  // Добавляем логирование в консоль перед изменением состояния
  console.log("Статус isLoggedIn меняется на:", !isLoggedIn);
  setIsLoggedIn(!isLoggedIn);
};


  return (
    <div style={styles.container}>
      <h1>Домашнее задание 11: Условный рендеринг</h1>
      
      {/* Передаем наше состояние внутрь компонента UserStatus */}
      <UserStatus isLoggedIn={isLoggedIn} />

      {/* 5. Кнопка, которая меняет состояние при клике */}
      <button onClick={toggleLogin} style={styles.toggleBtn}>
        {isLoggedIn ? 'Выйти из аккаунта' : 'Эмулировать вход'}
      </button>
    </div>
  );
}

// Аккуратные стили, чтобы всё выглядело красиво
const styles = {
  container: { fontFamily: 'Arial, sans-serif', maxWidth: '450px', margin: '50px auto', padding: '30px', border: '1px solid #e0e0e0', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  statusContainer: { minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' },
  welcomeText: { color: '#2e7d32', margin: 0, fontSize: '20px' },
  loginBtn: { padding: '10px 24px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  toggleBtn: { padding: '10px 20px', fontSize: '14px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', transition: 'background-color 0.2s' }
};

export default App;
