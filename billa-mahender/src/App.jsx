import React from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import DocumentsSection from './components/DocumentsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProfileSection />
        <DocumentsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;