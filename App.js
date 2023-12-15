import React, { useState } from 'react'
import HeroSection from './components/HeroSection'
import FeaturedRestaurants from './components/FeaturedRestaurants'
import HowItWorks from './components/HowItWorks'
import Modal from './components/Modal'
import './App.css'

function Search() {
  const [query, setQuery] = useState('')
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const openModal = (content) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setModalContent('')
    setIsModalOpen(false)
  }

  return (
    <div className="App">
      <main className="container">
        <HeroSection />
        <FeaturedRestaurants openModal={openModal} />
        <HowItWorks />
        <Search />

        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          content={modalContent}
        />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Restaurant Reservation App</p>
        </div>
      </footer>
    </div>
  )
}

export default App
