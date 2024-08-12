import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 

function About() {
  const teamMembers = [
    {
      name: 'Mr. Pradeep Kumar',
      title: 'Chairman',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur fugiat, aspernatur odio odit adipisci vero dicta ratione, necessitatibus mollitia nulla assumenda natus quae dolorum quis voluptatum! Ipsum, nihil? Consectetur, deserunt.
      Tenetur a laboriosam blanditiis harum omnis nesciunt eius ipsum, placeat voluptates ab ratione sapiente rerum quaerat iure, quibusdam aperiam cumque ex accusantium fugit. Quaerat, expedita saepe cumque recusandae pariatur repellendus?
      Vel, aliquid voluptatem esse ab debitis expedita, minima voluptates necessitatibus quibusdam temporibus itaque fugiat vitae dicta sunt dolorem harum. Fuga adipisci, asperiores ut totam praesentium omnis quaerat labore minus sint!`,
      image: 'Chairman.jpg', 
    },
    {
      name: 'Mr. Gaurav Kumar',
      title: 'Director',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus ipsa est dolor illum soluta, iure, tenetur itaque, similique autem necessitatibus id doloremque cupiditate harum a aliquam optio voluptas molestias?
      Itaque eos quibusdam vel labore impedit nesciunt. Earum atque dolore, doloribus quia rem minima quo consectetur quod voluptatem magnam adipisci, corrupti commodi. Voluptatem blanditiis sequi exercitationem voluptatum necessitatibus, alias ea.
      Harum provident fugiat aperiam repudiandae quisquam nemo animi corrupti, veritatis nisi porro, reiciendis nam hic dicta repellat quis. Excepturi, deleniti! Recusandae facere ea atque a, perspiciatis veniam maiores. Numquam, fugit.`,
      image: 'Photo.jpg',
    },
    {
        name: 'Himanshu Chaturvedi',
        title: 'Sales Lead',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus ipsa est dolor illum soluta, iure, tenetur itaque, similique autem necessitatibus id doloremque cupiditate harum a aliquam optio voluptas molestias?
        Itaque eos quibusdam vel labore impedit nesciunt. Earum atque dolore, doloribus quia rem minima quo consectetur quod voluptatem magnam adipisci, corrupti commodi. Voluptatem blanditiis sequi exercitationem voluptatum necessitatibus, alias ea.
        Harum provident fugiat aperiam repudiandae quisquam nemo animi corrupti, veritatis nisi porro, reiciendis nam hic dicta repellat quis. Excepturi, deleniti! Recusandae facere ea atque a, perspiciatis veniam maiores. Numquam, fugit.`,
        image: 'Himanshus.jpg',
      },
  ];

  return (
      <div className="bg-gray-100 text-gray-900 dark:bg-slate-900 dark:text-white ">
        <Navbar />
      {/* High Values Section */}
      <section className="bg-red-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold">HIGH VALUES</h1>
        <p className="mt-4 text-lg">Our core values drive our success...</p>
      </section>
      {/* Meet the Team Section */}
      <div className="bg-gray-100 text-gray-900 py-10 dark:bg-slate-900 dark:text-white">
        <section className="container mx-auto ">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-10 bg-white shadow-lg rounded-lg overflow-hidden dark:bg-slate-900 dark:text-white">
              <div className="md:w-1/3 ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-red-500 text-lg mb-4">{member.title}</p>
                <p className="text-gray-700 whitespace-pre-line dark:text-white">{member.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
