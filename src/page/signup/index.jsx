import React, {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/Fire'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const [signupEmail, setSignupEmail] = useState('')
  const [signupName, setSignupname] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  //   const [message, setMessage] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    await createUserWithEmailAndPassword(
      auth,
      signupEmail,
      signupPassword,
    ).then(userCredential => {
      const user = userCredential.user
      console.log(user)
      navigate('/login')
    })
  }

  return (
    <>
      <div className="bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="py-20">
          <div className="shadow-lg mx-48 bg-gradient-to-r from-gray-700 to-gray-800 md:mx-48 bg-white rounded-lg p-8">
            <form>
              <div className="pb-8"></div>
              <div className="flex justify-center">
                <div className="flex justify-center ">
                  <div className="font-sans text-4xl font-semibold not-italic text-center text-white">
                    You Did It!
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="font-sans text-2xl font-semibold not-italic text-center text-white">
                  Tell Us Little About Yourself.
                </div>
              </div>
              <div className="flex items-center justify-center my-6">
                <div className="w-1/3 mx-4">
                  <div>
                    <label className="font-sans text-base font-semibold not-italic text-center text-white">
                      Full Name
                    </label>
                    <div>
                      <input
                        type="text"
                        className="w-full font-sans font-semibold not-italic text-white border rounded p-3 outline-none bg-gray-700"
                        placeholder="Asadali"
                        value={signupName}
                        required
                        minLength="2"
                        maxLength="50"
                        onChange={event => {
                          setSignupname(event.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/3 mx-4">
                  <div>
                    <label className="font-sans text-base font-semibold not-italic text-center text-white">
                      Email
                    </label>
                    <div>
                      <input
                        type="email"
                        className="w-full font-sans font-semibold not-italic text-white border rounded p-3 outline-none bg-gray-700"
                        placeholder="Asadali@email.com"
                        required
                        minLength="3"
                        maxLength="200"
                        onChange={event => {
                          setSignupEmail(event.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center my-6">
                <div className="w-1/3 mx-4">
                  <div>
                    <label className="font-sans text-base font-semibold not-italic text-center text-white">
                      Password
                    </label>
                    <div>
                      <input
                        type="password"
                        className="w-full font-sans font-semibold not-italic text-white border rounded p-3 outline-none bg-gray-700"
                        placeholder="******"
                        required
                        minLength="8"
                        maxLength="50"
                        onChange={event => {
                          setSignupPassword(event.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/3 mx-4">
                  <div>
                    <label className="font-sans text-base font-semibold not-italic text-center text-white">
                      Confirm Password
                    </label>
                    <div>
                      <input
                        type="password"
                        className="w-full font-sans font-semibold not-italic text-white border rounded p-3 outline-none bg-gray-700"
                        placeholder="******"
                        value={confirmPassword}
                        required
                        minLength="8"
                        maxLength="200"
                        onChange={event => {
                          setConfirmPassword(event.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-8"></div>
              <div className="flex items-center justify-center my-6">
                <p className="text-color-orange cursor-pointer font-sans text-base font-semibold not-italic text-center">
                  {' '}
                </p>
              </div>
              <div className="flex items-center justify-center my-6">
                <button
                  onClick={onSubmit}
                  className="cursor-pointer rounded outline-none border bg-[#f14536] text-white py-4 px-24 font-sans font-semibold"
                >
                  Signup
                </button>
              </div>
              <div className="flex items-center justify-center my-6">
                <a href="/">
                  <p className="text-[#f14536] cursor-pointer font-sans text-base font-semibold not-italic text-center">
                    Already have an account?
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

export default Signup
