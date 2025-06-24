// components/CustomerReviews.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

// Sample review data (use your imported JSON if you prefer)
const reviews = [
  {
    id: 1,
    name: "Ayesha Rahman",
    designation: "Merchant",
    review:
      "Their delivery system is fast and reliable. My business grew because of their service.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Md. Tanvir Alam",
    designation: "Client",
    review:
      "I received my parcel exactly on time. Great communication throughout the process!",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Shakil Hossain",
    designation: "Rider",
    review:
      "As a rider, I appreciate the flexible schedules and support from the operations team.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Rima Khatun",
    designation: "Merchant",
    review:
      "Packaging and delivery support helped streamline our fulfillment process a lot.",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Nasim Reza",
    designation: "Client",
    review:
      "Very professional delivery system. I was able to track everything live.",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

const CustomerReview = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-4xl font-bold text-primary">
          What Our Customers Are Saying
        </h2>
        <p className="text-neutral-content max-w-2xl mx-auto mb-10">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 3 },
          }} 
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 p-6 rounded-xl shadow-md bg-base-200 mx-4 mb-10 ${
                    isActive ? "opacity-100 scale-100" : "opacity-50 scale-90"
                  }`}
                >
                  <FaQuoteLeft
                    size={35}
                    className="absolute text-success-content"
                  />
                  <p className="text-base text-base-content italic mt-10">
                    “{review.review}”
                  </p>
                  <div className="my-4 border-b-2 border-dashed border-base-content opacity-30"></div>

                  <div className="flex items-center gap-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16  rounded-full mb-4 border-2 border-primary"
                    />
                    <div>
                      <h3 className="text-lg text-left font-semibold text-primary">
                        {review.name}
                      </h3>
                      <p className="text-sm text-left text-base-content mb-2">
                        {review.designation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReview;
