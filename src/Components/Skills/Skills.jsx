

const Skills = () => {
  const skillsData = [
    { name: 'HTML', percentage: 90, description: 'Semantic markup for web content.' },
    { name: 'CSS', percentage: 90, description: 'Styling and layout for web pages.' },
    { name: 'Tailwind CSS', percentage: 85, description: 'Utility-first CSS framework.' },
    { name: 'Material-UI', percentage: 70, description: 'React UI framework with Material Design.' },
    { name: 'JavaScript', percentage: 80, description: 'Programming language for web development.' },
    { name: 'React', percentage: 90, description: 'JavaScript library for building user interfaces.' },
    { name: 'Express.js', percentage: 75, description: 'Web application framework for Node.js.' },
    { name: 'MongoDB', percentage: 75, description: 'NoSQL database for scalable applications.' },
  ];

  return (
    <section className="container mx-auto px-8 py-24">
      <h2 className="text-3xl font-bold text-center font-oswald">Professional Skills</h2>
      <h6 className='text-center mb-8 font-semibold'>---My Talent---</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md flex flex-col">
            <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
            <p className="text-gray-600 mb-2 flex-grow">{skill.description}</p>
            <div className="flex items-center">
              <div className="w-2/3 h-2 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <span className="ml-2">{`${skill.percentage}%`}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
