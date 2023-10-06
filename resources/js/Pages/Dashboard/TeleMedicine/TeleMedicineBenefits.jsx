import { CommonIcons } from "@/Utilities/icons";
const benefitsList = [
  {
    id: 1, content: "Reduced exposure to contagious patients."
  },
  {
    id: 2, content: "Improved time and commute efficiency."
  },
  {
    id:3 , content: "Enhanced privacy."
  },
  {
    id: 4, content: "Easier patient follow-up."
  },
  {
    id: 5, content: "Flexible work hours."
  },
  {
    id: 6, content: "Better access to special medical opinions."
  },
  {
    id: 7, content: "Possible disaster management solutions."
  },
  {
    id: 8, content: "Precise analysis, with the help of stored data."
  }
]; 
export default function TeleMedicineBenefits(){
  return (
    <div>
      <div className="flex mb-12">
        <h2 className="uppercase mr-auto ml-auto text-center bg-white text-dark px-4 py-2 text-[32px] font-bold tracking-[.1em]">Telemedicine Beneficts</h2>
      </div>
      <div className="px-5 py-2">
        <ul className="grid grid-cols-2 gap-2">
         {
          benefitsList.map((benefit, index) => {
            return (
              <li key={benefit.id} data-index={index}>
                <div className="flex items-center mb-3">
                  <div className="mr-1">
                    <span className="block p-4 rounded-full bg-blue-500">
                      <img className="h-5 text-white" src={CommonIcons.RocketIcon} alt={benefit.content} />
                    </span>
                  </div>
                  <div className="block tran">
                    <span className="text-white text-[18px]">
                      { benefit.content }
                    </span>
                  </div>
                </div>
              </li>
            )
          })
         }
        </ul>
      </div>
    </div>
  )
}