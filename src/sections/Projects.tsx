import * as React from 'react'
import Section from 'components/Section'
import ProjectSubSection from 'components/ProjectSubSection'
import { COLORS } from 'App/AppConstants'
import styled from 'styled-components'

import AutogardenerImage from 'static/AutoGardener.jpg'
import PlaymojiImage from 'static/playmoji.png'
import { EndSpace, TextContent } from 'components/Styled'

const LineContainer = styled.div`
	transform: translate(-8px, -16px);
`
const ProjectsContainer = styled.div`
	transform: translateY(-35px);
`
class Projects extends React.Component<any> {
	public render() {
		return (
			<Section title="Projects">
				<LineContainer>
					<svg viewBox="0 0 250 50">
						<line
							x1="2"
							y1="2"
							x2="118"
							y2="49"
							vectorEffect="non-scaling-stroke"
							style={{
								stroke: COLORS.SIDE_LINE_COLOR,
								strokeWidth: '6px',
								strokeLinecap: 'round',
							}}
						/>
					</svg>
				</LineContainer>
				<ProjectsContainer>
					<ProjectSubSection title="Autogardener" image={AutogardenerImage}>
						<TextContent>
							I started working on this because I wanted to start growing some hot
							peppers and soon enough, I had both hot peppers and a fully automated
							gardening device. This project included a dashboard to monitor and water
							the plants, even including a voice control feature!
						</TextContent>
						<TextContent>
							A whole lot of technologies were used to make this possible. This
							included a raspberry pi, an Arduino for the device, a web socket service
							to send and recieve data, and a React page for the dashboard.
						</TextContent>
					</ProjectSubSection>
					<ProjectSubSection title="Playmoji" image={PlaymojiImage}>
						<TextContent>
							Playmoji is an emoji-to-playlist converter that we built at EngHack
							2019.
						</TextContent>
					</ProjectSubSection>
				</ProjectsContainer>
				<EndSpace />
			</Section>
		)
	}
}

export default Projects
