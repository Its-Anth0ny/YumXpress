import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Code2Icon, Github } from "lucide-react";
import { AboutShimmer } from "../components/Shimmer";

const App = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/users/Its-Anth0ny"
                );
                const json = await response.json();
                setUserData(json);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const { avatar_url, name, bio, login } = userData;

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white font-sans text-gray-800">
            {loading ? (
                <div className="text-xl">
                    <AboutShimmer />
                </div>
            ) : (
                <div>
                    <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg bg-gray-100 mt-4">
                        <div className="px-8 py-10">
                            <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                                <img
                                    className="w-28 h-28 rounded-full mb-4 md:mr-6 md:mb-0 shadow-md border-yellow-500 border-4"
                                    src={avatar_url}
                                    alt=""
                                />
                                <div className="md:ml-4">
                                    <h1 className="text-2xl font-semibold text-yellow-500 mb-1">
                                        {name}
                                    </h1>
                                    <p className="text-md text-gray-600 mb-2">
                                        @{login}
                                    </p>
                                    <p className="text-sm">{bio}</p>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-8">
                                <Link
                                    to="https://github.com/Its-Anth0ny"
                                    target="_blank"
                                    className="flex items-center text-gray-600 hover:text-yellow-500 transition duration-300"
                                >
                                    <div className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-100">
                                        <Github className="size-[20px]" />
                                    </div>
                                    <span className="ml-2">GitHub</span>
                                </Link>
                                <Link
                                    to="https://github.com/Its-Anth0ny"
                                    target="_blank"
                                    className="flex items-center text-gray-600 hover:text-yellow-500 transition duration-300"
                                >
                                    <div className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-100">
                                        <Code2Icon className="size-[20px]" />
                                    </div>
                                    <span className="ml-2">Project</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 w-full max-w-2xl rounded-lg overflow-hidden shadow-lg bg-gray-100">
                        <div className="px-8 py-10">
                            <h2 className="text-xl font-semibold text-yellow-500 mb-4">
                                About Project
                            </h2>
                            <p className="text-gray-600 mb-4">
                                YumExpress is a food-ordering website that
                                leverages the Swiggy API, a renowned food
                                ordering platform. By blending technology with
                                culinary expertise, YumExpress provides users a
                                seamless and enjoyable platform for discovering,
                                ordering, and relishing delicious meals from
                                various eateries.
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                <li className="mb-2">
                                    Enjoy a sleek and user-friendly interface
                                    for effortless browsing and ordering.
                                </li>
                                <li className="mb-2">
                                    Discover your favorite restaurants or
                                    explore new dining options with ease.
                                </li>
                                <li className="mb-2">
                                    Customize orders to your preferences, from
                                    traditional comfort food to exotic
                                    international flavors.
                                </li>
                            </ul>
                            <p className="text-gray-600">
                                Looking ahead, YumExpress plans to expand its
                                offerings by integrating an API to provide users
                                with access to diverse recipes, further
                                enhancing the culinary experience.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
