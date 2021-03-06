import * as React from 'react'
import Point from 'components/Point'
import { SectionTitleContent } from 'components/Styled'
import styled from 'styled-components'
import { Container } from 'components/Section'
import { DIMENSIONS } from 'App/AppConstants'

const PointContainer = styled.div`
	height: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	min-width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_S}) {
		min-width: ${DIMENSIONS.SECTION_SIDE_LENGTH_S};
	}
`
const TextContainer = styled.div`
	width: 100%;
	margin: 0;
	margin-left: 50px;
	display: flex;
	align-items: center;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_S}) {
		margin-left: 0px;
		justify-content: center;
	}
`

interface IProps {
	title?: string
}

interface IState {
	isHovered: boolean
}

class SectionTitle extends React.Component<IProps, IState> {
	constructor(props: IProps) {
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
			<Container onMouseEnter={this.setHoveredOn} onMouseLeave={this.setHoveredOff}>
				<PointContainer>
					<Point hover={this.state.isHovered} />
				</PointContainer>
				<TextContainer>
					<SectionTitleContent>{this.props.title}</SectionTitleContent>
				</TextContainer>
			</Container>
		)
	}
}

export default SectionTitle
