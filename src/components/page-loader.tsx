const PageLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4 animate-fade-in">
                <div className="relative flex h-12 w-12">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-12 w-12 rounded-full bg-green-600"></span>
                </div>
                <p className="text-base font-medium text-gray-800 animate-pulse">Loading, please wait...</p>
            </div>
        </div>
    );
};

export default PageLoader;
