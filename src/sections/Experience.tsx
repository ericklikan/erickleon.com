import * as React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import { COLORS, DIMENSIONS } from 'App/AppConstants'
import ExperienceSubSection from 'components/ExperienceSubSection'
import { TextContent, EndSpace } from 'components/Styled'

import KikLogo from 'static/kikLogo.svg'
import SMSLogo from 'static/SMSLogo.png'
import SensoftLogo from 'static/sensoftLogo.png'

const StartLine = styled.div`
	height: 100px;
	width: ${DIMENSIONS.LINE_WIDTH};
	background-color: ${COLORS.SIDE_LINE_COLOR};
	border-radius: ${DIMENSIONS.LINE_BORDER_RADIUS};
	transform: translate(12px, -15px) rotate(-35deg);
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		display: none;
	}
`

class Experience extends React.Component<any> {
	public render() {
		return (
			<Section title="Experience">
				<StartLine />
				<ExperienceSubSection
					companyLogo={KikLogo}
					companyName={'Kik Interactive'}
					companyUrl={'https://www.kik.com/'}
					title={'Backend Developer Intern'}
					timeline={'May 2019 - August 2019'}>
					<TextContent>
						During my time here, I worked on several of Kik's{' '}
						<b>Go and Java GRPC microservices</b>. At the time, the company was going
						through a rewrite of the app which included moving Kin Marketplace out of
						beta.
					</TextContent>
					<TextContent>
						I developed server infrastructure supporting the release version of Kin
						Marketplace within the app. The result was better support for kin earn and
						spend opportunities, a much faster and maintainable chat theme assets
						service, and reduced point of failures in the Kin transaction flow.
					</TextContent>
				</ExperienceSubSection>
				<ExperienceSubSection
					companyLogo={SMSLogo}
					companyName={'Secret Mission Software'}
					companyUrl={'http://www.secretmission.io/'}
					title={'Software Developer Intern'}
					timeline={'September 2018 - December 2018'}>
					<TextContent>
						Secret Mission Software was a newly-formed software consulting company so
						while I was here, I got a ton of exposure to different work and was a
						critical member of the team. Most of my time was allocated to project with a
						makeup startup based in LA called ShopHush.
					</TextContent>
					<TextContent>
						My job was to work on the <b>Android</b> side of a social media app they
						wanted to release. I ended up writing all of the instant messaging and
						notifications features on the app, which included hooking it up to an{' '}
						<b>XMPP service</b>.
					</TextContent>
					<TextContent>
						I also got to work with <b>React</b> on a personal finance app. Although the
						app wasn't finished by the end of the work term, I did play a role in
						feature planning, and architecture design.
					</TextContent>
				</ExperienceSubSection>
				<ExperienceSubSection
					companyLogo={SensoftLogo}
					companyName={'Sensors & Software'}
					companyUrl={'https://www.sensoft.ca/'}
					title={'Software Developer Intern'}
					timeline={'January 2018 - April 2018'}>
					<TextContent>
						At Sensors and Software, I developed a browser interface for a
						research-oriented ground penetrating radar. The device could hook up to 8
						transducers and simulanteously collect data while running. My work here
						involved streaming data from the radar using <b>websockets</b>, and building
						the configuration editors.
					</TextContent>
					<TextContent>
						I also had the opportunity to write a <b>Python</b> program that would
						autogenerate usage analytics reports of the different GPR products
						available.
					</TextContent>
				</ExperienceSubSection>
				<EndSpace />
			</Section>
		)
	}
}

export default Experience
