import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/BlogData";
import "./styling/artical.css";
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaLink } from "react-icons/fa6";

export default function Article() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const article = blogs.find((blog) => blog.slug === slug);

  if (!article) {
    return <h1>Article Not Found</h1>;
  }

  const relatedBlogs = blogs.filter(
    (blog) =>
      blog.category.toLowerCase() === article.category.toLowerCase() &&
      blog.id !== article.id,
  );

  return (
    <section className="article-page">
      <div className="article-container">
        <Link to="/blog" className="back-btn">
          ← Back to Blog
        </Link>

        <div className="breadcrumb" id="breadcrumb">
          <Link to="/" className="blog">
            Home
          </Link>
          /
          <Link to="/blog" className="blog">
            Blog
          </Link>
          /<span>Article</span>
        </div>

        <span className="article-category">{article.category}</span>

        <h1 className="article-title">{article.title}</h1>

        <p className="article-description">{article.description}</p>

        <div className="article-author">
          <img src={article.imag} alt={article.author} />

          <div className="author-info">
            <span className="author-name">{article.author}</span>

            <span className="author-meta">
              {article.date} • {article.readTime}
            </span>
          </div>
        </div>

        <div className="article-divider"></div>

        <img
          src={article.image}
          alt={article.title}
          className="article-image"
        />

        <div className="article-content">
          {article.content.map((section, index) =>
            section.type === "heading" ? (
              <h3 key={index} className="content-heading">
                {section.text}
              </h3>
            ) : (
              <p key={index} className="content-paragraph">
                {section.text}
              </p>
            ),
          )}
        </div>
        <div className="article-divider"></div>
        <div className="share-article">
          <h3>Share this article</h3>

          <div className="share-icons">
            <a href="#" className="share-icon" aria-label="Share on X">
              <FaXTwitter />
            </a>

            <a href="#" className="share-icon" aria-label="Share on Facebook">
              <FaFacebookF />
            </a>

            <a href="#" className="share-icon" aria-label="Share on LinkedIn">
              <FaLinkedinIn />
            </a>

            <button className="share-icon" aria-label="Copy Link">
              <FaLink />
            </button>
          </div>
        </div>
      </div>
      <section className="related-artical">
        {relatedBlogs.length > 0 && (
          <section className="related-section">
            <h2>Related Articles</h2>

            <div className="related-grid">
              {relatedBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.slug}`}
                  className="related-card"
                >
                  <div className="related-image">
                    <img src={blog.image} alt={blog.title} />
                  </div>

                  <div className="related-content">
                    <span>{blog.category}</span>

                    <h3>{blog.title}</h3>

                    <p>{blog.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </section>
    </section>
  );
}
