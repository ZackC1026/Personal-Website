import Navbar from "@/components/Navbar";
import PhotoCategoryCard from "@/components/PhotoCategoryCard";

import birdsThumbnail from "@/assets/IMG_9506_comp.jpg";
import floraThumbnail from "@/assets/IMG_9076.jpg";

const Showcase = () => {
  const categories = [
    {
      title: "Birds",
      description: "My favourite and main type of photography",
      image: birdsThumbnail,
      to: "/photography/birds"
    },
    {
      title: "Flora",
      description: "Close-up shots of flowers, plants, and botanical details.",
      image: floraThumbnail,
      to: "/photography/flora",
      objectPosition: "0% 30%"
    },
    {
      title: "Buildings",
      description: "Architectural photography highlighting structure and design.",
      image: "", // Insert image URL here
      to: "/photography/buildings"
    },
    {
      title: "Nature",
      description: "Landscapes and natural scenery from my travels.",
      image: "", // Insert image URL here
      to: "/photography/nature"
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col">
      <Navbar />
      <section className="container max-w-5xl px-6 py-8 flex-grow flex flex-col justify-start">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Photography Showcase</h1>
        <p className="font-body text-muted-foreground mb-4 text-lg">
          Welcome to my photography showcase! I mainly take pictures of birds across Canada, but I do occasionally take snapshots of flora and other animals.
        </p>
        <div className="font-body text-muted-foreground mb-8 bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-sm flex flex-col md:flex-row gap-2 md:items-center">
          <span className="font-semibold text-foreground whitespace-nowrap">My Gear:</span>
          <span>EOS Canon T7, EF-S 55-250mm f/4-5.6 IS STM. Photos edited w/ Lightroom Classic.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, index) => (
            <PhotoCategoryCard
              key={index}
              {...category}
            />
          ))}
        </div>

      </section>
    </main>
  );
};

export default Showcase;
