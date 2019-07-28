import * as React from 'react'
import Point from 'components/Point'
import { Subtitle } from 'components/Styled'
import styled from 'styled-components'
import { Container } from 'components/Section'
import { DIMENSIONS } from 'App/AppConstants'

const PointContainer = styled.div`
	height: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	min-width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	justify-content: center;
	align-items: center;
`
const TextContainer = styled.div`
	width: 100%;
	margin: 0;
	padding-left: 20pt;
	display: flex;
	align-items: center;
`

interface IProps {
	title: string
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
					<Subtitle>{this.props.title}</Subtitle>
				</TextContainer>
			</Container>
		)
	}
}

export default SectionTitle
