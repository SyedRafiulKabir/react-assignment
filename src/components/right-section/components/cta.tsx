interface CTAProps {
    text: string;
}

const Cta = ({ text }: CTAProps) => {
    return (
        <div>
            <div>
                <div className="md:mb-2">
                    <div className="inline-block text-2xl font-semibold">
                        ৳3850
                    </div>
                    <span className="infline-flex">
                        <del className="ml-2 text-base font-normal md:text-xl">
                            ৳5000
                        </del>
                        <div className="c-Tukmu inline-block">
                            <p className="card-price">1150 ৳ ছাড়</p>
                        </div>
                    </span>
                </div>
            </div>
            <div>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded whitespace-nowrap text-center md:w-full">
                    {text}
                </button>
            </div>
        </div>
    );
};

export default Cta;
