import logo from '../../assets/logo-dark.png'
const NavBar = () => {
  return (
    <div className="flex justify-center mt-2">
      <div className="section_layout_container">
        <nav className="flex justify-between items-center max-h-[64px]">
          <img src={logo} alt="PUPPET PAY" className="" />
          <div className="flex justify-center">
            <div className="flex justify-center *:p-5">
              <div className="">
                <a hre="#">Products</a>
              </div>
              <div className="">
                <a hre="#">Pricing</a>
              </div>
            </div>
            <div className="flex justify-center items-center *:p-5">
              <button>Sign In</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export { NavBar }
