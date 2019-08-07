import React from 'react'
import MainPage from 'pages/MainPage'
import styled from 'styled-components'

const AppDiv = styled.div`
	height: 100%;
`

const App: React.FC = () => {
	// TODO: add some sort of navbar?
	return (
		<AppDiv>
			<MainPage />
		</AppDiv>
	)
}

export default App
