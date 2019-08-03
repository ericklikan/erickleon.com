import * as React from 'react'
import Section from 'components/Section'
import ProjectSubSection from 'components/ProjectSubSection'
import { COLORS, DIMENSIONS } from 'App/AppConstants'
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
const StyledPlaymojiImage = styled.img`
	width: 100%;
	height: auto;
	border-radius: ${DIMENSIONS.IMAGE_BORDER_RADIUS};
	border: black solid 1px;
`
const StyledAutoGardenerImage = styled.img`
	width: 100%;
	height: auto;
	border-radius: ${DIMENSIONS.IMAGE_BORDER_RADIUS};
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
								strokeWidth: DIMENSIONS.LINE_WIDTH,
								strokeLinecap: 'round',
							}}
						/>
					</svg>
				</LineContainer>
				<ProjectsContainer>
					<ProjectSubSection
						title="Autogardener"
						image={<StyledAutoGardenerImage src={AutogardenerImage} />}>
						<TextContent>
							I started working on this because I wanted to start growing some hot
							peppers and soon enough, I had both hot peppers and a fully automated
							gardening device. This project included a dashboard to monitor and water
							the plants, even a voice control feature!
						</TextContent>
					</ProjectSubSection>
					<ProjectSubSection
						title="Playmoji"
						image={<StyledPlaymojiImage src={PlaymojiImage} />}>
						<TextContent>
							Playmoji is an emoji-to-playlist converter that we built at EngHack
							2019. Using a series of emojis that's on your mind, your favourite
							songs, and some magic with the Spotify API, we generate a brand new
							playlist just for you!
						</TextContent>
					</ProjectSubSection>
				</ProjectsContainer>
				<EndSpace />
			</Section>
		)
	}
}

export default Projects
