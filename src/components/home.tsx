import { useData } from "@/context/data-context";
import LeftSection from "./left-section";
import RightSection from "./right-section";
import Title from "./title";

const Home = () => {
    const { data } = useData();
    return (
        <>
            <div>
                {data && (
                    <Title title={data.title} description={data.description} />
                )}
            </div>
            <main className="w-full max-w-6xl mx-auto">
                <div className="flex justify-between gap-5">
                    <LeftSection />
                    <RightSection />
                </div>
            </main>
        </>
    );
};

export default Home;
