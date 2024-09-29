import { Sidebar } from 'primereact/sidebar';
import Icons from "../../atoms/icons"


const Menu = () => {
    
    return<>
    <div className="hidden lg:flex menu-color-custom">
    <div className="mt-3 flex flex-column w-5rem align-items-center" style={{ gap: '1rem' }}>
    <Icons className="" name='pi-box' size={25} color='white'/>
    <Icons className="" name='pi-box' size={25} color='white'/>
    <Icons className="" name='pi-box' size={25} color='white'/>
    <Icons className="" name='pi-box' size={25} color='white'/>
    <Icons className="" name='pi-box' size={25} color='white'/>
    <Icons className="" name='pi-box' size={25} color='white'/>
    </div>
    </div>
    </>
}

export default Menu