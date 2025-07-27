import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import type { AboutItemModel } from "@/types";
interface AboutProps {
    abouts: AboutItemModel[];
    name?: string;
}

const About = ({ abouts, name }: AboutProps) => {
    return (
        <div>
            {name && <h3 className="mb-4 text-xl font-bold">{name}</h3>}
            <Card className="p-4 gap-3 rounded-lg py-2 md:border md:px-5 ">
                {abouts.map((about) => (
                    <Accordion type="single" collapsible>
                        <AccordionItem
                            value={about.id}
                            style={{ borderBottom: "1px dashed #eee" }}
                            className=""
                        >
                            <AccordionTrigger>
                                <div
                                    className="max-w-[90%] font-medium md:text-base mx-lg:text-sm hover:cursor-pointer"
                                    style={{ textDecoration: "none" }}
                                    dangerouslySetInnerHTML={{
                                        __html: about.title,
                                    }}
                                />
                            </AccordionTrigger>
                            <AccordionContent>
                                <div
                                    className="px-0 pb-2 text-gray-700 text-lg"
                                    dangerouslySetInnerHTML={{
                                        __html: about.description,
                                    }}
                                />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </Card>
        </div>
    );
};

export default About;
