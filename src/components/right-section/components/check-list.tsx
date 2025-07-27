import type { CheckListModel } from "@/types";

interface CheckListProps {
    checkLists: CheckListModel[];
}

const CheckList = ({ checkLists }: CheckListProps) => {
    return (
        <div>
            <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
            {checkLists.map((checkList) => (
                <>
                    {checkList.list_page_visibility ? (
                        <>
                            <div className="flex items-center gap-2">
                                <img
                                    src={checkList.icon}
                                    alt=""
                                    className="w-5 h-5"
                                />
                                <p>{checkList.text}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-2">
                                <img
                                    src={checkList.icon}
                                    alt=""
                                    className="w-5 h-5"
                                />
                                <p>{checkList.text}</p>
                            </div>
                        </>
                    )}
                </>
            ))}
        </div>
    );
};

export default CheckList;
