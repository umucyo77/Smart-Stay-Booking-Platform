import { useBookingStore } from "../store/bookingStore";

const Bookings = () => {
  const { bookings, cancelBooking } = useBookingStore();

  if (bookings.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl text-gray-500">
          No bookings yet 📭
        </h2>
      </div>
    );
  }

  return (
    <div className="p-4 grid md:grid-cols-2 gap-4">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="border p-4 rounded-xl shadow"
        >
          <h2 className="font-bold text-lg">{booking.name}</h2>
          <p className="text-gray-500">Date: {booking.date}</p>
          <p className="text-gray-700">${booking.price}</p>

          <button
            onClick={() => cancelBooking(booking.id)}
            className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bookings;