import DepartmentCard from "@/Components/DepartmentCard.jsx";

const DepartmentCards = () => {
	const departments = [];
	return(
		<>
			{
				departments.map((department, item) => {
					return (
						<>
							<DepartmentCard {...department}/>
						</>
					)
				})
			}
		</>
	)
}

export default DepartmentCards;
