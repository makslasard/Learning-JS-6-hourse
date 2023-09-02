import { useState } from "react"
import Navbar from "./Component/UI/Navbar/Navbar"
import Posts from "./pages/Posts"
import { AuthContext } from "./context"

const App = () => {
	const [isAuth, setIsAuth] = useState(false)

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<Navbar />
			<Posts />
		</AuthContext.Provider>
	)
}

export default App
