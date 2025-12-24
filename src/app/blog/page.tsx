
'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development',
    description: 'Explore the latest trends and technologies shaping the future of web development.',
    category: 'Technology',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    date: '2025-12-01',
    author: 'Tarun Sharma',
  },
  {
    id: 2,
    title: 'Top 10 UI/UX Design Tips',
    description: 'Learn the best practices for creating user-friendly and visually appealing designs.',
    category: 'Design',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    date: '2025-11-20',
    author: 'Priya Mehta',
  },
  {
    id: 3,
    title: 'Mobile App Development in 2025',
    description: 'Discover the tools and frameworks dominating mobile app development.',
    category: 'Technology',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    date: '2025-11-10',
    author: 'Amit Verma',
  },
  {
    id: 4,
    title: 'How to Build Scalable Applications',
    description: 'A guide to designing and developing scalable software solutions.',
    category: 'Development',
    thumbnail: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    date: '2025-10-28',
    author: 'Sonia Gill',
  },
  {
    id: 5,
    title: 'Branding for Startups: A Complete Guide',
    description: 'How to create a memorable brand identity for your startup.',
    category: 'Branding',
    thumbnail: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    date: '2025-10-15',
    author: 'Rohit Singh',
  },
];

const categories = ['All', ...Array.from(new Set(blogPosts.map((b) => b.category)))];

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = category === 'All' || post.category === category;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.blogContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Agency Insights & Blog</h1>
        <div className={styles.subtitle}>Latest news, tips, and stories from our digital experts</div>
      </div>
      <div className={styles.searchFilterRow}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search blog posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className={styles.categorySelect}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className={styles.grid}>
        {filtered.length === 0 && (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888', fontSize: 18, padding: 40 }}>
            No blog posts found.
          </div>
        )}
        {filtered.map((post) => (
          <div className={styles.card} key={post.id}>
            <img className={styles.cardImg} src={post.thumbnail} alt={post.title} />
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>
                <span>{post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>
              <div className={styles.cardTitle}>{post.title}</div>
              <div className={styles.cardDesc}>{post.description}</div>
              <Link href={`/blog/${post.id}`} className={styles.readMore}>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}