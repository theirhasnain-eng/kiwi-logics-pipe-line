import "./styling/blog.css";
import { blogs } from "../data/BlogData";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Navebar from "../components/Navebar";
import Footer from "../components/Footer";
import { person1, person2, person3, person4 } from "../assets";
import { strategy, strategy1, guide, technology, sales } from "../assets";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBlogs = blogs.filter((blog) => {
    const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "All" || blog.category === category;

    return matchSearch && matchCategory;
  });
  return (
    <main className="page-section">
      {/* HERO SECTION */}

      <section className="blog-hero">
        <span className="hero-badge">Our Blog</span>

        <h1>Insights & Updates</h1>

        <p>
          Stay up to date with the latest CRM tips, sales strategies, and
          product updates from our team.
        </p>

        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-text">
            Home /{" "}
          </Link>
          <Link to="/blog" className="breadcrumb-blog">
            Blog
          </Link>
        </div>
      </section>

      {/* SEARCH */}

      <section className="blog-search">
        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FILTER BUTTONS */}

        <div className="filter-buttons">
          <button onClick={() => setCategory("All")}>All</button>

          <button onClick={() => setCategory("Strategy")}>Strategy</button>

          <button onClick={() => setCategory("Sales")}>Sales</button>

          <button onClick={() => setCategory("Technology")}>Technology</button>

          <button onClick={() => setCategory("Guide")}>Guide</button>
        </div>

        {/* BLOGS */}

        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blog-content">
                <div className="blog-detail">
                  <h3 className="blog-category">{blog.category}</h3>
                  <span className="date">{blog.date}</span>
                </div>

                <h2>{blog.title}</h2>

                <p>{blog.description}</p>

                <div className="blog-footer">
                  <div className="logo">
                    <img src={blog.imag} alt="" />
                  </div>
                  <div className="text">
                    <span className="auther">{blog.author}</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="news-letter">
        <div className="news-main">
          <h3>Newsletter</h3>
          <h1>Stay in the Loop</h1>
          <p>
            Subscribe to our newsletter for the latest CRM tips, sales
            strategies, and product updates delivered to your inbox.
          </p>
          <div className="email-info">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
