import Navbar from "@/components/Navbar";
import PhotoGrid from "@/components/PhotoGrid";
import ShowcaseNavigation from "@/components/ShowcaseNavigation";

const Nature = () => {
    // Add your photos here
    const photos = [
        // { 
        //     src: "/path/to/compressed-image.jpg", 
        //     fullSrc: "/path/to/full-resolution-image.jpg",
        //     alt: "Mountain Landscape", 
        //     description: "Looking out over the valley." 
        // },
    ];

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar />
            <section className="container max-w-5xl px-6 py-8 flex-grow flex flex-col justify-start">
                <div className="relative flex flex-col md:flex-row items-center justify-center mb-8 gap-4 w-full">
                    <h1 className="font-heading text-4xl font-bold text-foreground md:absolute md:left-0">Nature</h1>
                    <ShowcaseNavigation />
                </div>

                <div className="w-full">
                    <PhotoGrid photos={photos} />
                </div>
            </section>
        </main>
    );
};

export default Nature;
