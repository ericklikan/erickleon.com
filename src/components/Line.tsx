import styled from 'styled-components'
import { COLORS, DIMENSIONS } from 'App/AppConstants'

export default styled.div`
	height: 100%;
	width: ${DIMENSIONS.LINE_WIDTH};
	background-color: ${COLORS.SIDE_LINE_COLOR};
	border-radius: ${DIMENSIONS.LINE_BORDER_RADIUS};
`
