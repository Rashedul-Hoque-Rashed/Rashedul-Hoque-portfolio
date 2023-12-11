

const Educations = () => {
    return (
        <section className="container mx-auto px-8 pb-24">
            <h2 className="text-3xl font-bold text-center font-oswald mb-1">Educations</h2>
            <h6 className='text-center mb-8 font-semibold font-roboto'>---My History---</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Education Item 1 */}
                <div className="education-item bg-white p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold font-oswald mb-2 pb-2 border-b-2">Secondary School Certificate</h3>
                    <p className="font-roboto">Session: 2012-2013</p>
                    <p className="font-roboto">Passing Year: 2014</p>
                    <p className="font-roboto">GPA: 4.13 (Out of 5)</p>
                </div>

                {/* Education Item 2 */}
                <div className="education-item bg-white p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold font-oswald mb-2 pb-2 border-b-2">Diploma in Textile</h3>
                    <p className="font-roboto">Session: 2014-2018</p>
                    <p className="font-roboto">Passing Year: 2018</p>
                    <p className="font-roboto">GPA: 3.47 (Out of 4)</p>
                </div>

                {/* Education Item 3 */}
                <div className="education-item bg-white p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold font-oswald mb-2 pb-2 border-b-2">Bachelor of Science in CSE</h3>
                    <p className="font-roboto">Session: 2021-present</p>
                </div>
            </div>
    </section>
  );
};

export default Educations;
