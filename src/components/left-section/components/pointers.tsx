import { Card } from "@/components/ui/card";
import type { PointerModel } from "@/types";
import CheckIcon from "@/assets/check.svg";

interface PointerProps {
    pointers: PointerModel[];
    name?: string;
}

const Pointers = ({ pointers, name }: PointerProps) => {
    return (
        <div>
            {name && <h3 className="mb-4 text-xl font-bold">{name}</h3>}
            <Card className="p-6 rounded-lg">
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                    {pointers.map((pointer, index) => (
                        <li key={index} className="flex items-start gap-2 mb-2">
                            <img src={CheckIcon} className="mt-1" alt="" />
                            <p className="text-base text-gray-900 leading-relaxed">
                                {pointer.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default Pointers;
