import { useData } from "@/context/data-context";
import { Card } from "../ui/card";
import CheckList from "./components/check-list";
import Cta from "./components/cta";
import Trailer from "./components/trailer";

const RightSection = () => {
    const { data } = useData();
    return (
        <div className="w-[25%] flex flex-col gap-10 rounded-sm absolute top-28 right-[10rem]">
            <Card className="rounded-sm p-2">
                {data && <Trailer medias={data?.media} />}
                {data && <Cta text={data.cta_text.name}/>}
                {data && <CheckList checkLists={data?.checklist}/>}
            </Card>
        </div>
    );
};

export default RightSection;
