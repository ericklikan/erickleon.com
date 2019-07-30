import * as React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import { COLORS } from 'App/AppConstants'
import ExperienceSubSection from 'components/ExperienceSubSection'
import { TextContent } from 'components/Styled'
import KikLogo from 'static/kikLogo.svg'
import SMSLogo from 'static/SMSLogo.png'
import SensoftLogo from 'static/sensoftLogo.png'

const StartLine = styled.div`
	height: 100px;
	width: 6px;
	background-color: ${COLORS.SIDE_LINE_COLOR};
	border-radius: 3px;
	transform: translate(12px, -15px) rotate(-35deg);
`

class Experience extends React.Component<any> {
	public render() {
		return (
			<Section title="Experience">
				<StartLine />
				<ExperienceSubSection
					companyLogo={KikLogo}
					companyName={'Kik Interactive'}
					title={'Backend Developer Intern'}
					timeline={'May 2019 - August 2019'}>
					<TextContent>
						During my time here, I worked on several of Kik's microservices. While I was
						here, the company was going through a rewrite of the app which included
						moving Kin Marketplace out of beta. I developed infrastructure supporting
						the release version of Kin integration within the app. The result was better
						support for kin earn and spend opportunities, serving chat themes to mobile,
						and reducing point of failures in the Kin transaction flow.
					</TextContent>
					<TextContent>
						Most of Kik's services were written in Java, but I also had the opportunity
						to create some services in Go. This is the term where I got to learn a ton
						about databasing and microservice architecture.
					</TextContent>
				</ExperienceSubSection>
				<ExperienceSubSection
					companyLogo={SMSLogo}
					companyName={'Secret Mission Software'}
					title={'Software Developer Intern'}
					timeline={'September 2018 - December 2018'}>
					<TextContent>
						Secret Mission Software is a small software consulting company so while I
						was here, I got a ton of exposure to different work and got to make some
						impact. Most of my time was allocated to project with a startup, based out
						of LA, called Hush. My job was to work on the Android side of a social media
						app they wanted to release. I ended up writing most of the messages portion
						and hooking it up an XMPP service.
					</TextContent>
					<TextContent>
						I also got to work with React on a personal finance app. Although the app
						wasn't finished by the end of the work term, I did play a role in feature
						planning, and software architecture design.
					</TextContent>
				</ExperienceSubSection>
				<ExperienceSubSection
					companyLogo={SensoftLogo}
					companyName={'Sensors & Software'}
					title={'Software Developer Intern'}
					timeline={'January 2018 - April 2018'}>
					<TextContent>
						At Sensors and Software, I developed a browser interface for a very niche
						ground penetrating radar. The product was a device that you could hook up to
						8 transducers and simulanteously collect data while running. This data
						collection could be done in different configurations. The work I did here
						was streaming data from the transducer and setting up configuration editors
						for the device.
					</TextContent>
					<TextContent>
						I also had the opportunity to write a program that would autogenerate
						analytics reports of what features people used the most on the radar.
					</TextContent>
				</ExperienceSubSection>
			</Section>
		)
	}
}

export default Experience
