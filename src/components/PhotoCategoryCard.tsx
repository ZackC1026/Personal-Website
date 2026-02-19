import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

interface PhotoCategoryCardProps {
    title: string;
    image?: string;
    description: string;
    to: string;
}

const PhotoCategoryCard = ({ title, image, description, to }: PhotoCategoryCardProps) => {
    return (
        <Link
            to={to}
            className="group block border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
            {/* Cover Image */}
            <div className="w-full h-48 overflow-hidden bg-gray-100 relative flex items-center justify-center">
                {image ? (
                    <>
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center text-gray-400">
                        <Camera className="w-8 h-8 mb-2 opacity-50" />
                        <span className="text-xs font-medium uppercase tracking-wider opacity-60">Add Photo</span>
                    </div>
                )}
            </div>

            <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-foreground leading-tight group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default PhotoCategoryCard;
