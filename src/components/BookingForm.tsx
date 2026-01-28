import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

export default function BookingForm() {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ city, checkIn, checkOut, guests });
    alert("Поиск отелей... (форма пока не подключена к бэкенду)");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 w-full max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-medium text-neutral-700">
            Город
          </Label>
          <div className="relative">
            <Icon
              name="MapPin"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              size={18}
            />
            <Input
              id="city"
              type="text"
              placeholder="Куда едем?"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="checkIn" className="text-sm font-medium text-neutral-700">
            Заезд
          </Label>
          <div className="relative">
            <Icon
              name="Calendar"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              size={18}
            />
            <Input
              id="checkIn"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="checkOut" className="text-sm font-medium text-neutral-700">
            Выезд
          </Label>
          <div className="relative">
            <Icon
              name="Calendar"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              size={18}
            />
            <Input
              id="checkOut"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests" className="text-sm font-medium text-neutral-700">
            Гостей
          </Label>
          <div className="relative">
            <Icon
              name="Users"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              size={18}
            />
            <Input
              id="guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full mt-6 bg-black hover:bg-neutral-800 text-white font-medium py-3"
      >
        <Icon name="Search" size={18} className="mr-2" />
        Найти отели
      </Button>
    </form>
  );
}
