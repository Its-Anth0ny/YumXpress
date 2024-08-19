import { Search, X } from "lucide-react";
import { useRef, useState } from "react";
import model from "../utils/Genai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFoodaiBoxOpen, setFoodSuggessions } from "../redux/foodaiSlice";

const FoodAI = () => {
    const dispatch = useDispatch();
    const foodSuggessions = useSelector(
        (state) => state.foodai.foodSuggessions
    );
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    const handleSubmit = async () => {
        setLoading(true);
        const input = inputRef.current.value;
        const prompt = `You are a food recommendation system specifically designed to suggest dishes available in Indian restaurants that can be ordered via Swiggy or Zomato. For the provided query: "${input}", list exactly 10 food items that are perfectly relevant to the provided query and commonly found in India. The list should include only the names of popular dishes that are widely available for delivery. Please ensure the items are diverse and representative of various food categories. Format your response as a simple, comma-separated list. Example of desired response: Margherita Pizza, Chicken Biryani, Paneer Butter Masala, etc.`;
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        const lines = text.split(",");
        dispatch(setFoodSuggessions(lines));
        setLoading(false);
    };

    return (
        <div>
            <div
                className="absolute top-0 w-full h-screen bg-black bg-opacity-20"
                onClick={() => dispatch(setFoodaiBoxOpen())}
            ></div>

            <div className="absolute h-screen right-0 top-0 bg-white w-[500px] max-lg:w-[450px] max-md:w-screen flex flex-col items-center min-h-[calc(100vh-115px)] py-10 shadow-lg rounded-l-xl">
                <button
                    className="absolute p-2 border border-gray-300 rounded-md top-4 right-4 hover:bg-gray-100"
                    onClick={() => dispatch(setFoodaiBoxOpen())}
                >
                    <X className="text-gray-600" />
                </button>
                <p className="mt-6 text-2xl font-bold text-gray-800">
                    What's on your mind?
                </p>
                <div className="flex items-center justify-center w-full px-2 mt-10">
                    <input
                        name="query"
                        type="text"
                        ref={inputRef}
                        placeholder="Enter your query here"
                        className="h-[50px] w-full max-w-[300px] bg-yellow-50 border-2 border-yellow-300 rounded-l-full pl-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <button
                        className={`h-[50px] px-4 rounded-r-full bg-yellow-300 hover:bg-yellow-400 ${
                            loading ? "cursor-not-allowed" : ""
                        }`}
                        onClick={handleSubmit}
                    >
                        <Search />
                    </button>
                </div>
                {foodSuggessions.length === 0 ? (
                    <div className="flex items-center justify-center p-6 h-[calc(100vh-165px)] max-md:p-3">
                        <img
                            className="max-w-[350px] w-full object-contain"
                            src="/chef.png"
                            alt="Food recommendation system"
                        />
                    </div>
                ) : (
                    <div className="flex flex-col items-center w-full mt-12 max-md:px-3">
                        <p className="text-xl font-medium text-center text-gray-800">
                            Here are the top 10 results:
                        </p>
                        <ul className="w-[400px] border border-yellow-300 rounded-2xl p-4 space-y-2 mt-4 max-md:w-full bg-yellow-50">
                            {foodSuggessions.map((Item, index) => (
                                <li
                                    className="text-lg text-center text-gray-700 hover:underline"
                                    key={index}
                                >
                                    <Link
                                        to={`https://www.google.com/search?q=${Item}&sclient=img&udm=2`}
                                        target="_blank"
                                        className="transition-colors hover:text-yellow-600"
                                    >
                                        {Item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FoodAI;
