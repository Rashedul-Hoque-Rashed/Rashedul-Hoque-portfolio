

const Educations = () => {
  return (
    <div className="contact-container bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold mb-4">Education</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Education Item 1 */}
        <div className="education-item bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Secondary School Certificate</h3>
          <p>Session: 2012-2013</p>
          <p>Passing Year: 2014</p>
          <p>GPA: 4.13 (Out of 5)</p>
        </div>

        {/* Education Item 2 */}
        <div className="education-item bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Diploma in Textile</h3>
          <p>Session: 2014-2018</p>
          <p>Passing Year: 2018</p>
          <p>GPA: 3.47 (Out of 4)</p>
        </div>

        {/* Education Item 3 */}
        <div className="education-item bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science and Engineering</h3>
          <p>Session: 2021-present</p>
        </div>
      </div>
    </div>
  );
};

export default Educations;
