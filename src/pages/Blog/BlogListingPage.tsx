import React from 'react';
import { Link } from 'react-router-dom';
import './BlogListingPage.css'; // This CSS file will be modified

// --- Dummy Data for Blog Posts (same as before) ---
const blogPosts = [
  {
    id: 'how-logisty-boosts-efficiency',
    title: 'How Logisty Boosts Efficiency for Small Businesses',
    excerpt: 'Discover how our real-time scheduling and peer-to-peer network can transform your small business logistics operations, saving you time and money.',
    imageUrl: 'https://picsum.photos/id/10/400/250',
    date: 'July 8, 2025',
    author: 'Logisty Team',
  },
  {
    id: 'the-future-of-freelance-delivery',
    title: 'The Future is Flexible: Embracing Freelance Delivery Networks',
    excerpt: 'Explore the growing trend of leveraging freelance transporters and how Logisty empowers this dynamic shift in the logistics industry.',
    imageUrl: 'https://picsum.photos/id/20/400/250',
    date: 'July 1, 2025',
    author: 'Logisty Team',
  },
  {
    id: 'ai-in-route-optimization',
    title: 'AI in Logistics: Smart Routes & Real-time Tracking',
    excerpt: 'Learn about the cutting-edge AI behind Logisty\'s intelligent route suggestions and real-time tracking capabilities that ensure seamless deliveries.',
    imageUrl: 'https://picsum.photos/id/30/400/250',
    date: 'June 25, 2025',
    author: 'Logisty Team',
  },
];

export default function BlogListingPage() {
  return (
    <>
      <div className="blog-listing-page">
        <h1 className="blog-listing-title">Logisty Insights & News</h1>
        <p className="blog-listing-description">Stay updated with our latest news, industry insights, and product updates.</p>

        <div className="blog-feed">
          {blogPosts.map((post) => (
            // Wrap the entire card content in a Link component
            <Link to={`/blog/${post.id}`} key={post.id} className="blog-card-link"> {/* New wrapper Link */}
              <div className="blog-card blog-card--vertical">
                <img src={post.imageUrl} alt={post.title} className="blog-card-image" />
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-meta">{post.date} by {post.author}</p>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  {/* Removed the 'Read More' Link here */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}