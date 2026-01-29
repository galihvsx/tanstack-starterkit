import { auth } from "@/lib/auth"
import { createMiddleware, createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"

export const getUserSession = createServerFn({ method: "GET" }).handler(
    async () => {
        const request = getRequest()

        if (!request?.headers) {
            return null
        }

        const userSession = await auth.api.getSession({ headers: request.headers })

        if (!userSession) return null

        return { user: userSession.user, session: userSession.session }
    },
)

export const userMiddleware = createMiddleware({ type: "function" }).server(
    async ({ next }) => {
        const userSession = await getUserSession()

        return next({ context: { userSession } })
    },
)

export const userRequiredMiddleware = createMiddleware({ type: "function" })
    .middleware([userMiddleware])
    .server(async ({ next, context }) => {
        if (!context.userSession) {
            throw Response.json(
                { message: "Unauthorized!" },
                { status: 401 },
            )
        }

        return next({ context: { userSession: context.userSession } })
    })