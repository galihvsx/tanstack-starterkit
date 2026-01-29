import { authQueries } from '@/server/queries/auth.query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient()

export const useAuthentication = () => {
    const { data: userSession } = useSuspenseQuery(authQueries.user())

    return { userSession, isAuthenticated: !!userSession }
}

export const useAuthenticatedUser = () => {
    const { userSession } = useAuthentication()

    if (!userSession) {
        throw new Error("User is not authenticated!")
    }

    return userSession
}
