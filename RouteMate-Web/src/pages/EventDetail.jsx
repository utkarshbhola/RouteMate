import { useParams } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams(); // grabs the dynamic part of the URL

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Event ID: {id}</h1>
      {/* You can fetch event details from your data or API using this id */}
    </div>
  );
}