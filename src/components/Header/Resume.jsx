import resume from '../../assets/MehediResume (3).pdf'

const Resume = () => {
    return (
        <div className="resume">
            <a href={resume} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
    );
};

export default Resume;