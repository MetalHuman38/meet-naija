import {Outlet, Navigate} from 'react-router-dom'

const AuthLayOut = () => {
  const isAuthenticated = false

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) : (
        <>
          <section className='flex flex-col items-center justify-center w-full py-10 bg-black'>
            <Outlet />
            </section>
            <img
              src="/assets/images/bgImg.jpg"
              alt="logo"
              className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            />
        </>
      )}
    </>
  )
}

export default AuthLayOut