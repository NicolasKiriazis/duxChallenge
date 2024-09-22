import { IconField } from 'primereact/iconfield';
import Icons from '../../atoms/icons';
import Input from '../../atoms/input';

const InputMolecule = () => { 

const prueba = () => {
    console.log("funciona")
}

return<>
    
    <div className="h-3rem md:w-4">
    <IconField iconPosition="left">
    <Icons name='pi-search' />
    <Input state="hola" setState={prueba} className="h-3rem w-full" />
    </IconField>
    </div>

</>
}

export default InputMolecule