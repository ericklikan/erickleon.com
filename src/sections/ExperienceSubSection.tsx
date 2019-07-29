import * as React from 'react'
import styled from 'styled-components'
import { DIMENSIONS, COLORS } from 'App/AppConstants'
import Line from 'components/Line'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	padding: 0 0 0 10pt;
	transform: translate(0, -15pt);
`
const LogoContainer = styled.div`
	height: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	min-width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20pt;
	margin-top: 10pt;
	margin-bottom: 10pt;
`
const Logo = styled.img`
	width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
`
const TextContainer = styled.div`
	width: 100%;
	margin: 0;
	padding-left: 30pt;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const CompanyName = styled.p`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: ${DIMENSIONS.SUBTITLE_SIZE};
	color: ${COLORS.TEXT_COLOR};
	margin: 0;
`
const Title = styled.p`
	font-weight: 400;
	font-size: 13pt;
	font-family: 'Montserrat', sans-serif;
	margin: 0;
`
const Timeline = styled.div`
	font-weight: 400;
	font-size: 13pt;
	font-family: 'Montserrat', sans-serif;
	margin: 0;
`
const LineContainer = styled.div`
	width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	min-width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	display: flex;
	justify-content: center;
`
const ContentContainer = styled.div`
	padding-left: 30pt;
`

interface IProperties {
	companyLogo: string
	companyName: string
	title: string
	timeline: string
}

class ExperienceSubSection extends React.Component<IProperties> {
	public render() {
		return (
			<div>
				<Container>
					<LogoContainer>
						<Logo src={this.props.companyLogo} alt={this.props.companyName} />
					</LogoContainer>
					<TextContainer>
						<div>
							<CompanyName>{this.props.companyName}</CompanyName>
							<Title>{this.props.title}</Title>
						</div>
						<Timeline>{this.props.timeline}</Timeline>
					</TextContainer>
				</Container>
				<Container>
					<LineContainer>
						<Line />
					</LineContainer>
					<ContentContainer>{this.props.children}</ContentContainer>
				</Container>
			</div>
		)
	}
}

export default ExperienceSubSection
