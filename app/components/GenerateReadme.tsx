"use client";
import React, { useState } from "react";
import { techOptions } from "../mockdata/techList";
import Image from "next/image";

export default function GenerateReadme() {
  const headingClass = "text-2xl text-gray-900 font-medium mb-4";
  const labelClass = "text-gray-900 text-sm font-medium mb-1 block";
  const inputWrapper = "inline-block border-b border-gray-400";
  const inputClass =
    "bg-transparent mb-1.5 text-sm placeholder:text-gray-500 text-gray-900 focus:outline-none focus:border-blue-500 transition-all duration-150 min-w-[250px]";
  const inputContainer = "flex items-center gap-2";
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <div className="p-10 space-y-10 max-w-4xl mx-auto">
      <div>
        <p className={headingClass}>Title</p>
        <div className={inputWrapper}>
          <input
            type="text"
            placeholder="Hi I'm Full Stack Developer"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <p className={headingClass}>Work</p>
        <div className="space-y-4">
          <div className={inputContainer}>
            <label htmlFor="currently-working" className={labelClass}>
              Currently Working At
            </label>
            <div className={inputWrapper}>
              <input
                type="text"
                name="currently-working"
                placeholder="I am currently working at"
                className={inputClass}
              />
            </div>
          </div>

          <div className={inputContainer}>
            <label htmlFor="currently-learning" className={labelClass}>
              Currently Learning
            </label>
            <div className={inputWrapper}>
              <input
                type="text"
                name="currently-learning"
                placeholder="I am learning"
                className={inputClass}
              />
            </div>
          </div>

          <div className={inputContainer}>
            <label htmlFor="ask-me-about" className={labelClass}>
              Ask me about
            </label>
            <div className={inputWrapper}>
              <input
                type="text"
                name="ask-me-about"
                placeholder="Ask me about"
                className={inputClass}
              />
            </div>
          </div>

          <div className={inputContainer}>
            <label htmlFor="reach-me-at" className={labelClass}>
              Reach me at
            </label>
            <div className={inputWrapper}>
              <input
                type="text"
                name="reach-me-at"
                placeholder="You can reach me at"
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className={headingClass}>Skills</p>
        <p className="text-gray-900 mb-4">Tech Stack</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {techOptions.map((tech) => (
            <label
              key={tech.name}
              className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer border border-gray-200"
            >
              <input
                type="checkbox"
                checked={selectedTech.includes(tech.name)}
                onChange={() => toggleTech(tech.name)}
                className="w-4 h-4"
              />
              <Image
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.githubSlug}/${tech.githubSlug}-original.svg`}
                alt={tech.name}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-gray-800 text-sm">{tech.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        {/* Social section */}
      </div>
    </div>
  );
}
