"use client";

import { useParams } from "next/navigation";

/* ================= PROJECT DATA ================= */

const PROJECTS = [
{
  slug: "mr-sharma-villa",
  name: "Mr. Sharma",
  type: "residential",
  area: "2400 sq.ft",
  location: "Gwalior",
  duration: "8 Months",
  budget: "₹44,40,000",
  description:
    "This elegant 2400 sq.ft residence for Mr. Sharma in Gwalior was thoughtfully designed to balance modern aesthetics with everyday functionality. The layout focuses on open planning, natural lighting, and cross ventilation to ensure comfort throughout the year. The ground floor includes a spacious living room, dining area, modular kitchen, and guest bedroom, while the upper floor accommodates private bedrooms with attached bathrooms and a family lounge. High-quality vitrified flooring, false ceiling with concealed lighting, and premium sanitary fittings enhance the interior appeal. The facade features a contemporary elevation with clean lines, textured finishes, and subtle lighting accents that highlight architectural elements during nighttime. Storage solutions were integrated seamlessly to maximize usable space without compromising visual appeal. Special attention was given to structural safety, durability, and energy efficiency. The project was completed within eight months with efficient coordination between design and execution teams, ensuring timely delivery and quality craftsmanship.",
  images: [
    "/projects/mr-sharma-villa/1.jpg",
    "/projects/mr-sharma-villa/2.jpg",
    "/projects/mr-sharma-villa/3.jpg",
    "/projects/mr-sharma-villa/4.jpg",
  ],
},
{
  slug: "mr-gupta-residence",
  name: "Mr. Gupta",
  type: "residential",
  area: "1800 sq.ft",
  location: "Agra",
  duration: "7 Months",
  budget: "₹33,30,000",
  description:
    "Designed for modern urban living, this 1800 sq.ft residence in Agra reflects a smart and efficient approach to residential architecture. The planning emphasizes optimal space utilization while maintaining openness and comfort. The home features a welcoming living area, dining space, modular kitchen, and well-ventilated bedrooms with attached baths. Neutral color palettes and contemporary textures give the interiors a sophisticated character. Large windows allow abundant daylight, reducing dependency on artificial lighting. The elevation design combines minimalistic geometry with subtle decorative elements to create a refined exterior presence. Structural integrity and long-term durability were ensured using quality materials and skilled workmanship. Electrical and plumbing systems were planned carefully for future flexibility. Completed in seven months, this project stands as a balanced blend of affordability, elegance, and practical living tailored to the client's lifestyle needs.",
  images: [
    "/projects/mr-gupta-residence/1.jpg",
    "/projects/mr-gupta-residence/2.jpg",
    "/projects/mr-gupta-residence/3.jpg",
    "/projects/mr-gupta-residence/4.jpg",
  ],
},
{
  slug: "mr-verma-villa",
  name: "Mr. Verma",
  type: "residential",
  area: "1500 sq.ft",
  location: "Jhansi",
  duration: "6 Months",
  budget: "₹23,25,000",
  description:
    "This compact yet stylish 1500 sq.ft villa in Jhansi was conceptualized to deliver comfort, elegance, and cost efficiency. The planning ensures smooth circulation between living, dining, and kitchen spaces, creating a welcoming environment for family gatherings. Bedrooms are designed with sufficient storage and natural ventilation. The facade incorporates modern textures and subtle color contrasts to provide a visually appealing street presence. Premium fittings, durable flooring, and energy-efficient lighting contribute to long-term sustainability. Special focus was given to structural strength and quality finishing. The design team collaborated closely with execution experts to ensure the project was completed smoothly within six months. This residence reflects practical design thinking while maintaining an upscale feel suitable for modern lifestyles.",
  images: [
    "/projects/mr-verma-villa/1.jpg",
    "/projects/mr-verma-villa/2.jpg",
    "/projects/mr-verma-villa/3.jpg",
    "/projects/mr-verma-villa/4.jpg",
  ],
},
{
  slug: "mr-reddy-house",
  name: "Mr. Reddy",
  type: "residential",
  area: "2100 sq.ft",
  location: "Agra",
  duration: "7 Months",
  budget: "₹38,85,000",
  description:
    "The 2100 sq.ft residence for Mr. Reddy in Agra was designed to offer a harmonious balance between comfort and contemporary aesthetics. The layout incorporates an expansive living area that seamlessly connects to the dining and kitchen spaces, encouraging family interaction. Bedrooms were planned with privacy and ventilation in mind, ensuring a comfortable retreat for each member. The exterior elevation showcases modern design elements with textured finishes and elegant lighting features. Durable flooring, premium sanitary fittings, and efficient electrical planning were integrated to ensure longevity and ease of maintenance. Large windows maximize natural light while improving airflow. The structure was executed with precision and completed within seven months, delivering both functionality and refined visual appeal.",
  images: [
    "/projects/mr-reddy-house/1.jpg",
    "/projects/mr-reddy-house/2.jpg",
    "/projects/mr-reddy-house/3.jpg",
    "/projects/mr-reddy-house/4.jpg",
  ],
},
{
  slug: "mr-patel-bungalow",
  name: "Mr. Patel",
  type: "residential",
  area: "2800 sq.ft",
  location: "Gwalior",
  duration: "8 Months",
  budget: "₹60,20,000",
  description:
    "Spanning 2800 sq.ft in Gwalior, this bungalow for Mr. Patel reflects a grand yet welcoming architectural approach. The ground level features a double-height living space, dining area, modular kitchen, and guest suite. The upper floor accommodates spacious bedrooms with attached bathrooms and a family lounge. Premium materials, detailed ceiling designs, and warm lighting create a luxurious ambiance. The elevation incorporates modern linear patterns with subtle textures and balanced proportions. Attention was given to structural strength, energy efficiency, and long-term durability. The project was completed in eight months with meticulous supervision and quality assurance at every stage.",
  images: [
    "/projects/mr-patel-bungalow/1.jpg",
    "/projects/mr-patel-bungalow/2.jpg",
    "/projects/mr-patel-bungalow/3.jpg",
    "/projects/mr-patel-bungalow/4.jpg",
  ],
},
{
  slug: "mr-nair-residence",
  name: "Mr. Nair",
  type: "residential",
  area: "1600 sq.ft",
  location: "Jhansi",
  duration: "6 Months",
  budget: "₹29,60,000",
  description:
    "This thoughtfully designed 1600 sq.ft residence in Jhansi combines modern planning with practical design solutions. The home features a welcoming living room, efficient kitchen layout, and well-ventilated bedrooms. Neutral interior tones and elegant textures enhance the overall aesthetic. The facade is styled with clean geometry and contemporary finishes, creating a striking yet balanced look. Smart storage solutions and optimized circulation make the house feel spacious despite its compact footprint. Delivered within six months, the project ensures quality craftsmanship and cost-effective construction without compromising on style.",
  images: [
    "/projects/mr-nair-residence/1.jpg",
    "/projects/mr-nair-residence/2.jpg",
    "/projects/mr-nair-residence/3.jpg",
    "/projects/mr-nair-residence/4.jpg",
  ],
},
{
  slug: "mr-singh-villa",
  name: "Mr. Singh",
  type: "residential",
  area: "2500 sq.ft",
  location: "Agra",
  duration: "8 Months",
  budget: "₹53,75,000",
  description:
    "Designed with a contemporary vision, this 2500 sq.ft villa in Agra emphasizes open living and architectural elegance. Spacious interiors, premium finishes, and a refined facade define its character. The project integrates modern lighting concepts, high-quality flooring, and well-planned service areas. Bedrooms offer privacy and comfort, while shared areas encourage connectivity. Completed in eight months, the villa reflects precision construction and thoughtful detailing.",
  images: [
    "/projects/mr-singh-villa/1.jpg",
    "/projects/mr-singh-villa/2.jpg",
    "/projects/mr-singh-villa/3.jpg",
    "/projects/mr-singh-villa/4.jpg",
  ],
},
{
  slug: "mr-mehta-residence",
  name: "Mr. Mehta",
  type: "residential",
  area: "1400 sq.ft",
  location: "Gwalior",
  duration: "6 Months",
  budget: "₹21,70,000",
  description:
    "This 1400 sq.ft residence in Gwalior showcases efficient planning with modern design sensibilities. Carefully positioned windows enhance ventilation and daylight. The elevation incorporates subtle textures and minimalistic lines. Durable materials and premium finishes ensure long-term value. Delivered within six months, the project balances affordability and elegance effectively.",
  images: [
    "/projects/mr-mehta-residence/1.jpg",
    "/projects/mr-mehta-residence/2.jpg",
    "/projects/mr-mehta-residence/3.jpg",
    "/projects/mr-mehta-residence/4.jpg",
  ],
},
{
  slug: "mr-iyer-house",
  name: "Mr. Iyer",
  type: "residential",
  area: "1900 sq.ft",
  location: "Jhansi",
  duration: "7 Months",
  budget: "₹35,15,000",
  description:
    "The 1900 sq.ft house for Mr. Iyer in Jhansi is designed for comfort and functionality. The open-plan living area connects smoothly with dining and kitchen spaces. Elegant interior finishes and a balanced elevation design enhance the home's visual appeal. Structural safety and material quality were prioritized to ensure durability. The project was successfully completed within seven months.",
  images: [
    "/projects/mr-iyer-house/1.jpg",
    "/projects/mr-iyer-house/2.jpg",
    "/projects/mr-iyer-house/3.jpg",
    "/projects/mr-iyer-house/4.jpg",
  ],
},
{
  slug: "mr-kapoor-villa",
  name: "Mr. Kapoor",
  type: "residential",
  area: "3000 sq.ft",
  location: "Agra",
  duration: "8 Months",
  budget: "₹64,50,000",
  description:
    "Spanning 3000 sq.ft, this premium villa in Agra reflects luxury and architectural finesse. The layout features expansive living spaces, elegant bedrooms, and refined detailing throughout. The facade combines modern geometry with premium textures and lighting accents. Delivered within eight months, the project demonstrates superior craftsmanship and planning excellence.",
  images: [
    "/projects/mr-kapoor-villa/1.jpg",
    "/projects/mr-kapoor-villa/2.jpg",
    "/projects/mr-kapoor-villa/3.jpg",
    "/projects/mr-kapoor-villa/4.jpg",
  ],
},
{
  slug: "mr-choudhary-residence",
  name: "Mr. Choudhary",
  type: "residential",
  area: "1700 sq.ft",
  location: "Gwalior",
  duration: "7 Months",
  budget: "₹31,45,000",
  description:
    "This 1700 sq.ft residence in Gwalior blends modern planning with elegant exterior styling. Functional layouts, quality finishes, and thoughtful detailing define the home. Large windows enhance daylight and airflow. The project was completed within seven months with a focus on durability and client satisfaction.",
  images: [
    "/projects/mr-choudhary-residence/1.jpg",
    "/projects/mr-choudhary-residence/2.jpg",
    "/projects/mr-choudhary-residence/3.jpg",
    "/projects/mr-choudhary-residence/4.jpg",
  ],
},
{
  slug: "mr-rao-bungalow",
  name: "Mr. Rao",
  type: "residential",
  area: "2600 sq.ft",
  location: "Jhansi",
  duration: "8 Months",
  budget: "₹48,10,000",
  description:
    "The 2600 sq.ft bungalow in Jhansi features spacious interiors and modern elevation design. The project emphasizes comfort, style, and long-term durability. Premium materials, structured lighting, and well-planned circulation make the house both elegant and functional. Completed in eight months, it stands as a refined residential landmark.",
  images: [
    "/projects/mr-rao-bungalow/1.jpg",
    "/projects/mr-rao-bungalow/2.jpg",
    "/projects/mr-rao-bungalow/3.jpg",
    "/projects/mr-rao-bungalow/4.jpg",
  ],
},
{
  slug: "mr-agarwal-villa",
  name: "Mr. Agarwal",
  type: "residential",
  area: "2200 sq.ft",
  location: "Agra",
  duration: "7 Months",
  budget: "₹40,70,000",
  description:
    "This 2200 sq.ft villa in Agra showcases modern architecture with clean lines and elegant textures. Open interiors and carefully planned lighting create a welcoming atmosphere. Structural precision and premium finishes ensure durability and aesthetic appeal. Delivered within seven months, the project reflects balanced design and execution.",
  images: [
    "/projects/mr-agarwal-villa/1.jpg",
    "/projects/mr-agarwal-villa/2.jpg",
    "/projects/mr-agarwal-villa/3.jpg",
    "/projects/mr-agarwal-villa/4.jpg",
  ],
},
{
  slug: "mr-menon-house",
  name: "Mr. Menon",
  type: "residential",
  area: "1300 sq.ft",
  location: "Gwalior",
  duration: "6 Months",
  budget: "₹20,15,000",
  description:
    "Compact yet stylish, this 1300 sq.ft house in Gwalior offers efficient planning and contemporary styling. The layout ensures maximum usability and ventilation. Modern elevation design enhances street appeal. Completed in six months, it balances budget and quality effectively.",
  images: [
    "/projects/mr-menon-house/1.jpg",
    "/projects/mr-menon-house/2.jpg",
    "/projects/mr-menon-house/3.jpg",
    "/projects/mr-menon-house/4.jpg",
  ],
},
{
  slug: "mr-malhotra-residence",
  name: "Mr. Malhotra",
  type: "residential",
  area: "2000 sq.ft",
  location: "Jhansi",
  duration: "7 Months",
  budget: "₹37,00,000",
  description:
    "Designed for modern family living, this 2000 sq.ft residence in Jhansi emphasizes openness and refined detailing. The interior layout ensures fluid movement between spaces while maintaining privacy. High-quality finishes and structural integrity define the project, completed efficiently within seven months.",
  images: [
    "/projects/mr-malhotra-residence/1.jpg",
    "/projects/mr-malhotra-residence/2.jpg",
    "/projects/mr-malhotra-residence/3.jpg",
    "/projects/mr-malhotra-residence/4.jpg",
  ],
},
{
  slug: "mr-desai-villa",
  name: "Mr. Desai",
  type: "residential",
  area: "2300 sq.ft",
  location: "Agra",
  duration: "8 Months",
  budget: "₹49,45,000",
  description:
    "The 2300 sq.ft villa in Agra blends contemporary design with practical living solutions. Elegant elevation styling, premium interior finishes, and optimized layout create a sophisticated residence. Delivered in eight months, the project reflects architectural precision and quality workmanship.",
  images: [
    "/projects/mr-desai-villa/1.jpg",
    "/projects/mr-desai-villa/2.jpg",
    "/projects/mr-desai-villa/3.jpg",
    "/projects/mr-desai-villa/4.jpg",
  ],
},
{
  slug: "mr-joshi-residence",
  name: "Mr. Joshi",
  type: "residential",
  area: "1550 sq.ft",
  location: "Gwalior",
  duration: "6 Months",
  budget: "₹24,02,500",
  description:
    "This 1550 sq.ft residence in Gwalior offers smart space planning and modern aesthetics. The project features balanced proportions, quality finishes, and efficient ventilation. Completed in six months, it demonstrates practical design execution within a controlled budget.",
  images: [
    "/projects/mr-joshi-residence/1.jpg",
    "/projects/mr-joshi-residence/2.jpg",
    "/projects/mr-joshi-residence/3.jpg",
    "/projects/mr-joshi-residence/4.jpg",
  ],
},
{
  slug: "mr-thakur-villa",
  name: "Mr. Thakur",
  type: "residential",
  area: "2700 sq.ft",
  location: "Jhansi",
  duration: "8 Months",
  budget: "₹58,05,000",
  description:
    "This 2700 sq.ft villa in Jhansi reflects grandeur and thoughtful planning. Spacious living zones, elegant bedrooms, and premium materials create a luxurious yet functional environment. The elevation design features bold lines and refined textures. Completed in eight months, the project highlights quality craftsmanship and timely execution.",
  images: [
    "/projects/mr-thakur-villa/1.jpg",
    "/projects/mr-thakur-villa/2.jpg",
    "/projects/mr-thakur-villa/3.jpg",
    "/projects/mr-thakur-villa/4.jpg",
  ],
},
{
  slug: "skyline-business-park",
  name: "Skyline Business Park",
  type: "commercial",
  area: "12000 sq.ft",
  location: "Agra",
  duration: "14 Months",
  budget: "₹2,34,00,000",
  description:
    "Skyline Business Park in Agra is a 12,000 sq.ft commercial development designed to accommodate modern office environments and scalable business operations. The project emphasizes efficient floor planning, structural strength, and long-term sustainability. Large glass facades allow abundant natural lighting while enhancing the building’s contemporary visual appeal. The layout incorporates spacious work zones, meeting rooms, executive cabins, and well-planned service areas. High-speed elevator provisions, advanced electrical planning, and fire safety compliance ensure a secure and functional working environment. The elevation design reflects corporate sophistication with clean vertical lines and premium exterior finishes. Completed in fourteen months, the project stands as a landmark commercial structure tailored for growing enterprises.",
  images: [
    "/projects/skyline-business-park/1.jpg",
    "/projects/skyline-business-park/2.jpg",
    "/projects/skyline-business-park/3.jpg",
    "/projects/skyline-business-park/4.jpg",
  ],
},
{
  slug: "agrawal-trade-center",
  name: "Agrawal Trade Center",
  type: "commercial",
  area: "8500 sq.ft",
  location: "Gwalior",
  duration: "12 Months",
  budget: "₹1,65,75,000",
  description:
    "Agrawal Trade Center is an 8,500 sq.ft commercial complex in Gwalior designed for retail outlets and corporate offices. The structure incorporates wide frontage, optimized circulation spaces, and high ceiling heights to enhance usability. Modern facade treatments combined with durable materials ensure both aesthetic value and longevity. The project includes dedicated parking zones, service areas, and well-structured utility planning. Natural ventilation and efficient lighting systems reduce operational costs. Delivered within twelve months, the development reflects quality engineering and thoughtful commercial planning.",
  images: [
    "/projects/agrawal-trade-center/1.jpg",
    "/projects/agrawal-trade-center/2.jpg",
    "/projects/agrawal-trade-center/3.jpg",
    "/projects/agrawal-trade-center/4.jpg",
  ],
},
{
  slug: "city-corporate-hub",
  name: "City Corporate Hub",
  type: "commercial",
  area: "10000 sq.ft",
  location: "Jhansi",
  duration: "13 Months",
  budget: "₹1,95,00,000",
  description:
    "City Corporate Hub in Jhansi spans 10,000 sq.ft and is designed to serve modern enterprises with flexible office layouts. The project integrates executive cabins, collaborative workspaces, and conference facilities. Premium exterior glazing enhances natural illumination while improving the building’s architectural identity. Structural durability and safety compliance were prioritized throughout construction. Completed in thirteen months, the hub offers a professional environment tailored for corporate productivity.",
  images: [
    "/projects/city-corporate-hub/1.jpg",
    "/projects/city-corporate-hub/2.jpg",
    "/projects/city-corporate-hub/3.jpg",
    "/projects/city-corporate-hub/4.jpg",
  ],
},
{
  slug: "shakti-commercial-plaza",
  name: "Shakti Commercial Plaza",
  type: "commercial",
  area: "7000 sq.ft",
  location: "Agra",
  duration: "10 Months",
  budget: "₹1,22,50,000",
  description:
    "Shakti Commercial Plaza is a 7,000 sq.ft retail and office complex developed in Agra. Designed for optimal visibility and customer flow, the building features wide entrances, structured layout planning, and durable finishes. The facade reflects modern commercial aesthetics with clean geometric detailing. Electrical and plumbing systems were installed with scalability in mind. Delivered within ten months, the project ensures operational efficiency and long-term investment value.",
  images: [
    "/projects/shakti-commercial-plaza/1.jpg",
    "/projects/shakti-commercial-plaza/2.jpg",
    "/projects/shakti-commercial-plaza/3.jpg",
    "/projects/shakti-commercial-plaza/4.jpg",
  ],
},
{
  slug: "prime-office-square",
  name: "Prime Office Square",
  type: "commercial",
  area: "15000 sq.ft",
  location: "Gwalior",
  duration: "14 Months",
  budget: "₹3,37,50,000",
  description:
    "Prime Office Square in Gwalior is a 15,000 sq.ft commercial structure built to meet high corporate standards. Spacious floor plates, advanced utility planning, and structural resilience define the project. The modern glass facade enhances both daylight penetration and architectural elegance. Dedicated parking and service access ensure operational smoothness. Completed in fourteen months, this development stands as a premium commercial landmark.",
  images: [
    "/projects/prime-office-square/1.jpeg",
    "/projects/prime-office-square/2.jpg",
    "/projects/prime-office-square/3.jpg",
    "/projects/prime-office-square/4.jpg",
  ],
},
{
  slug: "urban-retail-complex",
  name: "Urban Retail Complex",
  type: "commercial",
  area: "6000 sq.ft",
  location: "Jhansi",
  duration: "9 Months",
  budget: "₹1,05,00,000",
  description:
    "Urban Retail Complex is a 6,000 sq.ft development in Jhansi designed for commercial retail operations. The building emphasizes accessibility, structured layouts, and customer-friendly circulation. High-quality finishes and durable construction materials ensure minimal maintenance. Delivered within nine months, the complex supports efficient commercial functionality and modern design standards.",
  images: [
    "/projects/urban-retail-complex/1.jpeg",
    "/projects/urban-retail-complex/2.jpg",
    "/projects/urban-retail-complex/3.jpg",
    "/projects/urban-retail-complex/4.jpg",
  ],
},
{
  slug: "golden-tower-offices",
  name: "Golden Tower Offices",
  type: "commercial",
  area: "11000 sq.ft",
  location: "Agra",
  duration: "12 Months",
  budget: "₹2,47,50,000",
  description:
    "Golden Tower Offices is an 11,000 sq.ft commercial office building in Agra designed for premium corporate tenants. The project integrates flexible office modules, structured parking, and efficient vertical circulation. The facade combines glass and textured finishes to create a strong corporate identity. Completed in twelve months, it reflects high-quality engineering and design precision.",
  images: [
    "/projects/golden-tower-offices/1.jpeg",
    "/projects/golden-tower-offices/2.jpg",
    "/projects/golden-tower-offices/3.jpg",
    "/projects/golden-tower-offices/4.jpg",
  ],
},
{
  slug: "metro-business-point",
  name: "Metro Business Point",
  type: "commercial",
  area: "9000 sq.ft",
  location: "Gwalior",
  duration: "11 Months",
  budget: "₹1,75,50,000",
  description:
    "Metro Business Point in Gwalior spans 9,000 sq.ft and provides a dynamic commercial space suitable for offices and service businesses. The layout prioritizes accessibility, modern utility systems, and flexible interior arrangements. Contemporary elevation styling enhances urban appeal. Delivered within eleven months, the project stands as a reliable and professionally executed commercial asset.",
  images: [
    "/projects/metro-business-point/1.jpeg",
    "/projects/metro-business-point/2.jpg",
    "/projects/metro-business-point/3.jpg",
    "/projects/metro-business-point/4.jpg",
  ],
},
];

/* ================= PAGE ================= */

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Project not found
      </div>
    );
  }

  return (
    <main className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1600px] grid gap-16 md:grid-cols-2 items-start">

{/* LEFT IMAGE SECTION */}
<div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
  <div className="relative w-full h-[800px]">
    <img
      src={project.images[0]}
      alt={project.name}
      className="w-full h-full object-cover"
    />
  </div>
</div>

        {/* RIGHT DETAILS */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {project.name}
          </h1>

          <ul className="space-y-4 text-lg text-zinc-700">
            <li><strong className="text-black">Area:</strong> {project.area}</li>
            <li><strong className="text-black">Location:</strong> {project.location}</li>
            <li><strong className="text-black">Duration:</strong> {project.duration}</li>
            <li><strong className="text-black">Budget:</strong> {project.budget}</li>
          </ul>

          <p className="mt-8 text-lg text-zinc-600 leading-relaxed">
            {project.description}
          </p>
        </div>

      </div>
    </main>
  );
}
