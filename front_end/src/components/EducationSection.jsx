function Education() {
  const educationData = [
    {
      title: "S-1, Sains Data",
      institution: "Universitas Negeri Surabaya – Surabaya, Indonesia",
      period: "Agustus, 2023 – Sekarang",
      description: "IPK: 3.58/4.00 (82 SKS)", 
      coursework: ['Statistic','Data Mining','Mechine Learning','Computer Vision', 'Data Strucktur','Data Pipaline'], 
      borderColor: "blue-600", 
    },
    {
      title: "Mipa", 
      institution: "SMAN 4 KARAWANG – Karawang, Indonesia",
      period: "Juli, 2020 – Juli, 2023",
      description: "average report card score : 82 ", 
      achievements: [], 
      borderColor: "green-600", 
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <p className="text-lg text-gray-600">
            My academic journey and continuous learning
          </p>
        </div>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-sm border-l-4 border-${edu.borderColor}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{edu.title}</h3>
                  <p className={`text-lg text-${edu.borderColor} font-medium`}>
                    {edu.institution}
                  </p>
                </div>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{edu.description}</p>
              {edu.coursework && edu.coursework.length > 0 && ( 
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Key Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {edu.achievements && edu.achievements.length > 0 && ( 
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Achievements:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {edu.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;