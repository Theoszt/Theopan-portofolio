function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-100 fade-in">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Skills</h2> */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center ">
      {/* <div className="grid md: grid-cols-2 gap-12"> */}
        <div className="  bg-white/70 backdrop-blur-md rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Hard Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-center ">
            <li>Python (Pandas, NumPy, Matplotlib)</li>
            <li>SQL (MySQL, PostgreSQL)</li>
            <li>Data Visualization (Tableau)</li>
            <li>Basic Machine Learning</li>
            <li>Microsoft Excel</li>
            <li>Git & GitHub</li>
            <li>Distributed Task Processing</li>
            <li>Web Development: HTML, CSS, JavaScript, Bootstrap, Flask</li>
          </ul>
        </div>
        <div className=" bg-white/70 backdrop-blur-md rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-center">
            <li>Analytical Thinking</li>
            <li>Problem Solving</li>
            <li>Written and Oral Communication</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills