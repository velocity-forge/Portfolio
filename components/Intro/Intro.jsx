import Image from 'next/image'
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Contact from './Contact'
import Download from './Download'
import Languages from './Languages'
import Location from './location'
import Tools from './Tools'


const Intro = () => {

    return (
        <div className="h-full overflow-hidden relative bg-[#20202A] shadow-2xl flex flex-col">
            {/* fixed at top */}
            <div className="headerr z-50 absolute bg-gray-800 bg-opacity-90 backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
                <img className='w-20 h-20 rounded-full' src='images/osama.jpg' alt="" />
                <div className="flex flex-col items-center justify-center">
                    <span className='text-white text-sm font-bold break-normal'>Muhammad Osama Javaid </span>
                    <span className='text-xs text-gray-600 text-center'>MERN Stack Develoer | UI/UX Designer <br /> Tech Blogger </span>
                </div>
            </div>

            {/* middle components */}
            <div className="beech flex flex-col overflow-y-auto pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
                <Location />
                <Languages />
                <Tools />
                <Contact />
                <Download icon={<FaDownload />} />
            </div>

            {/* fixed at bottom */}
            <div className="footerr absolute flex justify-center space-x-6 text-xl items-center bottom-0 h-10 w-full bg-gray-800 text-white">
                <div className=""><FaGithub /></div>
                <div className=""><FaTwitter /></div>
                <div className=""><FaFacebook /></div>
                <div className=""><FaLinkedin /></div>
            </div>

        </div>
    )
}

export default Intro