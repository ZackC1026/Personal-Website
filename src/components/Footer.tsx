import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md pointer-events-none">
      <div className="bg-black/90 backdrop-blur-md border-t border-white/10 w-full rounded-t-xl overflow-hidden hover:pb-4 transition-all duration-500 pointer-events-auto group">

        {/* Sliver Header - Always Visible */}
        <div className="py-2 w-full text-center cursor-pointer group-hover:bg-white/5 transition-colors">
          <h3 className="font-heading text-sm font-semibold text-gray-300 uppercase tracking-widest">
            Contact Me
          </h3>
        </div>

        {/* Content - Reveals on Hover */}
        <div className="max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
          <div className="flex flex-row items-center justify-center gap-8 pb-3">
            <a
              href="mailto:zack.chen@uwaterloo.ca"
              className="inline-flex items-center gap-2 font-body text-gray-400 hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>zack.chen@uwaterloo.ca</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zackchenuw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-gray-400 hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
