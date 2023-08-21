
import { Facebook, Twitter, Instagram, YouTube, LinkedIn} from "@mui/icons-material";
const components = {
	facebook: Facebook,
	twitter: Twitter,
	instagram: Instagram,
	youtube: YouTube,
	linkedin: LinkedIn
}

export default function SocialMediaList () {

	const socialLists = [
		{
			key: 'facebook',
			name: 'Facebook',
			url: '',
			icon: ''
		},
		{
			key: 'twitter',
			name: 'Twitter',
			url: '',
			icon: ''
		},
		{
			key: 'instagram',
			name: 'Instagram',
			url: '',
			icon: ''
		},
		{
			key: 'youtube',
			name: 'YouTube',
			url: '',
			icon: ''
		},
		{
			key: 'linkedin',
			name: 'Linkedin',
			url: '',
			icon: ''
		}
	]

	return (
		<>
			<ul className="flex ">
				{
					socialLists.map((item, index) => {
						const Component = components[item.key]
						return <li key={index} className={`list-item pl-1 pr-1`}>
							<a href={item.url}>
								<Component className={`text-gray-800`}/>
							</a>
						</li>
					})
				}
			</ul>
		</>
	)
}
