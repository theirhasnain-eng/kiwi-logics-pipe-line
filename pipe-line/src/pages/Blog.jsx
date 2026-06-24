import './styling/blog.css';
import Navebar from '../components/Navebar';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <main className="page-section">
          <Navebar/>
      <h1>Blog Page</h1>
      <Footer/>
    </main>
  );
}
