import * as React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import { COLORS } from 'App/AppConstants'
import ExperienceSubSection from './ExperienceSubSection'
import { TextContent } from 'components/Styled'
import KikLogo from 'static/kikLogo.svg'
import SMSLogo from 'static/SMSLogo.png'
import SensoftLogo from 'static/sensoftLogo.png'

const StartLine = styled.div`
	height: 70pt;
	width: 6pt;
	background-color: ${COLORS.SIDE_LINE_COLOR};
	border-radius: 3pt;
	transform: translate(0pt, -10pt) rotate(-35deg);
`

class Experience extends React.Component<any> {
	public render() {
		return (
			<Section title="Experience">
				<StartLine />
				<ExperienceSubSection
					companyLogo={KikLogo}
					companyName={'Kik'}
					title={'backend dev'}>
					<TextContent>During my time at Kik</TextContent>
				</ExperienceSubSection>
				<ExperienceSubSection
					companyLogo={SMSLogo}
					companyName={'Secret Mission Software'}
					title={'backend dev'}>
					<TextContent>Secret Mission Software</TextContent>
				</ExperienceSubSection>
				<ExperienceSubSection
					companyLogo={SensoftLogo}
					companyName={'Sensors & Software'}
					title={'backend dev'}>
					<TextContent>Sensors and Software</TextContent>
				</ExperienceSubSection>
			</Section>
		)
	}
}

export default Experience
