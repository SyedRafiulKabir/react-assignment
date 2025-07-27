import { useData } from "@/context/data-context";
import About from "./components/about";
import FeatureExplanations from "./components/feature_explanations";
import Features from "./components/features";
import Instructor from "./components/instructor";
import Menus from "./components/menu";
import Pointers from "./components/pointers";

const LeftSection = () => {
    const { data } = useData();

    return (
        <div className="w-[65%] flex flex-col gap-10">
            <Menus
                menuItems={[
                    data?.sections[2].name,
                    data?.sections[3].name,
                    data?.sections[5].name,
                    data?.sections[7].name,
                    data?.sections[8].name,
                ]}
            />
            <Instructor
                instructor={data?.sections[2].values[0]}
                name={data?.sections[2].name}
            />
            <Features
                features={data?.sections[3].values}
                name={data?.sections[3].name}
            />
            <Pointers
                pointers={data?.sections[5].values}
                name={data?.sections[5].name}
            />
            <About
                abouts={data?.sections[7].values}
                name={data?.sections[7].name}
            />
            <FeatureExplanations
                featureExps={data?.sections[8].values}
                name={data?.sections[8].name}
            />
        </div>
    );
};

export default LeftSection;
