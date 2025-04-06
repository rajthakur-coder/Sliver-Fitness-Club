import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./Component/Navbar.jsx";
import Footer from "./Component/Footer.jsx";
import ScrollToTop from "./Component/ScrollToTop.js";

import CalorieTracker from "./Component/CalorieTracker.jsx";

// Lazy Loaded Components
const Header = lazy(() => import("./Component/Header.jsx"));
const Feature = lazy(() => import("./Component/Feature.jsx"));
const Ourservice = lazy(() => import("./Component/Ourservice.jsx"));
const Offer = lazy(() => import("./Component/Offer.jsx"));
const Pricing = lazy(() => import("./Component/Pricing.jsx"));
const ClientReviews = lazy(() => import("./Component/ClientReviews.jsx"));
const About = lazy(() => import("./Component/About.jsx"));
const Contact = lazy(() => import("./Component/Contact.jsx"));
const SocialFeed = lazy(() => import("./Component/SocialFeed.jsx"));
const VirtualTour = lazy(() => import("./Component/VirtualTour.jsx"));

const Chatbot = lazy(() => import("./Component/ChatBot.jsx"));

function App() {
   return (
      <div className="App">
      <Router>
         <ScrollToTop />
         <Navbar />

         <Suspense fallback={<p>Loading...</p>}>
            <Routes>
               {/* 🏠 Home Page */}
               <Route path="" element={<Header /> } />
                {/* 📌 Individual Pages */}
               <Route path="/Home" element={<Header />} />
               <Route path="/features" element={<Feature />} />
               <Route path="/services" element={<Ourservice />} />
               <Route path="/offer" element={<Offer />} />
               <Route path="/pricing" element={<Pricing />} />
               <Route path="/reviews" element={<ClientReviews />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/social" element={<SocialFeed />} />
               <Route path="/calorie" element={<CalorieTracker/>} />
             

               {/* 🧭 Virtual Tour */}
               <Route path="/virtualtour" element={ <VirtualTour />} />

              
            </Routes>
         </Suspense>

         <Footer />
         <Chatbot />
      </Router>
      </div>
   );
}

export default App;
