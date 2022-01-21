import {api} from '../api'
import { GetEvents } from '../../EventQueriesqueries/EventQueries'

export const fetchEvents = async () => {
    const request = await api.post('/', { query: GetEvents })
    const data = request.data.data
    return data
}