import * as React from 'react'
import styled from 'styled-components'
import { DIMENSIONS, COLORS } from 'App/AppConstants'
import Line from 'components/Line'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	padding: 0 0 0 20px;
	transform: translate(0, -20px);
`
const LogoContainer = styled.div`
	height: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	min-width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 20px;
`
const Logo = styled.img`
	width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
`
const TextContainer = styled.div`
	width: 100%;
	margin: 0;
	padding-left: 40px;
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
	font-size: 20px;
	font-family: 'Montserrat', sans-serif;
	margin: 0;
`
const Timeline = styled.div`
	font-weight: 400;
	font-size: 20px;
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
	padding-left: 40px;
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
