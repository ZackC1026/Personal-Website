import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mainImg from "@/assets/Main.jpg";
import background from "@/assets/background.jpg";
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-transparent flex flex-col relative isolation-auto">
      {/* Fixed Background with Blur */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          transform: 'scale(1.05)',
        }}
      />
      <Navbar />
      <section className="container max-w-5xl px-6 py-6 flex-grow flex items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-black/75 p-8 md:p-12 rounded-xl backdrop-blur-sm border border-white/10">
          <div className="w-full md:w-1/2">
            <div className="rounded-sm p-2 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]">
              <img
                src={mainImg}
                alt="Profile"
                className="w-full aspect-auto object-contain rounded-[1px] bg-black/50"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
              Hey! I'm Zack.
            </h1>
            <p className="font-body text-base text-gray-100 leading-relaxed drop-shadow-sm font-medium">
              I'm a current electrical engineering student at The University of Waterloo that's passionate about electronic hardware. I have experience developing and assembling electronics and I'm always keen to learn more and keep developing my skills.
            </p>
            <p className="font-body text-base text-gray-100 leading-relaxed drop-shadow-sm font-medium">
              Feel free to check out my resume & portfolio, my blog, or my photos!
            </p>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Index;
