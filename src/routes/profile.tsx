import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  beforeLoad: async ({ context }) => {
    if (!context.userSession) {
      throw redirect({ to: "/auth/login" })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile"!</div>
}
