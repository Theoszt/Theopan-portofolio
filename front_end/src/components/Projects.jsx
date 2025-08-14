import laliga from "../assets/project_img/laliga.svg";
import demografi from "../assets/project_img/demografi.svg";
import etl from "../assets/project_img/etl.svg";
import energi from "../assets/project_img/energi.svg";
import sentimen from "../assets/project_img/sentimen.svg";
import suhu from "../assets/project_img/suhu.svg";
import klasifikasi from "../assets/project_img/klasifikasi.svg";
import ecg from "../assets/project_img/ecg.svg";

function Project({
  title,
  description,
  image,
  alt,
  techs,
  techColor,
  textColor,
  liveDemo,
  code,
  date,
  type,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden project-card">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        {/* Menampilkan tanggal dan tipe proyek */}
        {(date || type) && (
          <p className="text-gray-600 text-sm mb-2">
            {date} {date && type ? " - " : ""} {type}
          </p>
        )}
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((tech) => (
            <span
              key={tech}
              className={`bg-${techColor} text-${textColor} px-2 py-1 rounded text-sm`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={liveDemo}
            className="flex-1 bg-primary text-white py-2 px-4 rounded-button text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer" // Praktik terbaik untuk tautan eksternal
          >
            <i className="fas fa-external-link-alt mr-2"></i>Live Demo
          </a>
          <a
            href={code}
            className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-button text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer" // Praktik terbaik untuk tautan eksternal
          >
            <i className="fab fa-github mr-2"></i>Code
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projectsData = [
    {
      title: "Analisis Demografi dan Sosial Ekonomi",
      description:
        "Menganalisis dan memvisualisasikan data sensus tahun 1994 untuk mengidentifikasi pola distribusi penduduk berdasarkan usia, jenis kelamin, pendidikan, dan status pekerjaan. Menggunakan tools Tableau.",
      image: demografi,
      alt: "Analisis Demografi dan Sosial Ekonomi",
      techs: ["Tableau", "Data Analysis", "Statistics"],
      techColor: "blue-100",
      textColor: "blue-800",
      liveDemo: "#",
      code: "https://github.com/Theoszt/pre-pros_sinya-ECG",
      date: "Mei, 2024",
      type: "Project Kelompok",
    },
    {
      title: "Prediksi Hasil Pertandingan La Liga",
      description:
        "Membangun model prediksi menggunakan Random Forest untuk memprediksi hasil pertandingan berdasarkan statistik tim dan skor sebelumnya.",
      image: laliga,
      alt: "Prediksi Hasil Pertandingan La Liga",
      techs: ["Random Forest", "Python", "Machine Learning"],
      techColor: "green-100",
      textColor: "green-800",
      liveDemo: "#",
      code: "https://github.com/Theoszt/Prediksi_AI",
      date: "Januari, 2025",
      type: "Project Kelompok",
    },
    {
      title: "Klasifikasi Emosi Wajah",
      description:
        "Melakukan klasifikasi emosi wajah menggunakan model Support Vector Machine (SVM). Segmentasi wajah dengan Haarcascade Classifier, dan fitur frekuensi diekstrak menggunakan Discrete Wavelet Transform (DWT). Implementasi sebagai aplikasi web dengan Flask (backend) dan HTML/Tailwind CSS (frontend). Dataset: Human Face Emotions oleh Sanidhyak.",
      image: klasifikasi,
      alt: "Klasifikasi Emosi Wajah",
      techs: ["SVM", "Haarcascade", "DWT", "Flask", "Tailwind CSS"],
      techColor: "purple-100",
      textColor: "purple-800",
      liveDemo: "https://www.instagram.com/p/DKucLpqPVwM/?img_index=1",
      code: "https://github.com/Theoszt/klasifikasi-emosi-project",
      date: "Juni, 2025",
      type: "Project Kelompok",
    },
    {
      title: "Fitur Ekstraksi Sinyal ECG",
      description:
        "Mengekstrak fitur dari sinyal ECG dengan mendeteksi R-peaks sebagai langkah awal dalam analisis denyut jantung. Data fitur digunakan sebagai dasar untuk klasifikasi kondisi jantung normal atau abnormal.",
      image: ecg,
      alt: "Fitur Ekstraksi Sinyal ECG",
      techs: ["ECG Analysis", "R-peaks", "Signal Processing"],
      techColor: "yellow-100",
      textColor: "yellow-800",
      liveDemo: "#",
      code: "https://github.com/Theoszt/pre-pros_sinya-ECG",
      date: "Januari, 2025",
      type: "Project Kelompok",
    },
    {
      title: "Forecasting Suhu di Indonesia (2010–2020)",
      description:
        "Melakukan peramalan tren suhu tahunan di Indonesia menggunakan algoritma Support Vector Regression (SVR). Dataset dari BMKG digunakan sebagai data historis. Hasil prediksi disajikan dalam bentuk visualisasi peta (map).",
      image: suhu,
      alt: "Forecasting Suhu di Indonesia",
      techs: ["SVR", "Python", "BMKG Data", "Geovisualization"],
      techColor: "pink-100",
      textColor: "pink-800",
      liveDemo: "#",
      code: "https://github.com/Theoszt/Forecasting-Suhu-di-Indonesia-2010-2020-",
      date: "Juni, 2025",
      type: "Project Kelompok",
    },
    {
      title: "Prediksi Time Series Total Daya Listrik Rumah",
      description:
        "Menggunakan model Support Vector Regression (SVR) untuk memprediksi konsumsi listrik rumah tangga berdasarkan data historis per jam.",
      image: energi,
      alt: "Prediksi Time Series Total Daya Listrik Rumah",
      techs: ["SVR", "Time Series", "Python", "Data Prediction"],
      techColor: "teal-100",
      textColor: "teal-800",
      liveDemo: "#",
      code: "https://github.com/Theoszt/Prediksi-Konsumsi-Listrik",
      date: "Juni, 2025",
      type: "Project Kelompok",
    },
    {
      title: "Perancangan ETL Analisis Penjualan Cafe",
      description:
        "Merancang pipeline ETL menggunakan Python dan SQL, dengan Celery sebagai job scheduler dan RabbitMQ sebagai message broker. Data dimuat ke PostgreSQL, dan divisualisasikan dalam dashboard interaktif menggunakan Tableau.",
      image: etl,
      alt: "Perancangan ETL Analisis Penjualan Cafe",
      techs: ["Python", "SQL", "Celery", "RabbitMQ", "PostgreSQL", "Tableau"],
      techColor: "orange-100",
      textColor: "orange-800",
      liveDemo: "#",
      code: "#",
      date: "Juni, 2025",
      type: "Project Kelompok",
    },
    {
      title: "Analisis respon masyarakat terhadap pembangunnan IKN",
      description:
        "Melakukan NLP untuk mendapatkan sentimen publik tentang IKN dari tweet penguna platform X dengan malath beberapa model",
      image: sentimen,
      alt: "Analisis respon masyarakat terhadap pembangunnan IKN",
      techs: ["Python", "NLP", "Algoritma", "IKN", "Sentimen Analisis"],
      techColor: "orange-100",
      textColor: "orange-800",
      liveDemo: "https://youtu.be/h7-SOYFMDT4?si=iKKXOrMRtUWOvRWt",
      code: "https://github.com/Theoszt/Analisis-sentimen-IKN",
      date: "Januari, 2021",
      type: "Project Kelompok",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-lg text-gray-600">
            Featured work and personal projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              alt={project.alt}
              techs={project.techs}
              techColor={project.techColor}
              textColor={project.textColor}
              liveDemo={project.liveDemo}
              code={project.code}
              date={project.date} // Meneruskan variabel 'date'
              type={project.type} // Meneruskan variabel 'type'
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;