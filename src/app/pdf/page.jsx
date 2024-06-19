/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TQLWVS5Voso
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-4 md:p-6">
      <div className="flex items-center gap-2 bg-background rounded-lg border">
        <input
          type="search"
          placeholder="Search PDF files..."
          className="flex-1 px-4 py-3 bg-transparent border-none focus:ring-0"
        />
        <Button variant="ghost" className="px-4 py-3 rounded-lg">
          <SearchIcon className="w-5 h-5" />
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-background rounded-lg overflow-hidden group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View PDF</span>
          </Link>
          <img
            src="/prev.jpg"
            alt="PDF Thumbnail"
            width={300}
            height={200}
            className="w-full h-[200px] object-cover group-hover:opacity-50 transition-opacity"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-1">Annual Report 2023</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              A comprehensive overview of our company's performance and financial standing for the year 2023.
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="w-full">
                Download
              </Button>
              <Button variant="outline" className="w-full">
                View
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View PDF</span>
          </Link>
          <img
            src="/prev.jpg"
            alt="PDF Thumbnail"
            width={300}
            height={200}
            className="w-full h-[200px] object-cover group-hover:opacity-50 transition-opacity"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-1">Marketing Strategy Presentation</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              A detailed presentation outlining our marketing strategy for the upcoming year.
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="w-full">
                Download
              </Button>
              <Button variant="outline" className="w-full">
                View
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View PDF</span>
          </Link>
          <img
            src="/prev.jpg"
            alt="PDF Thumbnail"
            width={300}
            height={200}
            className="w-full h-[200px] object-cover group-hover:opacity-50 transition-opacity"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-1">Product Roadmap 2024</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              A detailed plan outlining the development and release of our upcoming products for the year 2024.
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="w-full">
                Download
              </Button>
              <Button variant="outline" className="w-full">
                View
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View PDF</span>
          </Link>
          <img
            src="/prev.jpg"
            alt="PDF Thumbnail"
            width={300}
            height={200}
            className="w-full h-[200px] object-cover group-hover:opacity-50 transition-opacity"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-1">Employee Handbook 2023</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              A comprehensive guide for all employees, covering company policies, benefits, and workplace procedures.
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="w-full">
                Download
              </Button>
              <Button variant="outline" className="w-full">
                View
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View PDF</span>
          </Link>
          <img
            src="/prev.jpg"
            alt="PDF Thumbnail"
            width={300}
            height={200}
            className="w-full h-[200px] object-cover group-hover:opacity-50 transition-opacity"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-1">Quarterly Financial Report Q1 2024</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              A detailed financial report covering the company's performance and financial standing for the first
              quarter of 2024.
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="w-full">
                Download
              </Button>
              <Button variant="outline" className="w-full">
                View
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden group">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View PDF</span>
          </Link>
          <img
            src="/prev.jpg"
            alt="PDF Thumbnail"
            width={300}
            height={200}
            className="w-full h-[200px] object-cover group-hover:opacity-50 transition-opacity"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold line-clamp-1">Customer Feedback Analysis</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              A comprehensive analysis of customer feedback, identifying key areas for improvement and future product
              development.
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="w-full">
                Download
              </Button>
              <Button variant="outline" className="w-full">
                View
              </Button>
            </div>
          </div>
        </div>
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