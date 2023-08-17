import {Grid} from "@mui/material";

export default function Media({ Icon, title, description,...props }){
	return(
		<>
			<Grid container spacing={2}>
				<Grid item xs={'auto'}>
					<div className="flex h-full items-center">
						{ Icon }
					</div>
				</Grid>
				<Grid item xs={12} sm>
					<div>
						<h3>{ title }</h3>
					</div>
					<div>
						<p className={`mb-0`}>
							{ description }
						</p>
					</div>
				</Grid>
			</Grid>
		</>
	)
}
