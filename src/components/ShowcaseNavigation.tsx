import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const ShowcaseNavigation = () => {
    const location = useLocation();

    const links = [
        { name: "Birds", path: "/photography/birds" },
        { name: "Flora", path: "/photography/flora" },
        { name: "Buildings", path: "/photography/buildings" },
        { name: "Nature", path: "/photography/nature" },
    ];

    return (
        <nav className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto mt-4 md:mt-0">
            {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                            isActive
                                ? "bg-primary text-primary-foreground"
                                : "bg-neutral-200 text-neutral-600 hover:bg-neutral-300 hover:text-neutral-900"
                        )}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default ShowcaseNavigation;
