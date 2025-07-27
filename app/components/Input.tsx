"use client";
import { useReadmeStore } from "@/app/store/useReadmeStore";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Input() {
  const { setField } = useReadmeStore();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);

  let handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setField("username", userName);
    let loadingToast = toast.loading("Validating GitHub username...");
    try {
      if (error.length > 0) {
        toast.dismiss(loadingToast);
        toast.error("Try after few minutes");
        setLoading(false);
        return;
      }
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (res.ok) {
        setField("username", userName);
        setValidated(true);
        setField("isUsernameValid", true);
        toast.success("GitHub username validated!");
      } else {
        toast.error("GitHub username not found.");
        setError("GitHub username not found.");
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      setLoading(false);
    }
  };
  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        name="username"
        id=""
        placeholder="Enter your github username"
        className="border-1 bg-gray-700 px-2 py-1 rounded-full w-full"
        value={userName}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 font-medium px-4 py-1 rounded-full"
      >
        Submit
      </button>
    </form>
  );
}
