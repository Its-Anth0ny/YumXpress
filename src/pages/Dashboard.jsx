import { useState, useEffect } from "react";
import { LocateFixed, LocateOffIcon } from "lucide-react";
import { useLocation } from "../utils/hooks/useLocation";
import { Link, useNavigate } from "react-router-dom";

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
        <div className="h-100% flex flex-col justify-between items-stretch">
            <div className="w-full flex space-x-[30px]">
                <div className="mx-24 text-center mt-14">
                    <h1 className="font-bold text-gray-800 text-8xl">
                        We <span className="text-yellow-500">Teleport</span>{" "}
                        food.
                    </h1>
                    <p className="mt-8 mb-2 text-6xl text-gray-500">
                        Don't Ask HOW
                    </p>
                    <p className="mt-4 mb-2 text-gray-500 text-7xl ">
                        Just order{" "}
                        <span className="text-yellow-500"> NOW!</span>{" "}
                        {/* <img src="/yumlogo2.png" alt="" className="w-[50px]" /> */}
                    </p>
                    <div className="flex items-center justify-center mt-10 space-x-10">
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
                            className="flex items-center justify-center primary-btn hover:text-yellow-500"
                        >
                            <LocateOffIcon className="w-6 h-6 mr-2 " />
                            Demo
                        </button>
                    </div>
                </div>
                <div className="max-w-[300px] mt-5">
                    {[1, 2, 3, 4].map((index) => (
                        <img
                            key={index}
                            src={`/dash${index}.jpg`}
                            alt={`Image ${index}`}
                            className={`w-[400px] absolute transition-opacity ${
                                rotationIndex === index - 1
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-24 text-center text-gray-600">
                <div className="flex items-center justify-center">
                    <img
                        className="w-12 h-12 rounded-full ring-2 ring-white"
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
