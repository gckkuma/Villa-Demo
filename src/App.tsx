/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VillaDetails from './pages/VillaDetails';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingFloat from './components/BookingFloat';
import { motion, AnimatePresence } from 'motion/react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/villa" element={<PageWrapper><VillaDetails /></PageWrapper>} />
              <Route path="/amenities" element={<PageWrapper><Amenities /></PageWrapper>} />
              <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
              <Route path="/booking" element={<PageWrapper><Booking /></PageWrapper>} />
              <Route path="/location" element={<PageWrapper><Location /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <BookingFloat />
      </div>
    </Router>
  );
}
