import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import { actions } from "../store/favorites/favorites.slice"
// import * as userActions from "../store/user/user.actions"

const rootActions = {
    ...actions,
    // ...useActions,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
