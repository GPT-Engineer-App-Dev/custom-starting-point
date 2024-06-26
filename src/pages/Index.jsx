import React from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
        <p className="text-lg mb-6">This is a minimal web application. Start building your features!</p>
        <Button variant="outline">Get Started</Button>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Welcome to our website!</h2>
        </div>
      </div>
    </div>
  );
};

export default Index;