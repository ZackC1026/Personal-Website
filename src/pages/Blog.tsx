import Navbar from "@/components/Navbar";


const Blog = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="container max-w-5xl px-6 py-8 flex-grow flex flex-col justify-start">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Blog</h1>
        <p className="font-body text-muted-foreground">Stay tuned!</p>
      </section>
    </main>
  );
};

export default Blog;
