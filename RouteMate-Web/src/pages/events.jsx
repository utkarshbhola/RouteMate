import { useParams } from "react-router-dom";

const dummyEvents = {
  1: { title: "Beach Party", desc: "Sun, fun & friends", destination: "Goa", type: "Trip" },
  2: { title: "Concert Night", desc: "Live music & vibes", destination: "Delhi", type: "Music" },
  3: { title: "Hackathon", desc: "Code. Build. Win.", destination: "Bangalore", type: "Tech" },
};

export default function EventDetail() {
  const { id } = useParams();
  const event = dummyEvents[id];

  if (!event) return <h1 className="p-6">Event not found</h1>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-lg mb-2">Destination: {event.destination}</p>
      <p className="text-lg mb-2">Type: {event.type}</p>
      <p className="text-gray-700">{event.desc}</p>
    </div>
  );
}
