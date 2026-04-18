import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'simple';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
//   const styles = {
//     primary: "bg-[#9AA813] text-white hover:bg-[#9AA813] shadow-md cursor-pointer",
//     outline: "bg-[#9AA813] text-white hover:bg-[#9AA813] shadow-md cursor-pointer",
//     ghost: "text-gray-600 hover:bg-gray-100"
//   };
const styles = {
  primary:
    "bg-[#9AA813] text-[#fffff] hover:bg-[#e69500]  cursor-pointer",

  secondary:
  "bg-[#FFA500] text-[#005248] border border-[#e69500] hover:bg-[#9AA813] hover:text-[#ffffff] cursor-pointer",

  ghost:
    "text-[#005248] hover:bg-[#FFA500]/20 cursor-pointer",

  simple:
  "bg-transparent border border-white text-white px-6 py-2 rounded-md transition-all duration-300 hover:bg-[#e69500] hover:text-white hover:border-none cursor-pointer"
};
  return (
    <button 
      className={`px-6 py-2.5 rounded-full font-bold transition-all active:scale-95 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};