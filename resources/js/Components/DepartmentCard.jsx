const  DepartmentCard = ({ departmentIcon, name, description}) => {
	return(<>
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<div>
				<img src={departmentIcon} alt={name} className={`w-full`}/>
			</div>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{ name }</div>
				<p className="text-gray-700 text-base">
					{ description}
				</p>
			</div>
		</div>
	</>)

}

export default DepartmentCard;
