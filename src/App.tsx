import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutPage from './components/Layout/Layout';
import HomePage from './pages/Home/HomePage/HomePage';
import NewsPage from './pages/News/NewsPage/NewsPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
        </Route>
      </Routes>
    </>
  );
}