import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import Providers from '@/components/providers'
import { authQueries } from '@/server/queries/auth.query'
import type { QueryClient } from '@tanstack/react-query'
import { Session, User } from 'better-auth'
import { Toaster } from 'sonner'

type UserSession = User & Session
interface MyRouterContext {
  queryClient: QueryClient
  userSession?: UserSession | null
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    beforeLoad: async ({ context }: { context: MyRouterContext }) => {
      const userSession = await context.queryClient.fetchQuery(authQueries.user())

      return { userSession }
    },
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        <Toaster position='top-right' richColors theme='system' closeButton />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
