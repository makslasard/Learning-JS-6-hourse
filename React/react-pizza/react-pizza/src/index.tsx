import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './redux/store'

import App from './App'

import './index.css'

const rootElem = document.getElementById('root')

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem)

	root.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	)
}
