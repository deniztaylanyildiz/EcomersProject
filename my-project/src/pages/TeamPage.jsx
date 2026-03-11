import { Facebook, Instagram, Twitter } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Gökhan Özdemir",
      role: "Project Manager",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQE8S9x55-YJ6A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710411874258?e=1747267200&v=beta&t=H-W62o12kRz_z9z9R1T-8X7pBf_n0T9n-zGj7l-E4vI", // Gökhan Bey'in LinkedIn görseli
    },
    {
      name: "Deniz Taylan Yıldız",
      role: "Full Stack Developer",
      image: "https://picsum.photos/400/400?random=10", // Kendi görselin veya placeholder
    },
    {
      name: "Ekip Üyesi 3",
      role: "Frontend Developer",
      image: "https://picsum.photos/400/400?random=11",
    },
    {
      name: "Ekip Üyesi 4",
      role: "Backend Developer",
      image: "https://picsum.photos/400/400?random=12",
    },
    {
      name: "Ekip Üyesi 5",
      role: "UI/UX Designer",
      image: "https://picsum.photos/400/400?random=13",
    },
    {
      name: "Ekip Üyesi 6",
      role: "QA Engineer",
      image: "https://picsum.photos/400/400?random=14",
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-32 py-16 text-center">
        <h5 className="font-bold text-[#737373] mb-4">WHAT WE DO</h5>
        <h1 className="text-[40px] md:text-[58px] font-bold text-[#252B42] mb-4">Innovation at scale</h1>
        <div className="flex justify-center items-center gap-2 text-sm font-bold">
          <span className="text-[#252B42]">Home</span>
          <span className="text-[#BDBDBD]">{">"}</span>
          <span className="text-[#BDBDBD]">Team</span>
        </div>
      </section>

      {/* Ekip Grid Bölümü */}
      <section className="container mx-auto px-4 md:px-32 py-20">
        <h2 className="text-[40px] font-bold text-[#252B42] text-center mb-20">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <h5 className="font-bold text-base text-[#252B42] mb-2">{member.name}</h5>
              <h6 className="font-bold text-sm text-[#737373] mb-4">{member.role}</h6>
              <div className="flex gap-4 text-[#23A6F0]">
                <Facebook size={24} className="cursor-pointer" />
                <Instagram size={24} className="cursor-pointer" />
                <Twitter size={24} className="cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Bölümü */}
      <section className="py-20 text-center bg-[#FAFAFA]">
        <h2 className="text-[40px] font-bold text-[#252B42] mb-8">Start your 14 days free trial</h2>
        <p className="text-[#737373] max-w-md mx-auto mb-8">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
        <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold hover:bg-blue-600 transition-all">
          Try it free now
        </button>
      </section>
    </div>
  );
};

export default TeamPage;