import { useState } from "react";
export default function AccordionSideMenu({ id, title, link, open=false, children, ...props}){
  const [isOpen, setIsOpen] = useState(open);

  const toggleAccordion = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return(
    <>
      <div id={id} data-accordion="open">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-t-1 border-b-1 border-gray-200   dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
            onClick={ e => toggleAccordion(e)}
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>{" "}
            {title }
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 ${ isOpen ? 'rotate':'rotate-180'} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className={isOpen ? '': 'hidden'}
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="p-5 border-l-0 border-r-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            { children }
          </div>
        </div>  
      </div>
    </>
  )
}