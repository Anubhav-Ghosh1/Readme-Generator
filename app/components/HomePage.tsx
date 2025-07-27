"use client";
import { useReadmeStore } from "../store/useReadmeStore";
import GenerateReadme from "./GenerateReadme";
import Navbar from "./Navbar";
import Input from "./Input";

export default function HomePage() {
  const { isUsernameValid } = useReadmeStore();
  console.log("isUsernameValid:");
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {!isUsernameValid ? (
        <GenerateReadme />
      ) : (
        <main className="min-h-screen w-full flex justify-center bg-gray-900 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-10">
            <div className="md:w-1/2 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                Create Custom GitHub README
              </h2>
              <p className="text-gray-300">
                Customize your README with GitHub stats, contribution graphs,
                tech stacks and more – all with a few clicks.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-800 border border-gray-500 p-8 rounded-lg shadow-md w-full max-w-md">
              <Input />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
