import { Card } from "@/components/ui/card";
import type { FeatureModel } from "@/types";

interface FeaturesProps {
    features: FeatureModel[];
    name?: string;
}
const Features = ({ features, name }: FeaturesProps) => {
    return (
        <div>
            <h3 className="mb-4 text-xl font-bold">{name}</h3>
            <Card className="bg-gray-900 text-white p-4 rounded-sm">
                <div className="grid grid-cols-2">
                    {features.map((feature) => (
                        <div className="flex gap-3 p-4">
                            <img
                                className="w-10 h-10"
                                src={feature.icon}
                                alt=""
                            />
                            <div>
                                <h4 className="mb-2">{feature.title}</h4>
                                <p className="text-sm text-gray-400">{feature.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Features;
