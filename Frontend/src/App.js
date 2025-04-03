import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop"; // ✅ Scroll Fix

// Lazy Loading for Performance Optimization
const Header = lazy(() => import("./Component/Header"));
const Feature = lazy(() => import("./Component/Feature"));
const Ourservice = lazy(() => import("./Component/Ourservice"));
const Offer = lazy(() => import("./Component/Offer"));
const Pricing = lazy(() => import("./Component/Pricing"));
const ClientReviews = lazy(() => import("./Component/ClientReviews"));
const About = lazy(() => import("./Component/About"));
const Contact = lazy(() => import("./Component/Contact"));
const SocialFeed = lazy(() => import("./Component/SocialFeed"));
const VirtualTour = lazy(() => import("./Component/VirtualTour"));
const CalorieTracker = lazy(() => import("./Component/CalorieTracker"));
const Chatbot = lazy(() => import("./Component/ChatBot"));

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
                              <h2 style={{ textAlign: "center" }}> Gym 360° Virtual Tour (VR Ready)</h2>
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
