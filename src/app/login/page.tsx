import React from 'react'
import FormeLogin from '../_comp-nav/liftlogin/FormLogin'
import Liftlogin from '../_comp-nav/liftlogin/Liftlogin'

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8  m-4 md:my-8">
      
      <div className="hidden lg:block lg:sticky lg:top-30 h-fit">
        <Liftlogin />
      </div>

      <div className="w-full h-full">
        <div className="w-full bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
          <FormeLogin />
        </div>
      </div>

      <div className="lg:hidden w-full bg-white rounded-3xl overflow-hidden shadow-lg">
        <Liftlogin />
      </div>
      
    </div>
  )
}

export default LoginPage