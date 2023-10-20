import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './component/Header.jsx'
import Profil from './component/Profil.jsx'
import Tentang from './component/Tentang.jsx'
import Visi from './component/visi.jsx'
import Struktur from './component/Struktur.jsx'
import Ekstrakulikuler from './component/Ekstrakulikuler.jsx'
import Informasi from './component/Informasi.jsx'
import Footer from './component/Footer.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <Header />
    <Profil />
    <Tentang />
    <Visi />
    <Struktur />
    <Ekstrakulikuler />
    <Informasi />
    <Footer />
    </div>
  </React.StrictMode>,
)
