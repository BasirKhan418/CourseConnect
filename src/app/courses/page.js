
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.",
      image: "/prev.jpg",
    },
    {
      id: 2,
      title: "React.js Essentials",
      description: "Dive into the world of React.js and learn how to build dynamic user interfaces.",
      image: "/prev.jpg",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      description: "Explore the core concepts of data structures and algorithms and how to apply them.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Python for Data Analysis",
      description: "Harness the power of Python to analyze and visualize data.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Mastering Git and Version Control",
      description: "Gain proficiency in Git, the industry-standard version control system.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Responsive Web Design",
      description: "Learn how to create websites that adapt seamlessly to different devices and screen sizes.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ])
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => course.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [courses, searchTerm])
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
        {filteredCourses.map((course) => (
          <Link
            key={course.id}
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
              <p className="text-gray-500 dark:text-gray-400 mb-4">{course.description}</p>
              <Button variant="" size="sm">
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
  )
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
  )
}