import { type NextRequest, NextResponse } from "next/server"
import { updateSession } from "@/lib/supabase/middleware"
import { createServerClient } from "@supabase/ssr"

const protectedRoutes = ["/os"]
const authenticatedRoutes = ["/workspace-setup"]

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/os", request.url))
  }

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  )
  const isAuthenticatedRoute = authenticatedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  )

  const hasSupabaseConfig = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  if (!hasSupabaseConfig) {
    if (isProtected || isAuthenticatedRoute) {
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      url.searchParams.set("error", "configuration")
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  }

  const response = await updateSession(request)

  if (isProtected || isAuthenticatedRoute) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            )
          },
        },
      }
    )

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = "/login"
      url.searchParams.set("next", request.nextUrl.pathname)
      return NextResponse.redirect(url)
    }
  }

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
