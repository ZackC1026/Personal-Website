import Navbar from "@/components/Navbar";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const BlogPost = () => {
    const { id } = useParams();

    // In a real app, you would fetch data using the 'id' parameter.
    // This serves as the visual template for all blog entries.
    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar />

            {/* Blog Content Centered Column */}
            <article className="container max-w-3xl mx-auto px-6 py-12 flex-grow flex flex-col justify-start">

                {/* Back navigation */}
                <Link
                    to="/blog"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors w-fit"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </Link>

                {/* Blog Header (Title and Date) */}
                <header className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                        Generic Blog Post Title
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 font-body">
                        <Calendar className="w-4 h-4 mr-2" />
                        <time dateTime="2026-01-01">Month DD, YYYY</time>
                    </div>
                </header>

                {/* Blog Body content */}
                <div className="prose prose-neutral max-w-none font-body text-gray-700 leading-relaxed sm:text-lg pb-12 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 fill-mode-both">
                    <p className="mb-6">
                        This is a generic paragraph placeholder. You can replace this text with the actual introductory content of your blog post. The template is designed to focus on readability and clean typography.
                    </p>

                    <h2 className="font-heading text-2xl font-bold text-foreground mt-10 mb-5">
                        Section Heading Example
                    </h2>
                    <p className="mb-6">
                        Here is another paragraph of text under a heading. You can structure your posts using various heading levels, paragraphs, and lists.
                    </p>

                    <blockquote className="border-l-4 border-gray-300 pl-5 my-8 italic text-gray-600 bg-white shadow-sm p-6 rounded-r-xl">
                        "This is a placeholder for a blockquote. It emphasizes important quotes or callouts within your article."
                    </blockquote>

                    <p className="mb-6">
                        The layout maintains a readable width so that long paragraphs are easy to trace from line to line without causing eye strain.
                    </p>

                    <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                        Sub-section Example
                    </h3>
                    <p className="mb-6">
                        You can continue to add more content here. Text styling such as <strong>bolded words</strong> and <em>italicized phrases</em> work as expected.
                    </p>
                </div>
            </article>
        </main>
    );
};

export default BlogPost;
