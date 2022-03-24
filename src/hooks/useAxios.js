import axios from "axios"
import { useEffect, useState } from "react"
import * as env from '../../dotEnv';

export function useAxios(url) {
    const [responseData, setResponseData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        axios.get(url ? url : env.API_URL)
            .then(response => {
                setResponseData(response.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return { responseData, error, isLoading }
}