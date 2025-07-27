interface TitleProps {
    title: string;
    description: string | TrustedHTML;
}

const Title = ({ title, description }: TitleProps) => {
    return (
        <div
            className="min-h-[300px] md:min-h-[300px] flex items-center"
            style={{
                backgroundImage:
                    'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="pl-45 pr-145 flex flex-col gap-2">
                <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
                    {title}
                </h1>
                <div className="flex gap-2">
                    <img src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png" alt="" />
                    <span className="inline-block text-sm md:text-base text-white">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
                </div>
                <div className="text-gray-400 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
};

export default Title;
