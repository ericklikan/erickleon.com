import * as React from 'react'
import styled from 'styled-components'
import { DIMENSIONS, COLORS } from 'App/AppConstants'
import Point from './Point'
import Line from './Line'
import { Subtitle } from './Styled'

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row-reverse;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		margin-top: 50px;
		flex-direction: row;
	}
	@media only screen and (max-width: ${DIMENSIONS.BREAK_S}) {
		flex-direction: column;
	}
`
const SeparatorContainer = styled.div`
	display: flex;
	justify-items: center;
	flex-direction: column;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		display: none;
	}
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
const TitleContainerSpace = styled.div`
	width: 100%;
	height: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_S}) {
		display: none;
	}
`
const TextContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
`
const Text = styled.div`
	margin: 0 50px;
`
const ImageContainer = styled.div`
	margin: 50px 75px 50px 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		margin: auto 25px;
		flex-direction: row;
	}
	@media only screen and (max-width: ${DIMENSIONS.BREAK_S}) {
		margin: auto 75px;
		flex-direction: column;
	}
`
const Link = styled.a`
	text-decoration: none;
	font-family: Courier, monospace;
	font-size: 18px;
	padding: 15px;
	background-color: #ebebeb;
	border: 2px solid;
	border-color: #696969;
	color: ${COLORS.TEXT_COLOR};
	text-align: center;
	border-radius: 7px;
	margin: 10px auto;
	transition: border-color 200ms;
	&:hover {
		border-color: ${COLORS.SIDEBAR_BACKGROUND_COLOR};
	}
`
interface IProperties {
	title: string
	image: React.ReactElement
	githubLink: string
}
interface IState {
	isHovered: boolean
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
						<Link href={this.props.githubLink}>
							<i className="fa fa-github" /> Check it out!
						</Link>
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
					<TitleContainerSpace />
					<ImageContainer>{this.props.image}</ImageContainer>
				</ContentContainer>
			</Container>
		)
	}
}

export default ProjectSubSection
