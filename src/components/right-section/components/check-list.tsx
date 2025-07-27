import type { CheckListModel } from "@/types";

interface CheckListProps {
    checkLists: CheckListModel[];
}

const CheckList = ({ checkLists }: CheckListProps) => {
    return (
        <div>
            <div className="grid py-2 md:p-4">
                <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                {checkLists.map((checkList) => (
                    <div>
                        <div className="flex items-center mb-3 leading-5">
                            <div className="inline-block h-[20px] w-[20px] opacity-100 transition-opacity duration-300 ease-in-out text-[0px]">
                                <img
                                    alt="icon"
                                    src={checkList.icon}
                                    width="20"
                                    height="20"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full"
                                    style={{ color: "transparent" }}
                                />
                            </div>

                            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                                {checkList.text}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckList;
