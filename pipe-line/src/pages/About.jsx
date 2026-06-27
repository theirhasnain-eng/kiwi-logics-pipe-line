import './styling/about.css';
import { useEffect,useRef } from 'react';
import Navebar from '../components/Navebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import missionImg from '../assets/mission.jpg'
import { RiShieldCheckLine} from 'react-icons/ri';
import person1 from '../assets/alex.png'
import person2 from '../assets/priya.png'
import person3 from '../assets/kim.png'
import person4 from '../assets/maya.png'




const values = [
  {
    icon: <RiShieldCheckLine />,
    title: "Innovation First",
    desc: "We leverage cutting-edge AI and machine learning to give sales teams an unfair advantage, constantly pushing the boundaries of what CRM can do."
  },
  {
    icon: <RiShieldCheckLine />,
    title: "Simplicity Matters",
    desc: "Powerful doesn't have to mean complicated. We obsess over making complex workflows feel effortless so your team can focus on selling."
  },
    {
    icon: <RiShieldCheckLine />,
    title: "Customer Success",
    desc: "Your success is our success. We measure our performance by the deals you close, the revenue you generate, and the relationships you build."
  },
]

const team = [
  {
    image: person1,
    name: "Alex Rivera",
    role: "CEO & Co-Founder",
  },
  {
    image: person2,
    name: "Priya Sharma",
    role: "CTO & Co-Founder",
  },
   {
    image: person3,
    name: "Jordan Kim",
    role: "VP of Product",
  },
   {
    image: person4,
    name: "Head of Customer Success",
    role: "CTO & Co-Founder",
  },
];

export default function About() {
   const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    cardsRef.current.forEach(c => c && observer.observe(c))
    return () => observer.disconnect()
  }, [])
  return (
    
    <main className="page-section">
      <Navebar/>
          <section className="contact-hero">
            <div className="main">
              <h1>About PipelineIQ</h1>
              <p>Founded in 2020, we're on a mission to democratize CRM and make world-class sales tools accessible to every team.</p>
              <div className="btn">
                <Link to="/" className="btn-text">Home</Link>
                <div>/</div>
                <Link to="/about" className="btn-text">About</Link>
              </div>
            </div>
          </section>

          <section className='our-mission'>
            <div className="mission-main">
              <div className="main-left">
                <h5>Our Mission</h5>
                <h1>Democratizing CRM for Every Sales Team</h1>
                <p><span>
                   “To build the most intuitive, powerful CRM platform that empowers sales teams of every size to close more deals and build lasting customer relationships.”
                </span> <br/>
                  PipelineIQ was founded in 2020 by a team of sales leaders and engineers who were frustrated by the complexity and cost of existing CRM solutions. We believed that world-class sales tools shouldn't require a six-month implementation or a six-figure budget.
                  <br/>
                  

                  Today, PipelineIQ powers over 10,000 sales teams worldwide, from two-person startups to Fortune 500 enterprises. Our AI-powered platform combines the simplicity of modern design with the depth of enterprise-grade functionality, helping teams close 40% more deals on average.
                </p>
              </div>
              <div className="main-right">
                     <img src={missionImg} alt="mission" />
              </div>
            </div>

          </section>
          <section className='value'>
            <div className="value-text">
              <h1>Our Values</h1>
              <p>The principles that drive every feature we build and every decision we make.</p>
            </div>
            
      <div className="features-grid" id='value-grid'>
        {values.map((f, i) => (
          <div
            key={f.title}
            className="feature-card reveal value-card"
            ref={el => cardsRef.current[i] = el}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="feature-icon icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
          </section>
          <section className="team-section">
                 <div className="team-heading">
                    <h1>Meet Our Team</h1>
                    <p>The people building the future of CRM.</p>
                  </div>

                  <div className="team-grid">
                     {team.map((member, index) => (
                      <div className="team-card" key={index}>
                      <img src={member.image} alt={member.name} />
                     <h3>{member.name}</h3>
                      <p>{member.role}</p>
                      </div>
                        ))}
                     </div>
  
               </section>


          <section className="contact-hero">
            <div className="main " id='team'>
              <h1>Join Our Growing Team</h1>
              <p>We're always looking for talented people who are passionate about building great products. See our open positions.</p>
              <div className="btn">
                <Link to="/contact" className="team-btn">View Open Roles</Link>
                
              </div>
            </div>
          </section>

    
    <Footer/>
    </main>
  );
}
