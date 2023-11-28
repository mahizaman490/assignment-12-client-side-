import { Rating } from "@smastrom/react-rating";

const DeliveryMan = ({deliveryMan}) => {
    const {Delivery_Man_Name,Phone_Number,Number_of_Parcel_Delivered,Average_Review} = deliveryMan
    return (
        <div className=" bg-[#F2FFE9] relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none transition-transform transform hover:scale-105">
        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
       
            <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {Delivery_Man_Name}
                    </h5>
                    <div className="flex items-center gap-0 5">
                        {/* Dynamic ratings */}
                    </div>
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                    {Number_of_Parcel_Delivered} of parcel Delivered
                </p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                {Phone_Number}
                </p>
            </div>
        </div>
        <div className="px-2 mb-4">
            <Rating
                style={{ maxWidth: 180 }}
                value={Average_Review}
                readOnly
            />
        </div>
    </div>
    );
};

export default DeliveryMan;