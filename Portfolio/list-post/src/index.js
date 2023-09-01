import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Component/AppRouter/AppRouter'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	</StrictMode>
)