import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ArticleDetailPage.css'; // Create this CSS file

// --- Dummy Data for Blog Posts (same as in BlogListingPage for consistency) ---
// In a real app, you'd fetch this from a backend API or CMS
const blogPosts = [
  {
    id: 'how-logisty-boosts-efficiency',
    title: 'How Logisty Boosts Efficiency for Small Businesses',
    excerpt: 'Discover how our real-time scheduling and peer-to-peer network can transform your small business logistics operations, saving you time and money.',
    imageUrl: 'https://picsum.photos/id/10/800/500', // Larger image for detail page
    date: 'July 8, 2025',
    author: 'Logisty Team',
    content: `
      <p>In today's fast-paced business world, efficiency is key. For small businesses, managing logistics can be a significant challenge, often leading to wasted time and resources. Logisty offers innovative solutions designed to streamline your operations from pickup to delivery.</p>
      <p>Our **real-time scheduling** feature leverages live data to optimize pickup times, drastically reducing idle periods for your fleet and customers. This means faster turnaround times and more deliveries per day.</p>
      <h3>The Power of Peer-to-Peer</h3>
      <p>Beyond traditional methods, Logisty introduces a robust **peer-to-peer network**. This allows you to connect directly with nearby transporters, ensuring that your parcels are matched with the most efficient delivery option available. This flexibility is particularly beneficial for urgent deliveries or when expanding into new areas without the overhead of fixed fleets.</p>
      <p>By embracing these features, small businesses can achieve unprecedented levels of operational efficiency, improve customer satisfaction, and focus on what they do best: growing their core business.</p>
      <h4>Key Takeaways:</h4>
      <ul>
        <li>Minimize waiting times with dynamic scheduling.</li>
        <li>Access a wider pool of transporters through a connected network.</li>
        <li>Reduce operational costs and improve delivery speed.</li>
      </ul>
    `,
  },
  {
    id: 'the-future-of-freelance-delivery',
    title: 'The Future is Flexible: Embracing Freelance Delivery Networks',
    excerpt: 'Explore the growing trend of leveraging freelance transporters and how Logisty empowers this dynamic shift in the logistics industry.',
    imageUrl: 'https://picsum.photos/id/20/800/500',
    date: 'July 1, 2025',
    author: 'Logisty Team',
    content: `
      <p>The gig economy has reshaped many industries, and logistics is no exception. Freelance delivery networks are becoming an increasingly vital component of modern supply chains, offering unparalleled flexibility and scalability.</p>
      <p>Logisty is at the forefront of this movement, providing a platform that seamlessly connects businesses with a vast network of **freelance transporters**. This model offers several advantages:</p>
      <ol>
        <li>**Scalability**: Easily ramp up or down your delivery capacity based on demand without committing to full-time hires.</li>
        <li>**Cost-Effectiveness**: Reduce overheads associated with vehicle maintenance, fuel, and driver benefits.</li>
        <li>**Wider Coverage**: Access drivers in remote or niche areas that might be underserved by traditional logistics companies.</li>
      </ol>
      <p>Our robust system ensures that all freelance partners meet quality and reliability standards, providing you with peace of mind. Embrace the future of logistics with Logisty's flexible and efficient freelance network.</p>
    `,
  },
  {
    id: 'ai-in-route-optimization',
    title: 'AI in Logistics: Smart Routes & Real-time Tracking',
    excerpt: 'Learn about the cutting-edge AI behind Logisty\'s intelligent route suggestions and real-time tracking capabilities that ensure seamless deliveries.',
    imageUrl: 'https://picsum.photos/id/30/800/500',
    date: 'June 25, 2025',
    author: 'Logisty Team',
    content: `
      <p>Artificial intelligence is no longer a futuristic concept; it's a powerful tool transforming the logistics landscape. At Logisty, we harness the power of AI to bring you **smart route suggestions** and unparalleled **real-time tracking**, ensuring your deliveries are faster, more reliable, and transparent.</p>
      <h3>Intelligent Route Optimization</h3>
      <p>Our AI algorithms analyze a multitude of factors, including traffic conditions, road closures, delivery priorities, and even weather patterns, to suggest the most efficient routes. This proactive approach minimizes delays and reduces fuel consumption, leading to significant cost savings.</p>
      <h3>Unmatched Real-time Visibility</h3>
      <p>Gone are the days of uncertainty. With Logisty, you get **real-time parcel location updates**. From the moment a package is picked up until it reaches its destination, you can track its journey with precision. This transparency builds trust with your customers and allows for immediate action in case of unforeseen circumstances.</p>
      <p>Experience the precision and peace of mind that AI-powered logistics can bring to your business with Logisty.</p>
    `,
  },
];


export default function ArticleDetailPage() {
  const { articleId } = useParams(); // Get the articleId from the URL

  const article = blogPosts.find((post) => post.id === articleId);

  if (!article) {
    return (
      <>
        <div className="article-detail-page not-found">
          <h1>Article Not Found 😔</h1>
          <p>The article you are looking for does not exist or has been moved.</p>
          <Link to="/blog" className="back-to-blog-link">
            &larr; Back to Blog
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="article-detail-page">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-meta">
          By {article.author} on {article.date}
        </p>
        <img src={article.imageUrl} alt={article.title} className="article-image" />
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
        <Link to="/blog" className="back-to-blog-link">
          &larr; Back to Blog
        </Link>
      </div>
    </>
  );
}