import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Spinner, Center } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import Adsense from '../components/Adsense';
// Lazy load pages for better performance
const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));

// Loading component
const LoadingFallback = () => (
  <Center minH="60vh">
    <Spinner size="xl" color="purple.500" thickness="4px" />
  </Center>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Box
          minH="100vh"
          bg="#0f0a19"
          color="gray.500"
          display="flex"
          flexDirection="column"
        >
          <Navbar />
          <Box flex="1">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
            </Suspense>
          </Box>
          {/* SAFE GLOBAL AD (below content, above footer) */}
          <div style={{ maxWidth: "1100px", margin: "40px auto" }}>
            <Adsense slot="8351730639" />
          </div>
          <Footer />
        </Box>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
