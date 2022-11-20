import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Contacts from 'pages/Contacts/Contacts';
import AppBar from './AppBar/AppBar';
import Home from 'pages/Home/Home';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
