import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';
import { BiSolidMoon, BiSun } from 'react-icons/bi';
export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="side-navbar fixed p-1 w-[98vw] mt-2 mx-2 lg:w-16 lg:h-[55vh] lg:top-50 lg:right-3 lg:mt-28 ">
            <ReactSwitch onChange={toggleTheme} checked={theme === "light"} onColor='#213547' handleDiameter={18}
                checkedIcon={
                    <div className='flex justify-center items-center h-full text-yellow-300'>
                        <BiSun />
                    </div>
                }
                uncheckedIcon={
                    <div className='flex justify-center items-center h-full text-orange-300'>
                        <BiSolidMoon />
                    </div>
                }
            />
        </div>
    )
}