const ErrorPage = (message) => {
    return (
        <div className="flex items-center justify-center object-center">
            <img src="/errorimg.png" alt={message} className="w-[700px]" />
            {console.error(message)}
        </div>
    );
};

export default ErrorPage;
