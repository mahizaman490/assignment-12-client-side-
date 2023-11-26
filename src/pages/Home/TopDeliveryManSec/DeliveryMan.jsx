import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const DeliveryMan = ({deliveryMan}) => {
    const {name,image,parcelsDelivered,averageRatings} = deliveryMan
    return (
        <div className=" bg-[#F2FFE9] relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <img
                    src={image}
                    alt="tania andrew"
                    className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                           {name}
                        </h5>
                        <div className="flex items-center gap-0 5">
                {/* daynamic ratings */}
                        </div>
                    </div>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                   {parcelsDelivered} of parcel Delivered
                    </p>
                </div>
            </div>
            <div className="px-2 mb-4">
           

            <Rating 
  style={{ maxWidth: 180 }}
      value={averageRatings}
      readOnly
    />
            </div>
        </div>
    );
};

export default DeliveryMan;