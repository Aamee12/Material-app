import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/Fire'
import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigate = useNavigate()

  const onLogin = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
      userCredential => {
        const user = userCredential.user
        const userEmail = user.email
        navigate('/main', {state: {userEmail}})
        console.log(user)
      },
    )
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        navigate('/main')
      } else {
        console.log('User is not logged in.')
      }
    })

    return () => {
      unsubscribe()
    }
  }, [navigate])

  // const loginUser = async event => {
  //   event.preventDefault()

  //   console.log('Login button clicked')
  //   console.log('Email:', loginEmail)
  //   console.log('Password:', loginPassword)

  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword,
  //     )
  //     const user = userCredential.user

  //     if (!user) {
  //       console.log('User is logged in')
  //       navigate('/')
  //     }
  //   } catch (error) {
  //     console.log('Login Error:', error.message)
  //     navigate('/Sign-up')
  //   }
  // }

  return (
    <>
      <div className="bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="py-20">
          <div className="shadow-lg mx-48 bg-gradient-to-r from-gray-700 to-gray-800 md:mx-48 bg-white rounded-lg p-8">
            <form onSubmit={onLogin}>
              <div className="pb-8"></div>
              <div className="flex justify-center">
                <div className="font-sans text-2xl font-semibold text-white text-center">
                  Welcome Back!
                </div>
              </div>
              <div className="pb-8"></div>
              <div className="flex items-center justify-center my-6">
                <div className="w-1/3 mx-4">
                  <div>
                    <label className="font-sans text-base font-semibold text-white text-center">
                      Email
                    </label>
                    <div>
                      <input
                        type="email"
                        className="w-full font-sans font-semibold text-white border rounded p-3 outline-none bg-gray-700"
                        placeholder="Asadali@email.com"
                        required
                        minLength={3}
                        maxLength={200}
                        onChange={event => {
                          setLoginEmail(event.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center my-6">
                <div className="w-1/3 mx-4">
                  <div>
                    <label className="font-sans text-base font-semibold text-white text-center">
                      Password
                    </label>
                    <div>
                      <input
                        type="password"
                        className="w-full font-sans font-semibold text-white border rounded p-3 outline-none bg-gray-700"
                        placeholder="******"
                        required
                        minLength={8}
                        maxLength={200}
                        onChange={event => {
                          setLoginPassword(event.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center my-6">
                <div className="w-1/3 mx-4">
                  <div className="flex">
                    <div className="pr-2">
                      <input
                        type="checkbox"
                        className="rounded p-3 outline-none border-color-orange"
                      />
                    </div>
                    <div className="font-sans text-base font-semibold text-white text-center">
                      Remember Me
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-8"></div>
              <div className="flex items-center justify-center my-6">
                <p className="text-color-orange cursor-pointer font-sans text-base font-semibold text-white text-center">
                  {' '}
                </p>
              </div>
              <div className="flex items-center justify-center my-6">
                <button className="cursor-pointer rounded outline-none border bg-[#f14536] text-white py-4 px-24 font-sans font-semibold">
                  Login
                </button>
              </div>
              <div className="flex items-center justify-center my-6">
                <a href="/signup">
                  <p className="text-[#f14536] cursor-pointer font-sans text-base font-semibold text-white text-center">
                    Don't have an account yet?
                  </p>
                </a>
              </div>
              <div className="pb-8"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
