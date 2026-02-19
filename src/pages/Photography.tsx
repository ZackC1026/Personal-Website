import Navbar from "@/components/Navbar";
import PhotoCategoryCard from "@/components/PhotoCategoryCard";

const Showcase = () => {
  const categories = [
    {
      title: "Birds",
      description: "Capturing the beauty of avian life across Canada.",
      image: "", // Insert image URL here
      to: "/photography/birds"
    },
    {
      title: "Flora",
      description: "Close-up shots of flowers, plants, and botanical details.",
      image: "", // Insert image URL here
      to: "/photography/flora"
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
        <p className="font-body text-muted-foreground mb-8 text-lg">
          Welcome to my photography showcase! I mainly take pictures of birds across Canada, but I do occasionally take snapshots of flora and other animals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, index) => (
            <PhotoCategoryCard
              key={index}
              {...category}
            />
          ))}
        </div>

        <p className="font-body text-muted-foreground mt-auto pt-8 border-t border-gray-200">
          My current rig is a EOS Canon T7, paired with an EF-S 55-250mm f/4-5.6 IS STM. I find the 55-250mm a great budget lens and recommend it for those looking for those looking for a telephoto lens without breaking the bank. I edit all my photos on Adobe Lightroom Classic.
        </p>
      </section>
    </main>
  );
};

export default Showcase;
