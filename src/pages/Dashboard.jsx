import { useState, useEffect } from "react";
import { LocateFixed, LocateOffIcon } from "lucide-react";
import { useLocation } from "../utils/hooks/useLocation";
import { Link, useNavigate } from "react-router-dom";
// import { Blurhash } from "react-blurhash";

export default function Home() {
    const { fetchCurrentLocation, addDemoCoordinate } = useLocation();
    const navigate = useNavigate();

    // State to keep track of the current rotation index
    const [rotationIndex, setRotationIndex] = useState(0);

    useEffect(() => {
        // Rotate the images every 2 seconds
        const interval = setInterval(() => {
            setRotationIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 2000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid row-span-12 min-h-[calc(100vh-143px)]">
            <div className="grid md:pr-4 max-md:grid-rows-2 max-md:grid-cols-1 md:grid-cols-12 row-span-10 max-md:my-6 max-md:space-y-4">
                <div className="flex flex-col items-center justify-center text-center max-md:mb-8 md:col-span-8 max-mdx:col-span-7">
                    <span className="font-bold text-gray-800 text-8xl max-mdx:text-6xl max-xl:text-7xl max-md:text-4xl">
                        We <span className="text-yellow-500">Teleport </span>
                        food.
                    </span>
                    <span className="mt-8 mb-2 text-gray-500 text-7xl max-mdx:text-5xl max-xl:text-6xl max-md:text-3xl max-md:mt-4">
                        Don't Ask HOW
                    </span>
                    <span className="mt-4 mb-2 text-gray-500 text-7xl max-mdx:text-5xl max-xl:text-6xl max-md:text-3xl max-md:mt-2">
                        Just order
                        <span className="text-yellow-500"> NOW!</span>
                    </span>
                    <div className="flex items-center justify-center mt-10 space-x-10 max-md:mt-4 ">
                        {/* <button
                            onClick={async () => {
                                await fetchCurrentLocation();
                                navigate("/restaurant");
                            }}
                            className="flex items-center justify-center primary-btn hover:text-yellow-500"
                        >
                            <LocateFixed className="w-6 h-6 mr-2" />
                            Location
                        </button> */}
                        <button
                            onClick={async () => {
                                await addDemoCoordinate();
                                navigate("/list");
                            }}
                            className="flex items-center justify-center px-4 py-2 text-gray-700 bg-yellow-200 border border-yellow-600 rounded-lg hover:bg-yellow-300 hover:text-black max-md:text-sm max-md:px-3"
                        >
                            <LocateOffIcon className="w-6 h-6 mr-2 max-md:w-4 max-md:h-4" />
                            Demo
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center md:col-span-4 max-mdx:col-span-5 ">
                    {[1, 2, 3, 4].map((index) => (
                        <img
                            key={index}
                            src={`/dash${index}.jpg`}
                            alt={`Image ${index}`}
                            className={`max-h-[400px] max-mdx:max-w-[300px] max-xl:max-w-[330px] absolute transition-opacity max-md:max-h-[250px] ${
                                rotationIndex === index - 1
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    ))}
                </div>
            </div>
            <div className="row-span-2 text-center max-md:my-6">
                <div className="flex items-center justify-center">
                    <img
                        className="w-12 h-12 rounded-full max-md:w-10 max-md:h-10"
                        src="/propic.jpg"
                        alt=""
                    />
                </div>
                <div className="mt-2">
                    <Link
                        to={"https://github.com/Its-Anth0ny"}
                        target="_blank"
                        className="text-yellow-500"
                    >
                        Created by Its-Anth0ny 💛
                    </Link>
                </div>
            </div>
        </div>
    );
}
