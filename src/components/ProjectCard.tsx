import { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    date: string;
    image: string;
    tags: string[];
    description: React.ReactNode[];
    status?: string;
    photos?: { url: string; caption?: string }[];
    links?: { label: string; url: string; icon?: "github" | "demo" }[];
}

const ProjectCard = ({
    title,
    date,
    image,
    tags,
    description,
    status,
    photos = [],
    links = [],
}: ProjectCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            {/* Cover Image */}
            <div className="w-full h-48 overflow-hidden bg-gray-100 relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain transition-transform hover:scale-105 duration-500"
                />
            </div>

            <div className="p-5">
                <div className="mb-4 flex items-center flex-wrap gap-x-4 gap-y-2">
                    <h3 className="font-heading text-xl font-bold text-foreground leading-tight">
                        {title}
                    </h3>
                    <div className="flex items-center gap-3">
                        <p className="text-sm text-muted-foreground font-medium">{date}</p>
                        {status && (
                            <span className="px-2.5 py-0.5 bg-gray-100 text-xs font-semibold text-gray-600 rounded-full border border-gray-200">
                                {status}
                            </span>
                        )}
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2.5 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                    {description.map((point, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {/* Expand for Photos */}
                {photos.length > 0 && (
                    <div className="mb-4">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                        >
                            {isExpanded ? (
                                <>
                                    Hide extra pictures <ChevronUp className="w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    View extra pictures ({photos.length}) <ChevronDown className="w-4 h-4" />
                                </>
                            )}
                        </button>

                        <div
                            className={cn(
                                "grid grid-cols-2 gap-4 mt-3 overflow-hidden transition-all duration-300 ease-in-out",
                                isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            )}
                        >
                            {photos.map((photo, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden relative">
                                        <img src={photo.url} alt={photo.caption || `Project photo ${index + 1}`} className="w-full h-full object-contain" />
                                    </div>
                                    {photo.caption && <p className="text-xs text-center text-muted-foreground font-medium px-1">{photo.caption}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Links */}
                {links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-auto pt-2">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-foreground transition-colors"
                            >
                                {link.icon === "github" && <Github className="w-4 h-4" />}
                                {link.icon === "demo" && <ExternalLink className="w-4 h-4" />}
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
