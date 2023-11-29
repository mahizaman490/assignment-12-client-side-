import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyReviewCard = (review) => {
    const { user } = useContext(AuthContext);
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="bg-[#F2FFE9] relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none transition-transform transform hover:scale-105">
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <img
                    src={user?.photoURL || 'https://i.ibb.co/T0P37Sq/Rectangle-4287-1.png'}
                    alt="tania andrew"
                    className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {user?.displayName|| 'Mahi Zaman'}
                        </h5>
                        <div className="flex items-center gap-0 5">
                            {/* Dynamic ratings */}
                        </div>
                    </div>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                        He is a very good Delivery Man, he always tries to finish his work properly.
                    </p>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                        {currentDate}
                    </p>
                </div>
            </div>
            <div className="px-2 mb-4">
                <Rating
                    style={{ maxWidth: 180 }}
                    value={5}
                    readOnly
                />
            </div>
        </div>
    );
};

export default MyReviewCard;
