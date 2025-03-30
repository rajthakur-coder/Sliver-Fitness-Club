import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Feature from './Component/Feature'
import Offer from './Component/Offer'
import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Ourservice from './Component/Ourservice';
import Pricing from "./Component/Pricing";
import ClientReviews from "./Component/ClientReviews";
import Chatbot from "./Component/ChatBot";


function App() {
   return (
      <div className='App'>
         <Navbar />
         <Header />
         <Feature />
         <Ourservice />
         <Offer />
         <Pricing />
         <ClientReviews />
         <About />
         <Contact />
         <Footer />
         <Chatbot />
      </div>

   )
}
export default App;



