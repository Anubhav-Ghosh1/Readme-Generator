"use client";
import { useReadmeStore } from "../store/useReadmeStore";
import GenerateReadme from "./GenerateReadme";
import Navbar from "./Navbar";
import Input from "./Input";

export default function HomePage() {
  console.log("isUsernameValid:");
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <GenerateReadme />
    </div>
  );
}
