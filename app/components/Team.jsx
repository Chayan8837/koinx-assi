import Image from "next/image"
import user from "./../../public/user.png"



export default function TeamSection() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      imageUrl: user,
    },
    {
      name: "Elina Williams",
      role: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      imageUrl: user,
    },
    {
      name: "John Smith",
      role: "Designation here",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      imageUrl: user,
    },
  ]

  return (
    <section className="max-w-8xl mx-auto px-4 py-12 text-black bg-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Team</h2>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit
        egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#E8F4FD] rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="flex-shrink-0 ">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
              <h3 className="text-lg font-semibold mt-2 text-center">{member.name}</h3>
              <p className="text-gray-500 text-sm text-center">{member.role}</p>
            </div>
            <p className="text-gray-600 leading-relaxed">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
