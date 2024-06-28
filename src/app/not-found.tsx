import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <section className="bg-light dark:bg-dark">
    <div className="container px-3 py-5 mx-auto">
      <div className="text-center">
        <div className="w-25 h-25 mx-auto mb-3 bg-light">
          <Image
            className="w-100 h-100 object-fit "
            src="/next.svg"
            alt="404"
            width={500}
            height={300}
          />
        </div>
        <h1 className="h3 font-weight-semibold text-dark text-capitalize lg:h2 dark:text-light">
          Page Not Found
        </h1>
        <p className="mt-3 text-muted dark:text-light">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="d-flex align-items-center justify-content-center mt-4">
          <Link
            href="/"
            className="px-3 py-2 text-white transition duration-200 bg-primary rounded hover:bg-secondary-dark focus:outline-none focus:bg-secondary-dark"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default NotFound;