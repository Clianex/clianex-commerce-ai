// app/page.jsx
import Hero from './hero';
import Benefits from './benefits';
import Testimonials from './testimonials';
import Footer from './footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
}
