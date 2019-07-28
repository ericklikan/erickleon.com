import React from 'react'
import Sidebar from 'sections/Sidebar'
import MainPage from 'pages/MainPage'
import { appState } from 'App/AppState'
import styled from 'styled-components'

const AppDiv = styled.div`
	height: 100%;
`

const App: React.FC = () => {
	return (
		<AppDiv>
			<Sidebar appState={appState} />
			<MainPage appState={appState} />
		</AppDiv>
	)
}

export default App
