const PageLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4">
                <div className="h-10 w-10 bg-gray-400 rounded-full text-primary animate-spin" />
                <p className="text-sm text-gray-700">please wait...</p>
            </div>
        </div>
    );
};

export default PageLoader;
