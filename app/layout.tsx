import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen">
          <div className=" min-h-screen">
            <Header className="fixed top-0 left-0 right-0 z-50">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Header>
            <div className="flex pt-16">
              <Sidebar />
              <main className="p-4 w-full">
                {children}
              </main>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}


