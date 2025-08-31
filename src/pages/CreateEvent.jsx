import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createEvents } from "../features/events/apiEvent";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const [phase, setPhase] = useState(1);
  const { handleSubmit, register, reset } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createEvents,
    onSuccess: () => {
      toast.success("Event created successfully!");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
      reset();
      navigate("/ManageEvents");
    },

    onError: () => toast.error("Event Could not be created, Retry")
  });

  function onSubmit(data) {
    console.log("Form submitted successfully:", data);
    mutate({...data, eventImage: data.eventImage[0]});
  }
  function onError(errors) {
    console.error("Form submission errors:", errors);
    toast("All fields are required to be filled.", { icon: "👾" });
  }

  const nextPhase = () => {
    setPhase((prevPhase) => prevPhase + 1);
  };

  const prevPhase = () => {
    setPhase((prevPhase) => Math.max(prevPhase - 1, 1));
  };

  const renderPhase = () => {
    switch (phase) {
      case 1:
        return (
          <>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Event Name
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter the name of your event"
              {...register("eventName", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Event Date
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              {...register("eventDate", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Event Type
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="E.g., Conference, Workshop, etc."
              {...register("eventType", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Event Category
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="E.g., Technology, Health, etc."
              {...register("eventCategory", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Long Description
            </label>
            <textarea
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide a detailed overview of the event"
              {...register("longDescription", { required: true })}
            ></textarea>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Event Image/Banner
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              // File input: use register if you want to capture file, but handle with watch/getValues
              {...register("eventImage", { required: true })}
            />
          </>
        );
      case 2:
        return (
          <>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Start Time
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="time"
              {...register("startTime", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Event Duration
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="3 hour, 4 hours, etc."
              {...register("eventDuration", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Location Type
            </label>
            <select
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("locationType", { required: true })}
            >
              <option value="physical">Physical</option>
              <option value="virtual">Virtual</option>
            </select>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Address (if physical)
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter the venue address"
              {...register("eventAddress", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Online Link (if virtual)
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter the online event link"
              {...register("onlineLink", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Access Instructions
            </label>
            <textarea
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide instructions for accessing the event"
              {...register("accessInstructions", { required: true })}
            ></textarea>
          </>
        );
      case 3:
        return (
          <>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Ticket Quantity
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              placeholder="Enter the number of tickets available"
              {...register("ticketQuantity", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Organizer Name
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter the organizer's name"
              {...register("organizerName", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Contact Email
            </label>
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Enter the organizer's contact email"
              {...register("contactEmail", { required: true })}
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Accessibility Info
            </label>
            <textarea
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide accessibility information"
              {...register("accessibilityInfo", { required: true })}
            ></textarea>
          </>
        );
      default:
        return <p className="text-center text-gray-500">Loading...</p>;
    }
  };

  return (
    <div className="p-6 bg-white rounded-md md:w-6/12 mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-2 text-left text-gray-700 font-roboto">
        Create Event
      </h1>
      <h2 className="text-lg font-bold mb-4 text-orange-500">
        Phase <span>{phase}</span> of 3
      </h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {renderPhase()}
        <div className="flex justify-between">
          {phase > 1 && (
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              onClick={prevPhase}
              type="button"
            >
              Previous
            </button>
          )}
          {phase == 3 ? (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              disabled={isCreating}
            >
              Submit
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              onClick={nextPhase}
              type="button"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
