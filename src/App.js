import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ContentGallery from './components/ContentGallery';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Friends from "./Friends";
import Contacts from "./Contacts";
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Gallery from './Gallery';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  
  const { t } = useTranslation("translation");

  const sidebarItems = [
      { menu: t("sidebar.menu") },
      { webs: t("sidebar.credits")},
      { text: t("sidebar.home"), icon: "home", to: "/" },
      { text: t("sidebar.friends"), icon: "users", to: "/Friends" },
      { text: t("sidebar.contacts"), icon: "comment", to: "/Contacts" }
  ];

  const friends = [
    { titolo_1 : t("friends.titolo_1")},
    { titolo_2 : t("friends.titolo_2")},
    { titolo_3 : t("friends.titolo_3")},
    { link1: "Mistos – Escuela de fotografía", href: "#" },
    { link2: "Shoot 4 Change – Change the World with a Click!", href: "#" },
    { link3: t("friends.ue"), href: "#" },
    { link4: "València en Bici", href: "#" },
    { link5: "GRACQ – Les cyclistes au quotidien", href: "#" },
    { link6: "Il Post", href: "#" },
    { link7: "Articolo 21 – Per la libertà di informazione e comunicazione", href: "#" },
    { link8: t("friends.em"), href: "#" },
    { link9: t("friends.am"), href: "#" },
];

  return (
    <Router>
      <Sidebar items={sidebarItems} />
      <Routes>
        <Route path="/" element={
          <>
            {console.log('Rendering Home Page')}
            <Header titolo="Silvia Nives Vincitorio" sottotitolo={t("home_header.subtitle")} pulsante=" Visualizza la mia galleria" link="#" />
            <p className='container text-center fst-italic mt-5 pt-5  text-light'>Breve descrizione personale da inserire come introduzione ai contenuti Breve descrizione personale da inserire come introduzione ai contenuti Breve descrizione personale da inserire come introduzione ai contenuti Breve descrizione personale da inserire come introduzione ai contenuti Breve descrizione personale da inserire come introduzione ai contenuti Breve descrizione personale da inserire come introduzione ai contenuti Breve descrizione personale da inserire come introduzione ai contenuti Breve descrizione personale da inserire come introduzione ai contenuti</p>
            <ContentGallery />
          </>
        } />
        <Route path="/Friends" element={
          <>
            <Header titolo="Siti amici" sottotitolo="Selezione dei siti web amici al mio" />
            <Friends items={friends} />
          </>
        } />
        <Route path="/Contacts" element={
          <>
            <Header titolo="Contattami" sottotitolo="Troverà il modulo di contatto qui sotto!" />
            <Contacts />
          </>
        } />
        <Route path="/Gallery/:gallery" element={
          <>
            <Gallery />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
