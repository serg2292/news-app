export const modalStyle = "bg-black-op fixed z-10 opacity-0 inset-0 invisible pointer-events-auto transition-all duration-300";
export const activeModalStyle = "bg-black-op fixed z-10 inset-0 visible pointer-events-auto opacity-100 transition-all duration-300";

export const modalContentStyle = "bg-white w-80 z-20 -top-1/4 py-9 px-5 absolute left-2/4 -translate-x-2/4 opacity-0 transition-all duration-200";
export const activeModalContentStyle = "bg-white w-80 z-20 py-9 px-5 absolute left-2/4 top-1/4 -translate-x-2/4 opacity-100 transition-all duration-200";

export const errMessegeStyle = "text-red mb-5 text-xs"
export const errInvisibleMessegeStyle = "text-red mb-5 text-xs invisible"

export const loginInputStyle = "border border-grey-100 w-full px-2.5 py-1.5 mb-6"
export const errLoginInputStyle = loginInputStyle + ' outline outline-2 outline-red'
export const passwordInputStyle = "border border-grey-100 w-full px-2.5 py-1.5 mb-2"
export const errPasswordInputStyle = passwordInputStyle + ' outline outline-2 outline-red'

export const labelStyle = "font-bold text-lg ml-2.5 inline-block mb-2";

export const formButtonStyle = "font-semibold bg-green-100 hover:bg-green-200 active:bg-green-300 text-white w-full px-28 py-3 transition duration-100"