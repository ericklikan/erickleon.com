import { observable, action } from 'mobx'

class AppState {
	@observable
	public sidebarIsOpen: boolean = false

	@action
	public openSidebar() {
		this.sidebarIsOpen = true
	}

	@action
	public closeSidebar() {
		this.sidebarIsOpen = false
	}
}

const appState = new AppState()
export { AppState, appState }
