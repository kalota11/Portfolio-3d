import { clientReviews } from '../constants/index.js';

const Clients = () => {
  return (
<section className="c-space my-16 px-4">
  <h3 className="text-2xl sm:text-3xl text-white mb-10 text-center">
    Hear from My Clients
  </h3>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {clientReviews.map((item) => (
      <div
        key={`review-${item.id}`}
        className="bg-[#1c1c1e] border border-white/10 rounded-xl p-5 flex flex-col justify-between shadow-lg hover:scale-105 transition"
      >

        <p className="text-gray-300 text-sm leading-relaxed">
          {item.review}
        </p>

        <div className="flex items-center justify-between mt-6">

          <div className="flex items-center gap-3">
            <img
              src={item.img}
              alt="reviewer"
              className="w-10 h-10 rounded-full object-cover"
            />

            <div>
              <p className="text-white text-sm font-semibold">
                {item.name}
              </p>
              <p className="text-gray-400 text-xs">
                {item.position}
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src="/assets/star.png"
                alt="star"
                className="w-4 h-4"
              />
            ))}
          </div>

        </div>

      </div>
    ))}
  </div>
</section>
  );
};

export default Clients;