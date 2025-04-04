import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./Component/Navbar.jsx";
import Footer from "./Component/Footer.jsx";
import ScrollToTop from "./Component/ScrollToTop.js"; // ✅ Scroll Fix

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
const CalorieTracker = lazy(() => import("./Component/CalorieTracker.jsx"));
const Chatbot = lazy(() => import("./Component/ChatBot.jsx"));

function App() {
   return (
      <Router>
         <ScrollToTop /> {/* ✅ Refresh ke baad scroll upar jayega */}
         <Navbar />

         <Suspense fallback={<p>Loading...</p>}>
            <Routes>
               <Route
                  path="/"
                  element={
                     <>
                        <Header />
                        <Feature />
                        <Ourservice />
                        <Offer />
                        <Pricing />
                        <ClientReviews />
                        
                        <Suspense fallback={<p>Loading Calorie Tracker...</p>}>
                           <CalorieTracker />
                        </Suspense>
                        <SocialFeed />

                        <Suspense fallback={<p>Loading Virtual Tour...</p>}>
                           <div style={{ width: "100%", height: "100vh" }}>
                              <h2 style={{ textAlign: "center" }}>Gym 360° Virtual Tour (VR Ready)</h2>
                              <VirtualTour />
                           </div>
                        </Suspense>

                        <About />
                        <Contact />
                     </>
                  }
               />
            </Routes>
         </Suspense>

         <Footer />
         <Chatbot />
      </Router>
   );
}

export default App;
