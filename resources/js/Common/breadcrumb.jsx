import { Link } from "@inertiajs/react"

export default function BreadCrumb({ breadcrumbs=[] }){
  if(!breadcrumbs.length ){
    return <></>
  }
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {
          breadcrumbs.map((breadcrumb, index) => {
            return (
              <li className="inline-flex items-center" key={index}>
                <Link
                  href={breadcrumb.url}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  { index !== 0 && (
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                  )}
                  
                  { breadcrumb.title}
                </Link>
              </li>   
            )
          })
        }
      </ol>
    </nav>
  )
} 