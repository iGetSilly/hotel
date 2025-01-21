export default function NavBar({ children }) {
  return (<div class="max-w-screen-xl m-3 mx-auto rounded-lg border-2 border-slate-800 flex flex-row justify-between text-slate-800 bold">
    {children}
  </div>)
}

