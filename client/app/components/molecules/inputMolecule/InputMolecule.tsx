import { IconField } from 'primereact/iconfield';
import Icons from '../../atoms/icons';
import Input from '../../atoms/input';

const InputMolecule = () => { 

const prueba = () => {
    console.log("funciona")
}

return<>
    
    <div className="bg-blue-700">
    <IconField iconPosition="left">
    <Icons name='pi-search' />
    <Input state="hola" setState={prueba}/>
    </IconField>
    </div>

</>
}

export default InputMolecule