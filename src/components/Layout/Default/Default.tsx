import { FC } from 'react'

import Header from '@/components/Header'

const Default: FC = ({ children }) => {
  return (
    <>
      <div className="min-h-full">
        <Header />

        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
      <footer className="-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="border-t border-gray-200 py-7 text-sm text-gray-500 text-center sm:text-left">
            <span className="block sm:inline">&copy; 2021 Labs Inc.</span>{' '}
            <span className="block sm:inline">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Default
