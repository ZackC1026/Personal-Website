import Navbar from "@/components/Navbar";
import PhotoGrid from "@/components/PhotoGrid";
import ShowcaseNavigation from "@/components/ShowcaseNavigation";

import img8456 from "@/assets/IMG_8456.jpg";
import img8872 from "@/assets/IMG_8872.jpg";
import img9016 from "@/assets/IMG_9016.jpg";
import img9027 from "@/assets/IMG_9027.jpg";
import img9076 from "@/assets/IMG_9076.jpg";
import img9135 from "@/assets/IMG_9135.jpg";
import img9187 from "@/assets/IMG_9187.jpg";
import img9206 from "@/assets/IMG_9206.jpg";
import img9208 from "@/assets/IMG_9208.jpg";
import img9223 from "@/assets/IMG_9223.jpg";

const Flora = () => {
    const photos = [
        { src: img8456, alt: "Flowering Almond", location: "Citadel, Calgary, AB", description: "Flowering Almond (Prunus triloba)", exif: "f/9 • 1/500 sec • ISO-100" },
        { src: img8872, alt: "Sticky Purple Geranium", location: "Citadel, Calgary, AB", description: "Sticky Purple Geranium (Geranium viscosissimum)", exif: "f/5.6 • 1/800 sec • ISO-200" },
        { src: img9016, alt: "Forget-Me-Nots", location: "Citadel, Calgary, AB", description: "Forget-Me-Nots (Myosotis sylvatica)", exif: "f/7.1 • 1/1000 sec • ISO-100" },
        { src: img9027, alt: "White Blue Flax", location: "Citadel, Calgary, AB", description: "White Blue Flax (Linum lewisii)", exif: "f/7.1 • 1/1600 sec • ISO-200" },
        { src: img9076, alt: "Alfalfa", location: "Citadel, Calgary, AB", description: "Alfalfa (Medicago sativa)", exif: "f/7.1 • 1/250 sec • ISO-100" },
        { src: img9135, alt: "Blanketflower", location: "Citadel, Calgary, AB", description: "Blanketflower (Gaillardia aristata)", exif: "f/7.1 • 1/400 sec • ISO-100" },
        { src: img9187, alt: "Showy Locoweed", location: "Citadel, Calgary, AB", description: "Showy Locoweed (Oxytropis splendens)", exif: "f/8 • 1/200 sec • ISO-100" },
        { src: img9206, alt: "Cinquefoil", location: "Citadel, Calgary, AB", description: "Graceful Cinquefoil (Potentilla gracilis)", exif: "f/8 • 1/250 sec • ISO-100" },
        { src: img9208, alt: "Wild Rose", location: "Citadel, Calgary, AB", description: "Wild Rose (Rosa species)", exif: "f/8 • 1/500 sec • ISO-200" },
        { src: img9223, alt: "Bladder Campion", location: "Citadel, Calgary, AB", description: "Bladder Campion (Silene vulgaris)", exif: "f/6.3 • 1/250 sec • ISO-400" },
    ];

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar />
            <section className="container max-w-5xl px-6 py-8 flex-grow flex flex-col justify-start">
                <div className="relative flex flex-col md:flex-row items-center justify-center mb-8 gap-4 w-full">
                    <h1 className="font-heading text-4xl font-bold text-foreground md:absolute md:left-0">Flora</h1>
                    <ShowcaseNavigation />
                </div>

                <div className="w-full">
                    <PhotoGrid photos={photos} />
                </div>
            </section>
        </main>
    );
};

export default Flora;
