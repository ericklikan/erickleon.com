import * as React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import { COLORS } from 'App/AppConstants'
import Point from 'components/Point'

const StartLine = styled.div`
	height: 70pt;
	width: 6pt;
	background-color: ${COLORS.SIDE_LINE_COLOR};
	border-radius: 3pt;
	transform: translate(0pt, -10pt) rotate(-35deg);
`
// possibly remove this
const EndLine = styled.div`
	height: 70pt;
	width: 6pt;
	background-color: ${COLORS.SIDE_LINE_COLOR};
	border-radius: 3pt;
	transform: translate(0pt, 10pt) rotate(35deg);
`
class Experience extends React.Component<any> {
	public render() {
		return (
			<Section title="Experience">
				<StartLine />
				<EndLine />
			</Section>
		)
	}
}

export default Experience
