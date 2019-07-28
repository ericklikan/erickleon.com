import * as React from 'react'
import Section from 'components/Section'
import { TextContent } from 'components/Styled'

class About extends React.Component<any> {
	public render() {
		return (
			<Section title="About Me">
				<TextContent>
					I’m currently a third year Computer Engineering student at Waterloo. From a
					young age I’ve been a builder. Beginning with building Legos to building PCs and
					then moving onto electronic projects. I love that feeling of making ideas a
					reality and it’s what led me to becoming a developer.
				</TextContent>
			</Section>
		)
	}
}

export default About
