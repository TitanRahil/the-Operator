
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Legal from './pages/Legal';

import ScrollToTop from './components/ScrollToTop';

import PromptMastery from './pages/products/PromptMastery';
import ContentSystem from './pages/products/ContentSystem';
import AgencyArchitect from './pages/products/AgencyArchitect';

import Blog from './pages/Blog';
import FreelancerGuide from './pages/blogs/FreelancerGuide';
import PromptFix from './pages/blogs/PromptFix';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/prompt-mastery" element={<PromptMastery />} />
          <Route path="products/content-system" element={<ContentSystem />} />
          <Route path="products/agency-architect" element={<AgencyArchitect />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/freelancers-guide" element={<FreelancerGuide />} />
          <Route path="blog/prompt-fix" element={<PromptFix />} />
          <Route path="about" element={<About />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
