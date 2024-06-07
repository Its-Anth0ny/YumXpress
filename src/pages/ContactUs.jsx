import { useState } from "react";
import { EMAIL_API_KEY } from "../utils/constants";
import { Toaster, toast } from "sonner";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData(event.target);
            formData.append("access_key", EMAIL_API_KEY);
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setName("");
                setEmail("");
                setMessage("");
                toast.success("Message sent successfully");
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Failed to send message due to network issues.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-143px)] p-4">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg max-sm:px-3 max-sm:py-4">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-700 underline md:text-4xl underline-offset-2">
                    Get in touch
                </h2>
                <form className="space-y-6" onSubmit={onSubmit}>
                    <div className="space-y-2">
                        <label
                            className="block text-sm font-bold text-gray-700 md:text-base"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="w-full px-4 py-2 text-sm text-gray-700 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent md:text-base"
                            id="name"
                            name="name"
                            type="text"
                            aria-label="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="block text-sm font-bold text-gray-700 md:text-base"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-2 text-sm text-gray-700 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent md:text-base"
                            id="email"
                            name="email"
                            type="email"
                            aria-label="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="block text-sm font-bold text-gray-700 md:text-base"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="w-full px-4 py-2 text-sm text-gray-700 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent md:text-base"
                            id="message"
                            name="message"
                            aria-label="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className={`px-4 py-2 font-bold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline transition duration-200 ${
                                loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </div>
                </form>
                <Toaster richColors />
            </div>
        </div>
    );
};

export default ContactUs;
