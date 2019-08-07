import * as React from 'react'
import styled from 'styled-components'

import { DIMENSIONS } from 'App/AppConstants'

import SectionTitle from 'components/SectionTitle'
import Line from 'components/Line'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	margin: 0;
`
const LineContainer = styled.div`
	min-width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	justify-content: center;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_S}) {
		min-width: ${DIMENSIONS.SECTION_SIDE_LENGTH_S};
	}
`
const ContentContainer = styled.div`
	width: 100%;
`

interface IProperties {
	title: string
}

const Section: React.FC<IProperties> = props => (
	<div>
		<SectionTitle title={props.title} />
		<Container>
			<LineContainer>
				<Line />
			</LineContainer>
			<ContentContainer>{props.children}</ContentContainer>
		</Container>
	</div>
)

export default Section
