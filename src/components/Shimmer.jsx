import "../utils/Shimmer.css";

const Shimmer = () => {
    const shimmerCards = Array(15).fill(0); // Creates an array with 12 empty slots

    return (
        <div>
            <div className="flex items-center justify-between py-8 pl-[110px] pr-[110px] max-lg:pl-[50px] max-lg:pr-[50px] max-md:flex-col max-md:space-y-4 max-md:px-4 max-md:pt-4 max-md:pb-0">
                <div className="shimmer-image h-[40px] max-w-[320px] w-full bg-gray-100 border-2 border-solid border-grey-300 rounded-3xl pl-4 max-md:text-sm max-md:h-[35px]" />
                <div className="flex items-center justify-center space-x-4 max-md:space-x-5">
                    <div className="shimmer-image text-sm shadow-sm bg-gray-200 rounded-md p-2 max-md:text-[12px] max-md:px-2 max-md:py-1 w-[80px] h-[35px] max-md:h-[30px]" />
                    <div className="shimmer-image text-sm shadow-sm bg-gray-200 rounded-md p-2 max-md:text-[12px] max-md:px-2 max-md:py-1 w-[80px] h-[35px] max-md:h-[30px]" />
                    <div className="shimmer-image text-sm shadow-sm bg-gray-200 rounded-md p-2 max-md:text-[12px] max-md:px-2 max-md:py-1 w-[80px] h-[35px] max-md:h-[30px]" />
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center shimmer-container">
                {shimmerCards.map((_, index) => (
                    <div
                        key={index}
                        className="shimmer-card w-[250px] h-[310px] max-lg:w-[200px] max-lg:h-[275px] max-md:w-[170px] max-md:h-[210px] max-smx:w-[150px] max-smx:h-[200px] rounded overflow-hidden shadow-sm my-6 mx-4 max-md:mx-2 max-md:my-4 max-smx:mx-1 bg-gray-200"
                    >
                        <div className="h-48 bg-gray-300 shimmer-image max-lg:h-36 max-md:h-24 max-smx:h-22"></div>
                        <div className="px-4 pt-4 shimmer-content max-md:px-2 max-smx:pt-3">
                            <div className="h-6 mb-2 bg-gray-300 shimmer-title max-md:mb-1"></div>
                            <div className="h-4 mb-2 bg-gray-300 shimmer-text max-md:mb-1"></div>
                            <div className="flex items-center justify-between shimmer-footer">
                                <div className="w-12 h-4 bg-gray-300 shimmer-time"></div>
                                <div className="w-16 h-4 bg-gray-300 shimmer-time"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const AboutShimmer = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="shimmer-card mt-6 h-[250px] w-full rounded-lg bg-gray-100 max-sm:h-[420px] px-8 py-10 flex flex-col items-center justify-center">
                <div className="mb-4 bg-gray-200 rounded-full shimmer-time w-28 h-28"></div>
                <div className="shimmer-time w-full h-[34px] mb-5 bg-gray-200 sm:w-3/4"></div>
                <div className="flex-grow w-full h-40 bg-gray-200 shimmer-time sm:hidden"></div>
            </div>
            <div className="shimmer-card mt-6 h-[400px] w-full rounded-lg bg-gray-100 max-sm:h-[420px] px-8 py-10 flex flex-col items-center justify-center">
                <div className="shimmer-time w-full h-[34px] mb-5 bg-gray-200"></div>
                <div className="flex-grow w-full h-40 bg-gray-200 shimmer-time"></div>
            </div>
        </div>
    );
};

export const ResMenuShimmer = () => {
    const shimmerItems = Array(8).fill(0);

    return (
        <div className="w-full max-w-[600px] p-4 flex flex-col items-center justify-center">
            <div className="shimmer-card h-[110px] w-[400px] max-sm:w-[275px] mb-10 rounded-xl max-sm:mb-6 mt-2"></div>
            {shimmerItems.map((_, index) => (
                <div
                    key={index}
                    className="shimmer-card h-[60px] max-sm:h-[48px] max-sm:my-3 my-4 rounded-lg min-w-[280px] flex justify-start py-4 px-2 max-w-[500px] w-full "
                >
                    <div className="w-3/5 h-full bg-gray-200 rounded-md shimmer-time"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
