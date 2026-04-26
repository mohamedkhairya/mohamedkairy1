import React from 'react';
import LitfRegister from '../_comp-nav/liftRegister/LitfRegister';
import Forme from './../_comp-nav/liftRegister/forme';

const Register = () => {
  return (
  
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8  m-4 md:my-8">
      
      <div className="hidden lg:block lg:sticky lg:top-30 h-fit">
        <LitfRegister />
      </div>

      <div className="w-full h-full">
        <div className="w-full bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
          <Forme />
        </div>
      </div>

      <div className="lg:hidden w-full bg-white rounded-3xl overflow-hidden shadow-lg">
        <LitfRegister />
      </div>
      
    </div>
  );
};

export default Register;