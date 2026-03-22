import { create } from "zustand";

export const useBookingStore = create((set) => ({
  bookings: JSON.parse(localStorage.getItem("bookings")) || [],

  addBooking: (booking) =>
    set((state) => {
      const updated = [...state.bookings, booking];
      localStorage.setItem("bookings", JSON.stringify(updated));
      return { bookings: updated };
    }),

  cancelBooking: (id) =>
    set((state) => {
      const updated = state.bookings.filter((b) => b.id !== id);
      localStorage.setItem("bookings", JSON.stringify(updated));
      return { bookings: updated };
    }),
}));