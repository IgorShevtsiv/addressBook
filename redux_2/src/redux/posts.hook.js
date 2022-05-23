import {useDispatch, useSelector} from "react-redux";
import {setPosts,setPostsError, setPostsIsLoading} from "./";

export const usePostsFetcher = () => {
    const dispatch = useDispatch()
    return (payload) => {
        dispatch(setPosts(payload))
    }
}
export const usePostsSetLoading = () => {
    const dispatch = useDispatch()
    return () => {
        dispatch(setPostsIsLoading())
    }
}
export const usePostsError = () => {
    const dispatch = useDispatch()
    return (payload) => {
        dispatch(setPostsError(payload))
    }
}