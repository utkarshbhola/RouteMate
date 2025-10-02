import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const events = [
    { id: 1, title: "Beach Party", desc: "Sun, fun & friends", img: "https://via.placeholder.com/400x200" },
    { id: 2, title: "Concert Night", desc: "Live music & vibes", img: "https://via.placeholder.com/400x200" },
    { id: 3, title: "Hackathon", desc: "Code. Build. Win.", img: "https://via.placeholder.com/400x200" },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % events.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + events.length) % events.length);

  return (
    <div className="bg-[#fefbf6] min-h-screen px-4 md:px-12 py-6 font-['SUSE_Mono']">
      {/* Carousel */}
      <div className="relative w-full max-w-4xl mx-auto h-56 md:h-72 flex justify-center items-center mb-10">
        <img
          src={events[current].img}
          alt={events[current].title}
          className="w-full h-full object-cover rounded-xl shadow"
        />
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 bg-black text-white px-3 py-1 rounded-full"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 bg-black text-white px-3 py-1 rounded-full"
        >
          {">"}
        </button>
      </div>

      {/* Listings */}
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-gray-300 rounded-lg shadow hover:shadow-md transition p-4 bg-white flex flex-col"
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-lg">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{event.desc}</p>

            {/* Join Button */}
            <Link
              to={`/join?event=${event.id}`}
              className="mt-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-center"
            >
              Join
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
