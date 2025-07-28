import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TrailerModel } from "@/types";
import { Thumb } from "@/components/ui/Thumb";
import ReactPlayer from "react-player";

type TrailerProps = {
    medias: TrailerModel[];
};

const Trailer: React.FC<TrailerProps> = ({ medias }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true });
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
        // Adjust these for the vertical thumbnail carousel
        align: "start", // Align snaps to the start for better visibility
        // You might want to adjust the `slidesToScroll` if you want more than one thumb to scroll at a time
    });

    const scrollPrev = () => emblaMainApi && emblaMainApi.scrollPrev();
    const scrollNext = () => emblaMainApi && emblaMainApi.scrollNext();

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi) return;
        const index = emblaMainApi.selectedScrollSnap();
        setSelectedIndex(index);
        if (emblaThumbsApi) emblaThumbsApi.scrollTo(index);
    }, [emblaMainApi, emblaThumbsApi]);

    useEffect(() => {
        if (!emblaMainApi) return;
        emblaMainApi.on("select", onSelect).on("reInit", onSelect);
        onSelect();
    }, [emblaMainApi, onSelect]);

    return (
        <div className="space-y-4">
            {/* Main carousel */}
            <div className="relative overflow-hidden" ref={emblaMainRef}>
                <div className="flex max-h-[220px]">
                    {medias.map((media, index) => (
                        <div
                            className="min-w-full max-w-[60%] px-2"
                            key={index}
                        >
                            {media.resource_type === "image" ? (
                                <img
                                    src={media.resource_value}
                                    alt={`Slide ${index}`}
                                    className="w-auto h-auto object-cover rounded"
                                />
                            ) : (
                                <ReactPlayer
                                    // Corrected the typo in the URL
                                    src={`https://www.youtube.com/watch?v=${media.resource_value}`}
                                    width="100%"
                                    height="100%"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Arrows for Main Carousel */}
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 border border-solid border-gray-300
"
                    onClick={scrollPrev}
                >
                    <ChevronLeft className="w-4 h-4 text-black" />
                </button>
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 border border-solid border-gray-300
"
                    onClick={scrollNext}
                >
                    <ChevronRight className="w-4 h-4 text-black" />
                </button>
            </div>

            {/* Thumbnails Carousel */}
            {/* Added hide-scrollbar class for a cleaner look */}
            <div className="relative overflow-hidden">
                {" "}
                {/* Added relative for arrow positioning */}
                <div
                    className="overflow-x-scroll hide-scrollbar"
                    ref={emblaThumbsRef}
                >
                    <div className="flex gap-2 px-2">
                        {" "}
                        {/* Adjusted gap to 'gap-2' as in your original code */}
                        {medias.map((media, index) => (
                            <Thumb
                                key={index}
                                media={media}
                                selected={index === selectedIndex}
                                onClick={() => onThumbClick(index)}
                            />
                        ))}
                    </div>
                </div>
                {/* Arrows for Thumbnails Carousel - positioned relative to its parent */}
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hidden md:block" // Hide on small screens if desired
                    onClick={() =>
                        emblaThumbsApi && emblaThumbsApi.scrollPrev()
                    }
                >
                    <ChevronLeft className="h-3 w-3 text-black" />
                </button>
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hidden md:block" // Hide on small screens if desired
                    onClick={() =>
                        emblaThumbsApi && emblaThumbsApi.scrollNext()
                    }
                >
                    <ChevronRight className="h-3 w-3 text-black" />
                </button>
            </div>
        </div>
    );
};

export default Trailer;
