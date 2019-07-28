import styled from 'styled-components'
import { COLORS, DIMENSIONS } from 'App/AppConstants'

// Use to center text
export const Centered = styled.div`
	text-align: center;
	color: ${COLORS.TEXT_COLOR};
`

// Use for Page title
export const Title = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: ${DIMENSIONS.TITLE_SIZE};
	color: ${COLORS.TEXT_COLOR};
`

// Use for section title
export const Subtitle = styled.p`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: ${DIMENSIONS.SUBTITLE_SIZE};
	color: ${COLORS.TEXT_COLOR};
`

// Use for normal text
export const Text = styled.p`
	font-family: 'Montserrat', sans-serif;
	font-size: ${DIMENSIONS.TEXT_SIZE};
	color: ${COLORS.TEXT_COLOR};
`
