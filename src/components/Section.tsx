import * as React from 'react'
import styled from 'styled-components'
import SectionTitle from 'components/SectionTitle'
import Line from 'components/Line'
import { DIMENSIONS } from 'App/AppConstants'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	padding: 0 0 0 0;
`
export const LineContainer = styled.div`
	width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	min-width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	justify-content: center;
`
const ContentContainer = styled.div`
	width: 100%;
	margin: 0;
	padding-right: 40px;
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
