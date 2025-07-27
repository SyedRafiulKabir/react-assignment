import type { TrailerModel } from "@/types";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface TrailerProps {
    medias: TrailerModel[];
}

const Trailer = ({ medias }: TrailerProps) => {
    return (
        <Carousel showThumbs={true}>
            {medias.map((media) => (
                <>
                    {media.resource_type === "image" ? (
                        <img
                            className="object-contain"
                            src={media.resource_value}
                            alt=""
                        />
                    ) : (
                        <>
                            <ReactPlayer
                                src={`https://www.youtube.com/watch?v=${media.resource_value}`}
                            />
                        </>
                    )}
                </>
            ))}
        </Carousel>
    );
};

export default Trailer;
