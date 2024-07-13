function About() {
  return (
    <>
      <h1 className='mb-4 text-6xl'>About GitHub Finder</h1>
      <p style={{ justifyContent: 'center', margin: '0' }}>
        A React.js app to search GitHub profiles and see profile details. This
        app uses the Context API along with the useContext and useReducer hooks
        for state management and is part of the{" "}
    
      </p>
      <p className='mb-4 text-2xl font-light'>
        I have used <strong>TailwindCSS</strong> &amp; <strong>DaisyUI</strong>{" "}
        to make it look even better and user-friendly.
      </p>
      <p className='text-lg text-gray-600'>Version 1.0.0</p>
    </>
  );
}


export default About
