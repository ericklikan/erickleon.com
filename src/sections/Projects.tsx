import * as React from 'react'
import Section from 'components/Section'
import { DIMENSIONS, COLORS } from 'App/AppConstants'
import styled from 'styled-components'

const LineContainer = styled.div`
	transform: translate(-8px, -16px);
`

class Projects extends React.Component<any> {
	public render() {
		return (
			<Section title="Projects">
				<LineContainer>
					<svg viewBox="0 0 250 50">
						<line
							x1="2"
							y1="2"
							x2="123"
							y2="48"
							vectorEffect="non-scaling-stroke"
							style={{
								stroke: COLORS.SIDE_LINE_COLOR,
								strokeWidth: '6px',
								strokeLinecap: 'round',
							}}
						/>
						Sorry, your browser does not support inline SVG.
					</svg>
				</LineContainer>
			</Section>
		)
	}
}

export default Projects
