import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Contact from './Contact'
import Download from './Download'
import Languages from './Languages'
import Location from './Location'
import Tools from './Tools'
import Skills from './Skills'


const Intro = () => {

    return (
        <>
            {/* fixed at top */}
            <div className="headerr z-50 absolute bg-[#23232f] bg-opacity-95 backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
                <img className='w-20 h-20 rounded-full' src='images/osama.jpg' alt="" />
                <div className="flex flex-col items-center justify-center">
                    <span className='text-gray-300 text-sm font-bold break-normal'>Muhammad Osama Javaid </span>
                    <span className='text-xs text-gray-500 text-center'>MERN Stack Develoer | UI/UX Designer <br /> Tech Blogger </span>
                </div>
            </div>

            {/* middle components */}
            <div className="beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
                <Location />
                <Languages />
                <Skills />
                <Tools />
                <Contact />
                <Download icon={<FaDownload />} />
            </div>

            {/* fixed at bottom */}
            <div className="footerr absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-[#23232f] text-white">
                <a href='https://github.com/osamajavaid' target='_blank' rel="noreferrer" className=""><FaGithub /></a>
                <a href='https://twitter.com/iosamajavaid' target='_blank' rel="noreferrer" className=""><FaTwitter /></a>
                <a href='' target='_blank' rel="noreferrer" className=""><FaFacebook /></a>
                <a href='https://www.linkedin.com/in/reachOsama' target='_blank' rel="noreferrer" className=""><FaLinkedin /></a>
            </div>

        </>
    )
}

export default Intro