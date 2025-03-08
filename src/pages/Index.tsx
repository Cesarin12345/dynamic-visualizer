import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Add Auth navigation link */}
        <div className="bg-background p-4 flex justify-between items-center border-b">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <div className="flex gap-2">
            <a href="/auth" className="bg-gradient-to-r from-amber-500 to-amber-700 text-white px-4 py-2 rounded hover:from-amber-600 hover:to-amber-800 transition-colors">
              Sign In/Sign Up
            </a>
          </div>
        </div>
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">Calendar</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              {date ? (
                <p className="mt-2">
                  Selected date: {date.toLocaleDateString()}
                </p>
              ) : (
                <p>Please select a date.</p>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">
                Quick Actions
              </h2>
              <div className="space-y-2">
                <Button>New Task</Button>
                <Button>Create Event</Button>
                <Button>Send Message</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">
                Notifications
              </h2>
              <ul className="list-disc pl-5">
                <li>New message from John</li>
                <li>Event reminder: Meeting at 3 PM</li>
                <li>Task "Review documents" is due today</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
