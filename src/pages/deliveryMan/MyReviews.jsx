import { useLoaderData } from "react-router-dom";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
    const reviews = useLoaderData()
    return (
        <div>
            <h1 className="text-4xl text-center">
                My Reviews 
            </h1>


            <div className="p-20">


                {
                    reviews.map(review => <MyReviewCard key={review._id} review={review}></MyReviewCard>)
                }

            </div>




        </div>
    );
};

export default MyReviews;