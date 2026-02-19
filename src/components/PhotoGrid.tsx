import React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Maximize2, Loader2 } from "lucide-react";
import { useState } from 'react';

interface Photo {
    src: string; // The compressed/thumbnail version
    fullSrc?: string; // The full resolution version (optional, falls back to src)
    alt: string;
    description: string;
    exif?: string; // Optional field for camera settings
    location?: string; // Optional field for location
}

interface PhotoGridProps {
    photos: Photo[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
    if (photos.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-muted-foreground">No photos yet. Check back soon!</p>
            </div>
        );
    }

    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className="break-inside-avoid mb-6 bg-white p-2 shadow-sm border border-gray-100 rounded-sm hover:shadow-md transition-shadow duration-300 ease-in-out relative flex flex-col"
                >
                    <Dialog>
                        <div className="relative group overflow-hidden cursor-pointer bg-gray-50 flex-grow">
                            {photo.src ? (
                                <>
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-auto object-cover block"
                                        loading="lazy"
                                    />
                                    {/* Overlay with expand button */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <DialogTrigger asChild>
                                            <button
                                                className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                                aria-label="View full resolution"
                                            >
                                                <Maximize2 className="w-4 h-4" />
                                            </button>
                                        </DialogTrigger>
                                    </div>
                                </>
                            ) : (
                                <div className="bg-gray-100 min-h-[200px] flex items-center justify-center">
                                    <span className="text-gray-400 text-sm">Image Placeholder</span>
                                </div>
                            )}
                        </div>

                        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-transparent border-none shadow-none flex items-center justify-center outline-none">
                            <DialogTitle className="sr-only">{photo.alt || "Full resolution photo"}</DialogTitle>
                            <div className="relative">
                                <img
                                    src={photo.fullSrc || photo.src}
                                    alt={photo.alt}
                                    className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl bg-black"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>

                    <div className="pt-2 pb-2 px-2 text-center bg-white border-t border-gray-50 mt-auto space-y-1">
                        <p className="font-body text-sm text-gray-700 font-medium leading-tight">
                            {photo.description}
                        </p>
                        {photo.exif && (
                            <p className="font-mono text-[10px] text-gray-400 tracking-wide uppercase">
                                {photo.exif}
                            </p>
                        )}
                        {photo.location && (
                            <p className="font-body text-[10px] text-gray-400 italic">
                                {photo.location}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
