import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  // Mock blog entries
  const blogPosts = [
    {
      id: "blog-post-1",
      title: "Blog Post Title 1",
      date: "Month DD, YYYY",
      excerpt: "This is a placeholder excerpt for the first generic blog post. The content here will briefly describe what the full article is about."
    },
    {
      id: "blog-post-2",
      title: "Blog Post Title 2",
      date: "Month DD, YYYY",
      excerpt: "This is a placeholder excerpt for the second generic blog post. The content here will briefly describe what the full article is about."
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col items-center">
      <Navbar />
      <section className="container max-w-3xl px-6 py-12 flex-grow flex flex-col justify-start">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          Blog
        </h1>

        <div className="flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 fill-mode-both">
          {blogPosts.map((post) => (
            <article key={post.id} className="group relative flex flex-col bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center text-xs text-gray-500 font-body mb-3 uppercase tracking-wider font-semibold">
                <Calendar className="w-3.5 h-3.5 mr-2" />
                <time>{post.date}</time>
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                <Link to={`/blog/${post.id}`} className="after:absolute after:inset-0">
                  {post.title}
                </Link>
              </h2>
              <p className="font-body text-gray-600 mb-5 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center font-body text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors mt-auto">
                Read entry
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
