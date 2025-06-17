import React from "react";

function Analytics() {
    //Prop data
    const registeredUsers = 120; 
    const availableSlots = 30; 
    const checkedInAttendees = 80; 
    const attendeesInfo = [
        { name: "John", email: "john@example.com", phone: "123-456-7890" },
        { name: "Smith", email: "jane@example.com", phone: "987-654-3210" },
        
    ];

    return (
        <div className="p-6 bg-gray-100 font-sans">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Event Analytics</h1>
            <div className="mb-6 bg-white shadow-md rounded-lg p-4">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Summary</h2>
                <p className="text-gray-600">Number of people registered: <span className="font-medium">{registeredUsers}</span></p>
                <p className="text-gray-600">Slots available: <span className="font-medium">{availableSlots}</span></p>
                <p className="text-gray-600">Attendees checked in: <span className="font-medium">{checkedInAttendees}</span></p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Attendees Information</h2>
                <table className="w-full border-collapse mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-600">Name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-600">Email</th>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-600">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendeesInfo.map((attendee, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                <td className="border border-gray-300 px-4 py-2 text-gray-700">{attendee.name}</td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-700">{attendee.email}</td>
                                <td className="border border-gray-300 px-4 py-2 text-gray-700">{attendee.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Analytics;
