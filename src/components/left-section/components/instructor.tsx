import { Card } from "@/components/ui/card";
import type { InstructorModel } from "@/types";

interface InstructorPros {
    instructor: InstructorModel;
    name?: string;
}

const Instructor = ({ instructor , name}: InstructorPros) => {
    const htmlDescription = instructor?.description as string | TrustedHTML;

    return (
        <div>
            <h3 className="text-xl font-semibold mb-4 md:text-2xl">{name}</h3>
            <Card className="rounded-sm">
                <div className="px-4 flex items-center gap-4">
                    <img
                        className="w-20 h-20 object-cover rounded-full"
                        src={instructor.image}
                        alt=""
                    />
                    <div>
                        <a
                            className="text-lg flex items-center gap-2 hover:text-green-700"
                            href="https://10minuteschool.com/en/skills/instructors/munzereen-shahid"
                        >
                            {instructor.name}
                            <span>{">"}</span>
                        </a>
                        <div
                        className="text-sm"
                            dangerouslySetInnerHTML={{
                                __html: htmlDescription,
                            }}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Instructor;
