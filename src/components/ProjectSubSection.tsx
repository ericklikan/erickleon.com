import * as React from 'react'
import styled from 'styled-components'
import { DIMENSIONS } from 'App/AppConstants'
import Point from './Point'
import Line from './Line'
import { Subtitle } from './Styled'

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row-reverse;
`
const SeparatorContainer = styled.div`
	display: flex;
	justify-items: center;
	flex-direction: column;
`
const PointContainer = styled.div`
	min-width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	min-height: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	justify-content: center;
	align-items: center;
`
const LineContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		display: none;
	}
`
const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`
const TitleContainer = styled.div`
	width: 100%;
	height: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	align-items: center;
	justify-content: center;
`
const TextContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-items: center;
	align-items: center;
`
const Text = styled.div`
	margin-left: 50px;
	margin-right: 50px;
	width: 100%;
`
const ImageContainer = styled.div`
	margin: 50px 75px 50px 75px;
	display: flex;
	justify-content: center;
	align-items: center;
`

interface IProperties {
	title: string
	image: React.ReactElement
}
interface IState {
	isHovered: boolean
}

class ProjectSubSection extends React.Component<IProperties, IState> {
	constructor(props: IProperties) {
		super(props)
		this.state = {
			isHovered: false,
		}
		this.setHoveredOff = this.setHoveredOff.bind(this)
		this.setHoveredOn = this.setHoveredOn.bind(this)
	}

	private setHoveredOn() {
		this.setState({ isHovered: true })
	}

	private setHoveredOff() {
		this.setState({ isHovered: false })
	}

	public render() {
		return (
			<Container>
				<ContentContainer>
					<TitleContainer
						onMouseEnter={this.setHoveredOn}
						onMouseLeave={this.setHoveredOff}>
						<Subtitle>{this.props.title}</Subtitle>
					</TitleContainer>
					<TextContainer>
						<Text>{this.props.children}</Text>
					</TextContainer>
				</ContentContainer>
				<SeparatorContainer>
					<PointContainer
						onMouseEnter={this.setHoveredOn}
						onMouseLeave={this.setHoveredOff}>
						<Point hover={this.state.isHovered} />
					</PointContainer>
					<LineContainer>
						<Line />
					</LineContainer>
				</SeparatorContainer>
				<ContentContainer>
					<TitleContainer />
					<ImageContainer>{this.props.image}</ImageContainer>
				</ContentContainer>
			</Container>
		)
	}
}

export default ProjectSubSection
