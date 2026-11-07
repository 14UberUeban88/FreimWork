import React from 'react';
// Импортируем новый инструмент для создания маршрутов через массивы
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

// 1. Компоненты страниц
const Home = () => (
  <div style={styles.page}>
    <h2>Главная страница</h2>
    <p>Добро пожаловать на наш сайт, созданный на React!</p>
  </div>
);

const About = () => (
  <div style={styles.page}>
    <h2>О нас</h2>
    <p>Мы изучаем фреймворк React и учимся настраивать маршрутизацию.</p>
  </div>
);

const Contacts = () => (
  <div style={styles.page}>
    <h2>Контакты</h2>
    <p>Свяжитесь с нами по email: info@example.com или по телефону: +7 (999) 000-00-00</p>
  </div>
);

// 2. Главный шаблон (Layout), который задает структуру сайта
const Layout = () => (
  <div style={styles.container}>
    <h1>Наш сайт с маршрутизацией</h1>

    {/* Навигация, которая видна ВСЕГДА */}
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Главная</Link>
      <Link to="/about" style={styles.link}>О нас</Link>
      <Link to="/contacts" style={styles.link}>Контакты</Link>
    </nav>

    {/* <Outlet /> — это место, куда динамически подставляются наши страницы */}
    <div style={styles.content}>
      <Outlet />
    </div>
  </div>
);

// 3. НАСТРОЙКА МАРШРУТОВ (Выглядит как обычный список данных, а не форум)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Главный шаблон сайта
    children: [
      { path: '/', element: <Home /> },        // Если открыт корень — вставляем Главную
      { path: 'about', element: <About /> },    // Если /about — вставляем О нас
      { path: 'contacts', element: <Contacts /> } // Если /contacts — вставляем Контакты
    ]
  }
]);

// 4. Основной компонент приложения, который просто запускает эту карту маршрутов
function App() {
  return <RouterProvider router={router} />;
}

// Стили приложения
const styles = {
  container: { fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' },
  nav: { display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px 0', borderBottom: '2px solid #eee', marginBottom: '20px' },
  link: { textDecoration: 'none', color: '#007bff', fontWeight: 'bold', fontSize: '18px' },
  content: { padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '4px' },
  page: { minHeight: '100px' }
};

export default App;
