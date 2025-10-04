import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  // Tabs
  const tabs = ["Run", "Party", "Travel"];
  const [activeTab, setActiveTab] = useState("Run");

  // Sample data
  const run = [
    { id: 1, title: "Morning Run", desc: "Join us for a refreshing morning run", img: "https://via.placeholder.com/400x200" },
    { id: 2, title: "Evening Jog", desc: "Unwind with an evening jog", img: "https://via.placeholder.com/400x200" },
    { id: 3, title: "Trail Running", desc: "Explore nature with trail running", img: "https://via.placeholder.com/400x200" },
  ];

  const party = [
    { id: 4, title: "Beach Party", desc: "Sun, sand, and music", img: "https://via.placeholder.com/400x200" },
    { id: 5, title: "House Party", desc: "Chill vibes and good company", img: "https://via.placeholder.com/400x200" },
    { id: 6, title: "KFC", desc: "Fried Chicken, Burgers", img: "https://via.placeholder.com/400x200" },
  ];

  const travel = [
    { id: 7, title: "Beach Getaway", desc: "Relax by the sea", img: "https://via.placeholder.com/400x200" },
    { id: 8, title: "Leh Ladakh", desc: "Bikers all invited", img: "https://via.placeholder.com/400x200" },
    { id: 9, title: "Himalayan Adventure", desc: "Trekking and Camping", img: "https://via.placeholder.com/400x200" },
  ];

  // Pick which data to show
  const getActiveData = () => {
    if (activeTab === "Run") return run;
    if (activeTab === "Party") return party;
    return travel;
  };

  return (
    <div className="bg-[#fefbf6] min-h-screen px-4 md:px-12 py-6 font-['SUSE_Mono']">
      {/* Tabs */}
      <div className="flex gap-6 mb-8 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl mx-auto h-56 md:h-72 flex justify-center items-center mb-10">
        <img
          src="https://via.placeholder.com/800x300"
          alt="promo"
          className="w-full h-full object-cover rounded-xl shadow"
        />
      </div>

      {/* Listings */}
      <h2 className="text-2xl font-bold mb-6">{activeTab} Options</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {getActiveData().map((place) => (
          <div
            key={place.id}
            className="border border-gray-300 rounded-lg shadow hover:shadow-md transition p-4 bg-white flex flex-col"
          >
            <img
              src={place.img}
              alt={place.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-lg">{place.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{place.desc}</p>

            {/* Dynamic Button */}
            <NavLink
              to={`/events/${place.id}`}
              className="mt-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-center"
            >
              {activeTab === "Run" ? "Join Run" : activeTab === "Party" ? "Join Party" : "Join Adventure"}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
