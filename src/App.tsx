import Navbar from "./components/navbar";
import Home from "./components/home";
import { useData } from "./context/data-context";
import PageLoader from "./components/page-loader";

function App() {
    const { loading } = useData();

    if (loading) return <PageLoader />;

    return (
        <div className="h-screen w-full relative">
            <Navbar />
            <Home />
        </div>
    );
}

export default App;
