import { Card } from "@/components/ui/card";
import type { FeatureExplanationModel } from "@/types";
import CheckIcon from "@/assets/check.svg";

interface FeatureExpProps {
    featureExps: FeatureExplanationModel[];
    name?: string;
}
const FeatureExplanations = ({ featureExps, name }: FeatureExpProps) => {
    return (
        <div>
            {name && <h3 className="mb-4 text-2xl font-semibold">{name}</h3>}
            <Card className="p-6 rounded-lg">
                <ul className="space-y-12 ">
                    {featureExps.map((featureExp) => {
                        return (
                            <div className="flex items-start justify-between gap-8">
                                <div>
                                    <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px] pb-2">{featureExp.title}</h2>
                                    {featureExp.checklist.map((item) => (
                                        <li className="flex items-start gap-2 mb-2">
                                            <img
                                                src={CheckIcon}
                                                className="mt-1"
                                                alt=""
                                            />
                                            <p className="text-base text-[#4B5563] leading-relaxed">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </div>
                                <div className="mb-4 max-w-[350px]">
                                    <img
                                        width={250}
                                        height={200}
                                        src={featureExp.file_url}
                                        alt=""
                                    />
                                </div>
                            </div>
                        );
                    })}
                </ul>
            </Card>
        </div>
    );
};

export default FeatureExplanations;
