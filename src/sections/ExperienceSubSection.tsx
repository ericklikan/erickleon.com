import * as React from 'react'
import styled from 'styled-components'
import { DIMENSIONS } from 'App/AppConstants'
import Line from 'components/Line'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
	padding: 0 0 0 0;
	transform: translate(0, -15pt);
`
const LogoContainer = styled.div`
	height: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	min-width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20pt;
`
const Logo = styled.img`
	width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
`
const LineContainer = styled.div`
	width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	min-width: ${DIMENSIONS.EXPERIENCE_LOGO_SIZE};
	display: flex;
	justify-content: center;
`

interface IProperties {
	companyLogo: string
	companyName: string
	title: string
}

class ExperienceSubSection extends React.Component<IProperties> {
	public render() {
		return (
			<div>
				<Container>
					<LogoContainer>
						<Logo src={this.props.companyLogo} alt={this.props.companyName} />
					</LogoContainer>
				</Container>
				<Container>
					<LineContainer>
						<Line />
					</LineContainer>
					{this.props.children}
				</Container>
			</div>
		)
	}
}

export default ExperienceSubSection
