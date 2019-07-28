import * as React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import { DIMENSIONS, COLORS } from 'App/AppConstants'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	padding: 0 0 0 0;
`
const ContentContainer = styled.div`
	margin: 0;
	padding: 0 30pt 0 20pt;
	display: flex;
`
const LineContainer = styled.div`
	width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	min-width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	justify-content: center;
`
const Line = styled.div`
	height: 100%;
	width: 6pt;
	background-color: ${COLORS.SIDE_LINE_COLOR};
	border-radius: 3pt;
`
interface IProps {
	title: string
}

const Section: React.FC<IProps> = props => (
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
