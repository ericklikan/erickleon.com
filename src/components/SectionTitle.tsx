import * as React from 'react'
import Point from 'components/Point'
import { Subtitle } from './Styled'

interface IProps {
	title: string
}

interface IState {
	isHovered: boolean
}

export default class SectionTitle extends React.Component<IProps, IState> {
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
			<div onMouseEnter={this.setHoveredOn} onMouseLeave={this.setHoveredOff}>
				<span>
					<Point hover={this.state.isHovered} />
					<Subtitle>{this.props.title}</Subtitle>
				</span>
			</div>
		)
	}
}
