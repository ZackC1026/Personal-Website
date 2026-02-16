import Navbar from "@/components/Navbar";


const Showcase = () => {
  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col">
      <Navbar />
      <section className="container max-w-5xl px-6 py-8 flex-grow flex flex-col justify-start">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Photography Showcase</h1>
        <p className="font-body text-muted-foreground mb-4">
          Welcome to my photography showcase! I mainly take pictures of birds across Canada, but I do occasionally take snapshots of flora and other animals.
        </p>
        <p className="font-body text-muted-foreground">
          My current rig is a EOS Canon T7, paired with an EF-S 55-250mm f/4-5.6 IS STM. I find the 55-250mm a great budget lens and recommend it for those looking for a telephoto lens without breaking the bank. I edit all my photos on Adobe Lightroom Classic.
        </p>
      </section>
    </main>
  );
};

export default Showcase;
