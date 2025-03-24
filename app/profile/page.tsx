"use client";
import ProfileCard from "./components/ProfileCard";
import ProfileTabs from "./components/ProfileTabs";
import ProfileStats from "./components/ProfileStats";

export default function StudentProfile() {
  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <button className="text-lg">&larr;</button>
        <h1 className="text-2xl font-semibold">Student Profile</h1>
      </div>

      {/* Profile Card */}
      <ProfileCard />

      {/* Tabs */}
      <ProfileTabs />

      {/* Profile Stats */}
      <ProfileStats />
    </div>
  );
}
