"use client";

import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import { IconType } from "react-icons";

type IconWrapperProps = {
  iconName: string;
  className?: string;
  size?: number;
};

const iconLibraries: Record<string, Record<string, IconType>> = {
  Fa: FaIcons,
  Io: IoIcons,
  Si: SiIcons,
};

export const IconWrapper = ({ iconName, className = "", size = 20 }: IconWrapperProps) => {
  // Extract prefix like Fa, Io, Si from iconName
  const prefix = iconName.slice(0, 2); // e.g., "Fa" from "FaTwitter"
  const iconLib = iconLibraries[prefix];
  const IconComponent = iconLib?.[iconName];

  if (!IconComponent) return null;

  return <IconComponent className={className} size={size} />;
};
