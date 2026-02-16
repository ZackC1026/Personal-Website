import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-neutral-800 mt-auto bg-black text-gray-300">
      <div className="container max-w-5xl flex justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <div>
            <h3 className="font-heading text-xl font-semibold text-gray-200 mb-2">
              Contact me:
            </h3>
            <div className="flex flex-col items-center gap-2">
              <a
                href="mailto:zack.chen@uwaterloo.ca"
                className="inline-flex items-center gap-2 font-body text-gray-400 hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>zack.chen@uwaterloo.ca</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zackchenuw/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-gray-400 hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
