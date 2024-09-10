"use client";
import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Course from "../../../public/Jsons/orcourse.json";
import Scourse from "../../../public/Jsons/course.json";
import linkdata from "../../../public/Jsons/links.json";
export default function Component() {
  //starts from here
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(Course.data);
  }, []);
  const filteredCourses = useMemo(() => {
    return Course.data.filter((course) => {
      return (
        (course.title &&
          course.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (course.code &&
          course.code.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  }, [courses, searchTerm]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-xl lg:text-2xl font-bold  ">Courses</h1>
        <div className="relative w-full max-w-md mx-2 ">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-10 py-4 h-10 text-gray-900 focus:border-gray-400 focus:outline-none dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCourses.slice(0, 10).map((course,index) => (
          <Link
            key={index}
            href="#"
            className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            prefetch={false}
          >
            <img
              src="/prev.jpg"
              alt={course.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <div className="course-description bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Programme:{" "}
                  </span>
                  {course.Programme}
                </p>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Stream/Branch:{" "}
                  </span>
                  {course["Stream/Branch"]}
                </p>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Basket:{" "}
                  </span>
                  {course.Basket}
                </p>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Course Type:{" "}
                  </span>
                  {course.coursetype}
                </p>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Code:{" "}
                  </span>
                  {course.code}
                </p>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <span className="text-gray-500 dark:text-gray-400">
                    Credit:{" "}
                  </span>
                  {course.Credit}
                </p>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  <span className="text-gray-500 dark:text-gray-400">
                    Type (T+P+Pj):{" "}
                  </span>
                  {course["Type(T+P+Pj)"]}
                </p>
              </div>
              <Button variant="" size="sm" onClick={()=>{
                const tt = course.title.split(" ").join("-").toLowerCase();
                const scours = Scourse.filter((c) => c.loc.includes(tt)||c.loc.includes(course.title.toLowerCase()));
                console.log(scours)
                if(scours.length>0){
                  window.open(scours[0].loc, "_blank")
                  console.log(scours)
                }
              else{
                // window.open(`https://course.cutm.ac.in/courses/${tt}`, "_blank")
                let a  = linkdata.filter((c)=>{return c.includes(tt)||c.includes(course.title.toLowerCase())})
                if(a.length>0){
                  window.open(a[0], "_blank")
                }
                else{
                  window.open(`https://course.cutm.ac.in/courses/${tt}`, "_blank");
                }
              }
              }}>
                View Now
              </Button>
              <Button variant="outline" size="sm" className="mx-4">
                Enroll
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
