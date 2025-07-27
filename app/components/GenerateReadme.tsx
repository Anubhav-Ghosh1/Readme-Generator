"use client";
import React, { useState } from "react";
import { socialOptions } from "../mockdata/socialList";
import Image from "next/image";
import { techOptions } from "../mockdata/techList";
import { IconWrapper } from "./IconWrapper";
import { useReadmeStore } from "../store/useReadmeStore";
import { generateMarkdown } from "../utils/buildMarkdown";
import toast from "react-hot-toast";

export default function GenerateReadme() {
  const headingClass = "text-2xl text-gray-900 font-medium mb-4";
  const labelClass = "text-gray-900 text-sm font-medium mb-1 block";
  const inputWrapper = "inline-block border-b border-gray-400";
  const inputClass =
    "bg-transparent mb-1.5 text-sm placeholder:text-gray-500 text-gray-900 focus:outline-none focus:border-blue-500 transition-all duration-150 min-w-[250px]";
  const inputContainer = "flex items-center gap-2";
  const inputSocialClass =
    "bg-transparent mb-1.5 text-sm placeholder:text-gray-500 text-gray-900 focus:outline-none focus:border-blue-500 transition-all duration-150 min-w-[450px]";
  const [saveMarkDown, setSaveMarkDown] = useState<string>("");
  let handleGenerateReadme = () => {
    const state = useReadmeStore.getState();
    const generatedMarkdown = generateMarkdown(state);
    setSaveMarkDown(generatedMarkdown);
    toast.success("Readme generated successfully!");
  };

  let handleCopy = () => {
    navigator.clipboard.writeText(saveMarkDown);
    toast.success("Copied to clipboard!");
  };

  const {
    title,
    currentlyWorking,
    currentlyLearning,
    askMeAbout,
    reachMeAt,
    selectedTech,
    showTrophies,
    showContributions,
    socialLinks,
    setField,
    toggleTech,
    updateSocialLink,
  } = useReadmeStore();

  // const toggleTechSelect = (tech: string) => {
  //   setSelectedTech((prev) =>
  //     prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
  //   );
  // };

  return (
    <div className="p-10 space-y-10 max-w-4xl mx-auto">
      <div>
        <p className={headingClass}>Title</p>
        <div className={inputWrapper}>
          <input
            type="text"
            placeholder="Hi I'm Full Stack Developer"
            className={inputClass}
            onChange={(e) => setField("title", e.target.value)}
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
                onChange={(e) => setField("currentlyWorking", e.target.value)}
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
                onChange={(e) => setField("currentlyLearning", e.target.value)}
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
                onChange={(e) => setField("askMeAbout", e.target.value)}
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
                onChange={(e) => setField("reachMeAt", e.target.value)}
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
        <p className={headingClass}>Social Links</p>
        {socialOptions.map((social) => (
          <div key={social.name} className="mb-4">
            <div className="flex items-center gap-2">
              <IconWrapper
                iconName={social.iconName}
                size={24}
                className={`${social.color}`}
              />
              <div className={inputWrapper}>
                <input
                  type="text"
                  id={social.name}
                  placeholder={`https://${social.prefix}/your-username`}
                  className={`${inputSocialClass}`}
                  onChange={(e) =>
                    updateSocialLink(social.name, e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="text-2xl text-gray-900 font-medium mb-4">GitHub Stats</p>
        <div className="flex flex-col space-y-4">
          <label className="inline-flex items-center space-x-3">
            <input
              type="checkbox"
              checked={showTrophies}
              onChange={() => setField("showTrophies", !showTrophies)}
              className="w-4 h-4"
            />
            <span className="text-gray-800 text-sm">Show GitHub Trophies</span>
          </label>

          <label className="inline-flex items-center space-x-3">
            <input
              type="checkbox"
              checked={showContributions}
              onChange={() => setField("showContributions", !showContributions)}
              className="w-4 h-4"
            />
            <span className="text-gray-800 text-sm">
              Show Contribution Graph
            </span>
          </label>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="bg-white border-gray-900 px-2 py-1 rounded-lg hover:bg-gray-50 shadow-lg border"
          onClick={handleGenerateReadme}
        >
          Generate Readme
        </button>
        {saveMarkDown.length > 0 && (
          <button className="bg-white border-gray-900 px-2 py-1 rounded-lg hover:bg-gray-50 shadow-lg border" onClick={handleCopy}>Copy to Clipboard</button>
        )}
      </div>
    </div>
  );
}
