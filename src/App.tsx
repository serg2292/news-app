import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LayoutPage from './pages/LayoutPage/LayoutPage';
import NewsPage from './pages/NewsPage/NewsPage';

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