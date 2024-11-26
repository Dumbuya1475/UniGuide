// src/data/universitiesData.js
const universities = [
  {
    id: "central-university",
    name: "Central University",
    logo: "/src/assets/universities/central-logo.png",
    description: "Focused on providing accessible, high-quality education across multiple disciplines.",
    about: "Central University is a private institution located in Freetown, Sierra Leone. We specialize in delivering top-tier education in technology and creative arts. Our programs are designed to equip students with the skills they need to excel in today's digital age.",
    location: "Mile 91",
    type: "Private",
    "university_level": [
      "Certificate",
      "Diploma",
      "Higher National Diploma",
      "Bachelor Programmes",
    ],
    programs: ["Engineering", "Law", "Medicine", "Business"],
    techCourses: ["Software Engineering", "Graphic Design", "Web Development", "Information Technology"],
    nonTechCourses: ["Business Management", "Media Studies", "Law"],
    facilities: [
      "Modern computer labs equipped with the latest software",
      "Creative studios for graphic design and animation",
      "Experienced faculty with industry expertise",
      "On-campus accommodation and a well-resourced library",
    ],
    contactInfo: {
      email: "admissions@centraluniversity.sl",
      phone: "+232-XXX-XXX-XXX",
    },
    website: "http://centraluniversity.sl",
  },
  {
    id: "eastern_technical_univrsity",
    name: "Eastern Technical university of Sierra Leone (ETU-SL)",
    // logo: "/assets/universities/linko.png",

    // logo: "../../assets/universities/AI.jpg",
    logo: "../../../src/assets/universities/linko.png",
    description: "Your gateway to excellence in tech and creative education.",
    about:
      "Linkonking University of Creative Technology is a private institution located in Freetown, Sierra Leone.The university specializes in providing top- tier education in the field of technology and creative arts.Our programs are designed to equip students with the skills they need to succeed in today's digital age",
    location:
      "Kenema",
    type:
      "Private",
    "university_level": [
      "Certificate",
      "Diploma",
      "Higher National Diploma",
      "Bachelor Programmes",
    ],
    programs: [
      "Engineering", "Law", "Medicine", "Business"
    ],
    techCourses: [
      "Software Engineering", "Graphic Design", "Web Development", "Information Technology"],
    nonTechCourses: [
      "Business Management", "Media Studies", "Law"
    ],
    facilities: [
      "Modern computer labs with the latest software",
      "Creative studios for graphic design and animation",
      "Experienced faculty with industry expertise",
      "On-campus accommodation and library",
    ],
    contactInfo: {
      email: "admissions@linkonkinguniversity.sl",
      phone: "+232-XXX-XXX-XXX",
    },
    website: "http://linkonkinguniversity.sl",
  },
  {
    id: "ebk-university",
    name: "Earnest Bai Koroma University of Science and Technology (EBKUST",
    logo: "/src/assets/universities/ebk.png",
    description: "A university that emphasizes a holistic approach to education.",
    about: "Earnest Bai Koroma University is a prominent institution located in Freetown, Sierra Leone. The university is dedicated to providing a comprehensive education that integrates both technology and creative arts. Our programs are designed to equip students with the skills they need to succeed in the modern digital era.",
    location: "Makeni Town",
    type: "Public",
    "university_level": [
      "Certificate",
      "Diploma",
      "Higher National Diploma",
      "Bachelor & Master Programmes"
    ],
    programs: ["Engineering", "Law", "Medicine", "Business"],
    techCourses: ["Software Engineering", "Graphic Design", "Web Development", "Information Technology"],
    nonTechCourses: ["Business Management", "Media Studies", "Law"],
    facilities: [
      "Modern computer labs with the latest software",
      "Creative studios for graphic design and animation",
      "Experienced faculty with industry expertise",
      "On-campus accommodation and a well-resourced library"
    ],
    contactInfo: {
      email: "admissions@ebkuniversity.sl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://ebkuniversity.sl"
  },

  {
    id: "limkokwing-university",
    name: "Limkokwing University (Sierra Leone Campus)",
    // logo: "/assets/universities/linko.png",

    // logo: "../../assets/universities/AI.jpg",
    logo: "../../../src/assets/universities/linko.png",
    description: "Your gateway to excellence in tech and creative education.",
    about:
      "Linkonking University of Creative Technology is a private institution located in Freetown, Sierra Leone.The university specializes in providing top- tier education in the field of technology and creative arts.Our programs are designed to equip students with the skills they need to succeed in today's digital age",
    location:
      "Hill Station - Freetown",
    category: "A",
    type:
      "Private",
    "university_level": [
      "Certificate",
      "Diploma",
      "Higher National Diploma",
      "Bachelor Programmes",
    ],
    programs: [
      "Engineering", "Law", "Medicine", "Business"
    ],
    techCourses: [
      "Software Engineering", "Graphic Design", "Web Development", "Information Technology"],
    nonTechCourses: [
      "Business Management", "Media Studies", "Law"
    ],
    facilities: [
      "Modern computer labs with the latest software",
      "Creative studios for graphic design and animation",
      "Experienced faculty with industry expertise",
      "On-campus accommodation and library",
    ],
    contactInfo: {
      email: "admissions@linkonkinguniversity.sl",
      phone: "+232-XXX-XXX-XXX",
    },
    website: "http://linkonkinguniversity.sl",
  },

  {
    id: "mmtu",
    name: "Milton Margai Technical University (MMTU)",
    logo: "/src/assets/universities/mmtu-logo.png",
    description: "A public university known for its technical and vocational programs.",
    about: "Milton Margai Technical University (MMTU) is a public institution in Sierra Leone with campuses located in Brookfields, Congo Cross, and Goderich. The university offers a variety of programs designed to provide students with practical skills and technical expertise to excel in their chosen careers.",
    location: "Brookfields, Congo Cross, Goderich - Freetown",
    category: "A",
    type: "Public",
    university_level: [
      "Certificate",
      "Diploma",
      "Higher National Diploma",
      "Bachelor Programmes"
    ],
    programs: [
      "Engineering",
      "Hospitality Management",
      "Business Administration",
      "Education"
    ],
    techCourses: [
      "Information Technology",
      "Software Development",
      "Computer Networking"
    ],
    nonTechCourses: [
      "Hospitality Management",
      "Business Studies",
      "Education"
    ],
    facilities: [
      "State-of-the-art technical labs for practical learning",
      "Library with extensive technical and academic resources",
      "Experienced faculty specialized in vocational education",
      "Multiple campuses with modern amenities and student housing"
    ],
    contactInfo: {
      email: "admissions@mmtu.sl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://mmtu.sl"
  },

  {
    id: "njala-university",
    name: "Njala University",
    logo: "/src/assets/universities/njala_logo.png",
    description: "Known for its agriculture and environmental science programs.",
    about: "Njala University is a prominent institution located in Freetown, Sierra Leone, renowned for its excellence in agriculture and environmental sciences. The university offers a range of programs designed to equip students with the skills they need to succeed in today's evolving fields.",
    location: "Bo Town | Mokonda Campus | Freetown Campus",
    category: "A",
    type: "Public",
    "university_level": [
      "Certificate",
      "Diploma",
      "Higher National Diploma",
      "Bachelor",
      "Master & PHD  Programmes"
    ],
    programs: ["Agriculture", "Environmental Science", "Business", "Engineering"],
    techCourses: ["Software Engineering", "Graphic Design", "Web Development", "Information Technology"],
    nonTechCourses: ["Business Management", "Media Studies", "Law"],
    facilities: [
      "Modern computer labs with the latest software",
      "Creative studios for graphic design and animation",
      "Experienced faculty with industry expertise",
      "On-campus accommodation and a well-resourced library"
    ],
    contactInfo: {
      email: "admissions@njalauniversity.sl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://njalauniversity.sl"
  },
  {
    id: "umu",
    name: "United Methodist University (UMU)",
    logo: "/src/assets/universities/umu-logo.png",
    description: "A private university committed to academic excellence and ethical leadership.",
    about: "United Methodist University (UMU) is a private institution located in Freetown, Sierra Leone. UMU offers diverse programs designed to foster academic excellence, critical thinking, and ethical leadership, preparing students for meaningful contributions to society.",
    location: "Freetown",
    category: "A",
    type: "Private",
    university_level: [
      "Certificate",
      "Diploma",
      "Higher National Diploma",
      "Bachelor Programmes"
    ],
    programs: [
      "Theology",
      "Business Administration",
      "Education",
      "Information Technology"
    ],
    techCourses: [
      "Computer Science",
      "Information Systems",
      "Software Engineering"
    ],
    nonTechCourses: [
      "Theology",
      "Business Studies",
      "Education"
    ],
    facilities: [
      "Modern lecture halls equipped with advanced learning technology",
      "Resourceful library with both physical and digital materials",
      "Community-focused campus environment",
      "Experienced faculty with local and international expertise"
    ],
    contactInfo: {
      email: "admissions@umu.sl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://umu.sl"
  },

  {
    id: "university-of-lunsar",
    name: "University of Lunsar",
    logo: "/src/assets/universities/lunsar-logo.png",
    description: "A university dedicated to advancing education and fostering community development.",
    about: "The University of Lunsar is a private institution located in Lunsar, Sierra Leone. It offers a range of academic programs aimed at equipping students with the knowledge and skills needed to excel in their professional and personal lives.",
    location: "Lunsar",
    category: "A",
    type: "Private",
    university_level: [
      "Certificate",
      "Diploma",
      "Higher National Diploma",
      "Bachelor Programmes"
    ],
    programs: [
      "Business Administration",
      "Education",
      "Agriculture",
      "Information Technology"
    ],
    techCourses: [
      "Information Technology",
      "Software Development",
      "Data Analytics"
    ],
    nonTechCourses: [
      "Business Management",
      "Agricultural Science",
      "Education"
    ],
    facilities: [
      "Well-equipped computer and science labs",
      "A library with a wide collection of academic resources",
      "Comfortable on-campus housing for students",
      "Dedicated faculty and staff for student support"
    ],
    contactInfo: {
      email: "admissions@universityoflunsar.sl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://universityoflunsar.sl"
  },

  {
    id: "university-of-makeni",
    name: "University of Makeni (UniMak)",
    logo: "/src/assets/universities/unimak.jpg",
    description: "Dedicated to creating leaders in various fields, including social sciences and education.",
    about: "The University of Makeni is a leading institution located in Freetown, Sierra Leone, dedicated to nurturing leaders in social sciences, education, and beyond. Our comprehensive programs aim to equip students with the knowledge and skills for professional success.",
    location: "Makeni",
    category: "A",
    type: "Public",
    "university_level": [
      "Certificate",
      "Diploma",
      "Higher National Diploma",
      "Bachelor & Master Programmes"
    ],
    programs: ["Social Sciences", "Education", "Business", "Law"],
    techCourses: ["Information Technology", "Software Engineering", "Web Development"],
    nonTechCourses: ["Business Management", "Media Studies", "Law"],
    facilities: [
      "Modern computer labs with the latest software",
      "Creative studios for graphic design and animation",
      "Experienced faculty with industry expertise",
      "On-campus accommodation and a well-resourced library"
    ],
    contactInfo: {
      email: "admissions@unimak.sl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://unimak.sl"
  },

  {
    id: "unimtech",
    name: "University of Management & Technology (UNIMTECH)",
    logo: "/src/assets/universities/unimtech-logo.png",
    description: "An institution focused on excellence in management and technology education.",
    about: "The University of Management & Technology (UNIMTECH) is a private institution with multiple campuses across Sierra Leone, including Freetown, Bo, Kambia, Kono, and Lunsar. It offers a wide range of programs designed to equip students with skills for success in management and technology-driven fields.",
    location: "Freetown | Bo | Kambia | Kono | Lunsar",
    category: "A",
    type: "Private",
    university_level: [
      "Certificate",
      "Diploma",
      "Higher National Diploma",
      "Bachelor Programmes"
    ],
    programs: [
      "Business Administration",
      "Information Technology",
      "Engineering",
      "Education"
    ],
    techCourses: [
      "Software Development",
      "Cybersecurity",
      "Information Systems",
      "Web Development"
    ],
    nonTechCourses: [
      "Business Management",
      "Education",
      "Public Administration"
    ],
    facilities: [
      "Modern computer labs with advanced technology",
      "Experienced faculty with professional expertise",
      "Well-equipped campuses with libraries and resource centers",
      "Supportive learning environment with career development programs"
    ],
    contactInfo: {
      email: "admissions@unimtech.sl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://unimtech.sl"
  },

  {
    id: "comahs-usl",
    name: "USL-College of Medicine & Allied Health Sciences (COMAHS)",
    logo: "/src/assets/universities/comahs-logo.png",
    description: "Sierra Leone's premier institution for medical and allied health sciences education.",
    about: "The College of Medicine & Allied Health Sciences (COMAHS), part of the University of Sierra Leone (USL), is located in New England Ville, Freetown. It is dedicated to training the next generation of healthcare professionals through rigorous academic and practical programs.",
    location: "New England Ville, Freetown",
    category: "A",
    type: "Public",
    university_level: [
      "Certificate",
      "Diploma",
      "Bachelor",
      "Master",
      "PhD Programmes"
    ],
    programs: [
      "Medicine",
      "Nursing",
      "Pharmacy",
      "Laboratory Sciences"
    ],
    techCourses: [
      "Medical Informatics",
      "Biomedical Engineering"
    ],
    nonTechCourses: [
      "Medicine",
      "Nursing",
      "Public Health"
    ],
    facilities: [
      "State-of-the-art laboratories for practical learning",
      "Teaching hospital for clinical training",
      "Highly qualified faculty with medical expertise",
      "Library with extensive medical and scientific resources"
    ],
    contactInfo: {
      email: "admissions@comahs.usl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://comahs.usl"
  },

  // =================================================CATEGORY B ====================================

  // Civil Service Training College
  {
    id: "ipam-university",
    name: "Institute of Public Administration and Management (IPAM) - (USL)",
    logo: "/src/assets/universities/ipam.jpg",
    description: "Specializes in public administration and management studies.",
    about: "IPAM is a leading institution located in Freetown, Sierra Leone, known for its expertise in public administration and management studies. Our programs are designed to prepare students for leadership roles in the public and private sectors.",
    location: "A.J. Momoh Street Freetown, Tower Hill",
    type: "Public",
    "university_level": [
      "Certificate",
      "Diploma",
      "Bachelor",
      "Master & PHD  Programmes"
    ],
    programs: ["Public Administration", "Business", "Economics", "Information Systems"],
    techCourses: ["Information Technology", "Business Information Systems"],
    nonTechCourses: ["Public Administration", "Business Management", "Economics"],
    facilities: [
      "Modern computer labs with the latest software",
      "Experienced faculty with industry expertise",
      "On-campus accommodation and a well-resourced library"
    ],
    contactInfo: {
      email: "admissions@ipam.usl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://ipam.usl"
  },
  {
    id: "FBC-university",
    name: "Fourah Bay College (FBC) - (USL)",
    // logo: "/src/assets/universities/ipam.jpg",
    description: "Specializes in public administration and management studies.",
    about: "IPAM is a leading institution located in Freetown, Sierra Leone, known for its expertise in public administration and management studies. Our programs are designed to prepare students for leadership roles in the public and private sectors.",
    location: "Mount Aureal-Freetown",
    type: "Public",
    "university_level": [
      "Certificate",
      "Diploma",
      "Bachelor",
      "Master & PHD  Programmes"
    ],
    programs: ["Public Administration", "Business", "Economics", "Information Systems"],
    techCourses: ["Information Technology", "Business Information Systems"],
    nonTechCourses: ["Public Administration", "Business Management", "Economics"],
    facilities: [
      "Modern computer labs with the latest software",
      "Experienced faculty with industry expertise",
      "On-campus accommodation and a well-resourced library"
    ],
    contactInfo: {
      email: "admissions@ipam.usl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://ipam.usl"
  },

  {
    id: "bluecrest-college",
    name: "BlueCrest College Sierra Leone",
    logo: "/src/assets/universities/blucrest.jpg",
    description: "Offers programs in IT, management, and media studies.",
    about: "BlueCrest College Sierra Leone is a private institution located in Freetown. The college specializes in providing high-quality education in IT, management, and media studies. Our programs are designed to equip students with the necessary skills to excel in today's competitive job market.",
    location: "Freetown",
    type: "Private",
    programs: ["Information Technology", "Management", "Media Studies"],
    techCourses: ["Software Engineering", "Graphic Design", "Web Development", "Information Technology"],
    nonTechCourses: ["Business Management", "Media Studies", "Law"],
    facilities: [
      "Modern computer labs with the latest software",
      "Creative studios for graphic design and animation",
      "Experienced faculty with industry expertise",
      "On-campus accommodation and a well-resourced library"
    ],
    contactInfo: {
      email: "admissions@bluecrestcollege.sl",
      phone: "+232-XXX-XXX-XXX"
    },
    website: "http://bluecrestcollege.sl"
  },
  // {
  //   id: "bluecrest-college",
  //   name: "BlueCrest College Sierra Leone",
  //   logo: "/src/assets/universities/blucrest.jpg",
  //   description: "Offers programs in IT, management, and media studies.",
  //   about: "BlueCrest College Sierra Leone is a private institution located in Freetown. The college specializes in providing high-quality education in IT, management, and media studies. Our programs are designed to equip students with the necessary skills to excel in today's competitive job market.",
  //   location: "Freetown",
  //   type: "Private",
  //   programs: ["Information Technology", "Management", "Media Studies"],
  //   techCourses: ["Software Engineering", "Graphic Design", "Web Development", "Information Technology"],
  //   nonTechCourses: ["Business Management", "Media Studies", "Law"],
  //   facilities: [
  //     "Modern computer labs with the latest software",
  //     "Creative studios for graphic design and animation",
  //     "Experienced faculty with industry expertise",
  //     "On-campus accommodation and a well-resourced library"
  //   ],
  //   contactInfo: {
  //     email: "admissions@bluecrestcollege.sl",
  //     phone: "+232-XXX-XXX-XXX"
  //   },
  //   website: "http://bluecrestcollege.sl"
  // },
  // {
  //   id: "unimtech-college",
  //   name: "Unimtech College Sierra Leone",
  //   logo: "/src/assets/universities/unimtec.jpg",
  //   description: "Offers programs in IT, management, and media studies.",
  //   about: "BlueCrest College Sierra Leone is a private institution located in Freetown. The college specializes in providing high-quality education in IT, management, and media studies. Our programs are designed to equip students with the necessary skills to excel in today's competitive job market.",
  //   location: "Freetown",
  //   type: "Private",
  //   programs: ["Information Technology", "Management", "Media Studies"],
  //   techCourses: ["Software Engineering", "Graphic Design", "Web Development", "Information Technology"],
  //   nonTechCourses: ["Business Management", "Media Studies", "Law"],
  //   facilities: [
  //     "Modern computer labs with the latest software",
  //     "Creative studios for graphic design and animation",
  //     "Experienced faculty with industry expertise",
  //     "On-campus accommodation and a well-resourced library"
  //   ],
  //   contactInfo: {
  //     email: "admissions@bluecrestcollege.sl",
  //     phone: "+232-XXX-XXX-XXX"
  //   },
  //   website: "http://bluecrestcollege.sl"
  // },
  // {
  //   id: "bluecrest-college",
  //   name: "BlueCrest College Sierra Leone",
  //   logo: "/src/assets/universities/blucrest.jpg",
  //   description: "Offers programs in IT, management, and media studies.",
  //   about: "BlueCrest College Sierra Leone is a private institution located in Freetown. The college specializes in providing high-quality education in IT, management, and media studies. Our programs are designed to equip students with the necessary skills to excel in today's competitive job market.",
  //   location: "Freetown",
  //   type: "Private",
  //   programs: ["Information Technology", "Management", "Media Studies"],
  //   techCourses: ["Software Engineering", "Graphic Design", "Web Development", "Information Technology"],
  //   nonTechCourses: ["Business Management", "Media Studies", "Law"],
  //   facilities: [
  //     "Modern computer labs with the latest software",
  //     "Creative studios for graphic design and animation",
  //     "Experienced faculty with industry expertise",
  //     "On-campus accommodation and a well-resourced library"
  //   ],
  //   contactInfo: {
  //     email: "admissions@bluecrestcollege.sl",
  //     phone: "+232-XXX-XXX-XXX"
  //   },
  //   website: "http://bluecrestcollege.sl"
  // },
  // {
  //   id: "bluecrest-college",
  //   name: "BlueCrest College Sierra Leone",
  //   logo: "/src/assets/universities/blucrest.jpg",
  //   description: "Offers programs in IT, management, and media studies.",
  //   about: "BlueCrest College Sierra Leone is a private institution located in Freetown. The college specializes in providing high-quality education in IT, management, and media studies. Our programs are designed to equip students with the necessary skills to excel in today's competitive job market.",
  //   location: "Freetown",
  //   type: "Private",
  //   programs: ["Information Technology", "Management", "Media Studies"],
  //   techCourses: ["Software Engineering", "Graphic Design", "Web Development", "Information Technology"],
  //   nonTechCourses: ["Business Management", "Media Studies", "Law"],
  //   facilities: [
  //     "Modern computer labs with the latest software",
  //     "Creative studios for graphic design and animation",
  //     "Experienced faculty with industry expertise",
  //     "On-campus accommodation and a well-resourced library"
  //   ],
  //   contactInfo: {
  //     email: "admissions@bluecrestcollege.sl",
  //     phone: "+232-XXX-XXX-XXX"
  //   },
  //   website: "http://bluecrestcollege.sl"
  // },
];

export default universities;
