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
	@media only screen and (max-width: ${DIMENSIONS.BREAK_S}) {
		margin-top: 30px;
		margin-left: 0;
		flex-direction: column;
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
	@media only screen and (max-width: ${DIMENSIONS.BREAK_S}) {
		margin-top: 0;
		margin-bottom: 0;
	}
	@media only screen and (max-width: ${DIMENSIONS.BREAK_S}) {
		width: 100%;
	}
`
const Logo = styled.img`
	width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
`
const TextContainer = styled.div`
	width: 100%;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`
const Title = styled.p`
	font-weight: 700;
	font-size: 20px;
	font-family: 'Courier New', Courier, monospace;
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
const StyledLink = styled.a`
	color: inherit;
	text-decoration: none;

	&:hover {
		color: #4682b4;
	}
`

interface IProperties {
	companyLogo: string
	companyName: string
	companyUrl: string
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
						<Subtitle>
							<StyledLink href={this.props.companyUrl} target="_blank">
								{this.props.companyName}
							</StyledLink>
						</Subtitle>
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
