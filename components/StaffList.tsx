"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaDiscord as DiscordIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";

type StaffRole =
  | "Owner"
  | "Admin"
  | "Developer"
  | "Moderator"
  | "Trial Moderator";

interface Staff {
  name: string;
  role: StaffRole;
  uuid: string;
  discord?: string;
  twitter?: string;
}

const ROLE_HIERARCHY: StaffRole[] = [
  "Owner",
  "Admin",
  "Developer",
  "Moderator",
  "Trial Moderator",
];

const getRoleWeight = (role: StaffRole): number =>
  ROLE_HIERARCHY.indexOf(role);

const getRoleColor = (role: StaffRole): string => {
  switch (role) {
    case "Owner":
      return "#ff5757";
    case "Admin":
      return "#ffa500";
    case "Developer":
      return "#57ff57";
    case "Moderator":
      return "#5757ff";
    case "Trial Moderator":
      return "#a557ff";
    default:
      return "#ffffff";
  }
};

// Use Crafatar API's full body render for Minecraft skins.
// Adjust the "scale" value if a larger or smaller image is preferred.
const getCrafatarUrl = (uuid: string): string =>
  `https://crafatar.com/renders/body/${uuid}?overlay&scale=10`;

const STAFF_MEMBERS: Staff[] = [
  {
    name: "TheOwner",
    role: "Owner",
    uuid: "8667ba71-b85a-4004-af54-457a9734eed7",
  },
  {
    name: "MiniKloon",
    role: "Admin",
    uuid: "20934ef9-488c-4651-80a7-8f861586b4cf",
  },
  {
    name: "AshiqTasdid",
    role: "Developer",
    uuid: "7f894fdf-72a9-4125-90ad-458c334e5de3",
    discord: "ashiqtasdid",
    twitter: "TheAshiqTasdid",
  },
  {
    name: "FitMC",
    role: "Moderator",
    uuid: "a3be358a-966f-4043-bfab-2acbfe03e051",
  },
  {
    name: "ThirtyVirus",
    role: "Trial Moderator",
    uuid: "c3b94027-47b1-433d-8b20-cd54c7da3f5d",
  },
];

const StaffList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sortedStaff = [...STAFF_MEMBERS].sort(
    (a, b) => getRoleWeight(a.role) - getRoleWeight(b.role)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex bg-[#252525] justify-center items-center min-h-[600px]">
        <div className="grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-gray-700 animate-pulse rounded"
              style={{
                animation: `pulse 1.5s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid bg-[#252525] grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 p-8 max-w-[1400px] mx-auto">
      {sortedStaff.map((staff, index) => (
        <div
          key={index}
          className="relative rounded-lg p-6 text-center transition-all duration-300 bg-[#2d2d2d] hover:bg-[#3a3a3a] group shadow-lg"
        >
          <div className="relative w-48 h-64 mx-auto mb-4">
            <Image
              src={getCrafatarUrl(staff.uuid)}
              alt={staff.name}
              width={192}
              height={256}
              className="w-full h-full object-contain rounded transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-white text-xl font-bold mb-2">{staff.name}</h3>
          <div
            className="inline-block px-4 py-1 rounded-full border text-sm font-medium mb-3"
            style={{
              color: getRoleColor(staff.role),
              borderColor: getRoleColor(staff.role),
            }}
          >
            {staff.role}
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {staff.discord && (
              <a
                href={`https://discord.com/users/${staff.discord}`}
                className="text-white/70 hover:text-[#C31F1F] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon className="w-5 h-5" />
              </a>
            )}
            {staff.twitter && (
              <a
                href={`https://twitter.com/${staff.twitter}`}
                className="text-white/70 hover:text-[#C31F1F] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffList;