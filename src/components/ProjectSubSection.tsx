import * as React from 'react'
import styled from 'styled-components'
import { DIMENSIONS } from 'App/AppConstants'
import Point from './Point'
import Line from './Line'

interface IProperties {
	// use for alternating projects
	index: number
}
const Container = styled.div`
	display: flex;
	justify-content: center;
`
const SeparatorContainer = styled.div`
	display: flex;
	justify-items: center;
	flex-direction: column;
`
const PointContainer = styled.div`
	height: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	min-width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	justify-content: center;
	align-items: center;
`
const LineContainer = styled.div`
	display: flex;
	justify-content: center;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		display: none;
	}
`

class ProjectSubSection extends React.Component<IProperties> {
	public render() {
		return (
			<Container>
				<SeparatorContainer>
					<PointContainer>
						<Point hover={false} />
					</PointContainer>
					<LineContainer>
						<Line />
					</LineContainer>
				</SeparatorContainer>
			</Container>
		)
	}
}

export default ProjectSubSection
