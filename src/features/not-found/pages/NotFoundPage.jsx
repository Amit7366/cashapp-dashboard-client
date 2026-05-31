import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui'
import { ROUTES } from '@/constants/routes'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <section className="flex min-h-[calc(100dvh-12rem)] flex-col items-center justify-center text-center">
      <p className="mb-2 text-6xl font-bold leading-none text-primary">404</p>
      <h1 className="mb-3 text-[1.75rem] font-semibold text-white">Page not found</h1>
      <p className="mb-6 max-w-md text-gray-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button onClick={() => navigate(ROUTES.HOME)}>Back to home</Button>
    </section>
  )
}
