import Navbar from "@/components/Navbar";
import PhotoGrid from "@/components/PhotoGrid";
import hawkImg from "@/assets/IMG_2953_comp.jpg";
import chickadeeImg from "@/assets/IMG_9506_comp.jpg";

const Birds = () => {
    // Add your photos here
    const photos = [
        {
            src: hawkImg,
            alt: "Hawk",
            description: "Juvenile RTH perched outside CMH",
            exif: "f/7.1 • 1/1600 sec • ISO-400",
            location: "Waterloo, ON"
        },
        {
            src: chickadeeImg,
            alt: "Black-capped Chickadee",
            description: "Black-capped Chickadee posed up",
            exif: "f/6.3 • 1/160 sec • ISO-400",
            location: "Inglewood Bird Sanctuary, Calgary AB"
        },
    ];

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar />
            <section className="container max-w-5xl px-6 py-8 flex-grow flex flex-col justify-start">
                <h1 className="font-heading text-4xl font-bold text-foreground mb-8">Birds</h1>

                <div className="w-full">
                    <PhotoGrid photos={photos} />
                </div>
            </section>
        </main>
    );
};

export default Birds;
