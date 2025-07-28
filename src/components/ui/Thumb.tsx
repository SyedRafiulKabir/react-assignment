import React from "react";
import { PlayCircle } from "lucide-react"; // Assuming PlayCircle is still desired for the icon
import type { TrailerModel } from "@/types";

type ThumbProps = {
    selected: boolean;
    onClick: () => void;
    media: TrailerModel;
};

export const Thumb: React.FC<ThumbProps> = ({ selected, onClick, media }) => {
    const thumbnailSrc =
        media.resource_type === "image"
            ? media.resource_value
            : media.thumbnail_url;

    return (
        <button
            type="button"
            onClick={onClick}
            // Adjusted width and height for vertical "story" look
            // Added a consistent border that changes color
            className={`relative flex-shrink-0 w-[55px] h-[30px] rounded overflow-hidden border-2 transition-all duration-200 ease-in-out ${
                selected ? "border-green-500" : "border-transparent" // Use transparent for unselected
            }`}
        >
            <img
                src={thumbnailSrc}
                alt="Thumbnail"
                className="w-full h-full object-cover"
            />
            {media.resource_type === "video" && (
                // Adjusted play button styling
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="bg-transparent rounded-full p-2.5 shadow-md"> {/* Smaller padding */}
                        <PlayCircle className="w-5 h-5 text-white" /> {/* Smaller icon size */}
                    </div>
                </div>
            )}
        </button>
    );
};
