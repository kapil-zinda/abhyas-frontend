"use client";
import React, { useState } from "react";
import SubjectCard from "../cards/SubjectCard";
import { subject_details } from "@/utils/problems/page";
import Link from "next/link";
import { SubjectDetails } from "@/utils/types/problem";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user-info"));
  const setAuthModalState = useSetRecoilState(authModalState);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
              <span className="ml-3" onClick={toggleSidebar}>
                Close
              </span>
            </li>

            {!user && (
              <li>
                <Link
                  href="/auth"
                  onClick={() =>
                    setAuthModalState((prev) => ({
                      ...prev,
                      isOpen: true,
                      type: "login",
                    }))
                  }
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                </Link>
              </li>
            )}

            {!user && (
              <li>
                <Link
                  href="/auth"
                  onClick={() =>
                    setAuthModalState((prev) => ({
                      ...prev,
                      isOpen: true,
                      type: "register",
                    }))
                  }
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-700 text-white group"
                >
                  <span className="ml-4">Hi! {user["username"]}</span>
                </Link>
              </li>
            )}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-700">
            {subject_details.map(
              (subjectdata: SubjectDetails, index: number) => {
                return (
                  <li>
                    <Link
                      href={`/${subjectdata.name}`}
                      className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-700 text-white group"
                    >
                      <span className="ml-4">{subjectdata.displayname}</span>
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <Link
                href="/quiz/arithmatic"
                className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-700 text-white group"
              >
                <span className="ml-4">Take Aptitude Test</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
