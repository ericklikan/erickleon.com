import * as React from 'react'
import styled from 'styled-components'
import { ANIMATION, DIMENSIONS } from 'App/AppConstants'

const OuterCircle = styled.div`
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1b3b6f;
	transition: ${ANIMATION.POINT_OUTER};
`
const InnerCircle = styled.div`
	border-radius: 50%;
	background-color: #4682b4;
	transition: ${ANIMATION.POINT_INNER};
`

interface IProperties {
	hover: boolean
}

const Point = (props: IProperties) => {
	const inner = props.hover ? DIMENSIONS.INNER_POINT_SIZE_HOVERED : DIMENSIONS.INNER_POINT_SIZE
	const outer = props.hover ? DIMENSIONS.OUTER_POINT_SIZE_HOVERED : DIMENSIONS.OUTER_POINT_SIZE
	return (
		<OuterCircle
			style={{
				width: outer,
				height: outer,
			}}>
			<InnerCircle
				style={{
					width: inner,
					height: inner,
				}}
			/>
		</OuterCircle>
	)
}

export default Point
