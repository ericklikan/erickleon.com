import * as React from 'react'
import { Title } from 'components/Styled'
import styled from 'styled-components'
import { DIMENSIONS, COLORS } from 'App/AppConstants'

const IntroductionPage = styled.div`
	height: 100vh;
	transition: 500ms;
	margin: 0 30px;
	margin-bottom: 50px;
`
const IntroductionContent = styled.div`
	padding-top: 40vh;
	height: 10vh;
	text-align: justify;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_L}) {
		padding-top: 30vh;
	}
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		padding-top: 20vh;
	}
	@media only screen and (max-width: ${DIMENSIONS.BREAK_S}) {
		padding-top: 10vh;
	}
`
const MoreInfoLinks = styled.div`
	margin-top: 100px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	transition: opacity 200ms;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_L}) and (min-height: ${DIMENSIONS.BREAK_S}) {
		flex-direction: column;
	}
`
const Link = styled.a`
	width: 200px;
	text-decoration: none;
	font-family: Courier, monospace;
	font-weight: 700;
	font-size: 25px;
	padding: 20px;
	background-color: #ebebeb;
	border: 3px solid;
	border-color: #696969;
	color: ${COLORS.TEXT_COLOR};
	text-align: center;
	border-radius: 7px;
	margin: 10px auto;
	transition: border-color 200ms;
	&:hover {
		border-color: ${COLORS.SIDEBAR_BACKGROUND_COLOR};
	}
	@media only screen and (max-width: ${DIMENSIONS.BREAK_L}) {
		padding: 10px;
	}
`

const DownArrow = styled.div<{ isTypingDone: boolean }>`
	position: absolute;
	text-align: center;
	line-height: 0.5;
	bottom: 70px;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	transition: opacity 500ms;
	opacity: ${props => (props.isTypingDone ? '1' : '0')};
	transform: rotate(180deg);
	animation: bounce 1500ms infinite;
	@keyframes bounce {
		0% {
			bottom: 70px;
		}
		50% {
			bottom: 50px;
		}
		100% {
			bottom: 70px;
		}
	}
	@media only screen and (max-height: ${DIMENSIONS.BREAK_S}) {
		@keyframes bounce {
			0% {
				bottom: 30px;
			}
			50% {
				bottom: 10px;
			}
			100% {
				bottom: 30px;
			}
		}
	}
`
const ArrowBox = styled.div<{ isTypingDone: boolean }>`
	height: 50px;
	transform: translateY(-35px);
	margin: 0 45% 0 45%;
	cursor: ${props => (props.isTypingDone ? 'pointer' : 'auto')};
`
const UpArrow = styled.i`
	border: solid #696969;
	border-width: 0 6px 6px 0;
	display: inline-block;
	transform: rotate(-135deg);
	padding: 6px;
	@media only screen and (max-height: ${DIMENSIONS.BREAK_S}) {
		border-width: 0 3px 3px 0;
		padding: 3px;
	}
`

interface IProps {
	aboutRef: React.RefObject<HTMLDivElement>
}

interface IState {
	currentTyped: string

	// location of where our pointer is
	currentSentence: number
	currentPosition: number

	// flag for indicating deletion
	isDeleting: boolean

	// flag for indicating its done
	isTypingDone: boolean
}

class Introduction extends React.Component<IProps, IState> {
	// what to type/delete
	private TypedData: string[] = ['Hey there!', "I'm Erick Leon, welcome to my site!"]

	// speed in millisecond
	private TypeSpeed: number = 70
	// amount of time to pause between sentences
	private TypePause: number = 400

	constructor(props: IProps) {
		super(props)
		this.state = {
			currentTyped: '',
			currentSentence: 0,
			currentPosition: 0,
			isDeleting: false,
			isTypingDone: false,
		}
		// bind member functions to this
		this.typeText = this.typeText.bind(this)
		this.deleteText = this.deleteText.bind(this)
		this.scrollToRef = this.scrollToRef.bind(this)
	}

	public componentDidMount() {
		this.typeText()
	}

	private typeText() {
		const lastPositionInCurrentSentence = this.TypedData[this.state.currentSentence].length - 1
		let newPosition = this.state.currentPosition + 1
		let newSentenceIndex = this.state.currentSentence
		let isDeleting = false
		if (this.state.currentPosition === lastPositionInCurrentSentence) {
			newPosition = 0
			newSentenceIndex += 1
			isDeleting = true
		}
		this.setState({
			currentTyped:
				this.state.currentTyped +
				this.TypedData[this.state.currentSentence][this.state.currentPosition],
			currentPosition: newPosition,
			currentSentence: newSentenceIndex,
		})

		if (this.state.currentSentence >= this.TypedData.length) {
			this.setState({
				isTypingDone: true,
			})
			return
		}
		if (isDeleting) {
			setTimeout(this.deleteText, this.TypePause)
		} else {
			setTimeout(this.typeText, this.TypeSpeed)
		}
	}

	private deleteText() {
		if (this.state.currentTyped === '') {
			this.setState({
				isDeleting: false,
			})
			setTimeout(this.typeText, this.TypeSpeed)
			return
		}
		this.setState({
			currentTyped: this.state.currentTyped.slice(0, -1),
		})
		setTimeout(this.deleteText, this.TypeSpeed)
	}

	private scrollToRef() {
		const offset: number = this.props.aboutRef.current
			? this.props.aboutRef.current.offsetTop
			: 0
		window.scrollTo(0, offset)
	}

	public render() {
		return (
			<IntroductionPage>
				<IntroductionContent>
					<Title>
						{this.state.currentTyped}
						{!this.state.isTypingDone ? '|' : ''}
					</Title>
				</IntroductionContent>
				<MoreInfoLinks>
					<Link href="https://github.com/ericklikan" target="_blank">
						<i className="fa fa-github" /> GitHub
					</Link>
					<Link href={'/static/ErickLeon.pdf'} target="_blank">
						<i className="fa fa-file-text-o" /> Resume
					</Link>
					<Link href="https://www.linkedin.com/in/erick-leon/" target="_blank">
						<i className="fa fa-linkedin-square" /> LinkedIn
					</Link>
				</MoreInfoLinks>
				<DownArrow isTypingDone={this.state.isTypingDone}>
					<UpArrow />
					<ArrowBox
						isTypingDone={this.state.isTypingDone}
						onClick={() => this.state.isTypingDone && this.scrollToRef()}
					/>
				</DownArrow>
			</IntroductionPage>
		)
	}
}

export default Introduction
