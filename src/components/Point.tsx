import * as React from 'react'
import styled from 'styled-components'
import { ANIMATION, DIMENSIONS } from 'App/AppConstants'

const OuterCircle = styled.div`
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #4472ca;
	height: ${DIMENSIONS.OUTER_POINT_SIZE};
	width: ${DIMENSIONS.OUTER_POINT_SIZE};
`
const InnerCircle = styled.div`
	border-radius: 50%;
	background-color: #0a369d;
	transition: height ${ANIMATION.POINT}, width ${ANIMATION.POINT};
`

interface IProperties {
	hover: boolean
}

const Point = (props: IProperties) => {
	const size = props.hover ? DIMENSIONS.INNER_POINT_SIZE_HOVERED : DIMENSIONS.INNER_POINT_SIZE
	return (
		<OuterCircle>
			<InnerCircle
				style={{
					width: size,
					height: size,
				}}
			/>
		</OuterCircle>
	)
}

export default Point
