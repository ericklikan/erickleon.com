import * as React from 'react'
import styled from 'styled-components'
import { DIMENSIONS } from 'App/AppConstants'
import Line from 'components/Line'
import { Subtitle } from './Styled'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	margin-left: 20px;
	transform: translate(0, -20px);
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		margin-top: 30px;
		margin-left: 0;
	}
`
const LogoContainer = styled.div`
	height: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	min-width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 20px;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		margin-right: 20px;
	}
`
const Logo = styled.img`
	width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
`
const TextContainer = styled.div`
	width: 100%;
	margin: 0;
	margin-left: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		flex-direction: column;
		align-items: flex-start;
	}
`
const Title = styled.p`
	font-weight: 400;
	font-size: 20px;
	font-family: monospace;
	color: #696969;
	margin: 0;
`
const LineContainer = styled.div`
	width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	min-width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	display: flex;
	justify-content: center;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		display: none;
	}
`
const ContentContainer = styled.div`
	margin-left: 40px;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		margin-left: 0;
	}
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
						<Subtitle>{this.props.companyName}</Subtitle>
						<Title>{this.props.title}</Title>
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
