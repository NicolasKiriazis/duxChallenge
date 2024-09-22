import { IconField } from 'primereact/iconfield';
import Icons from '../../atoms/icons';
import Input from '../../atoms/input';

const InputMolecule = () => { 

const prueba = () => {
    console.log("funciona")
}

return<>

    <IconField iconPosition="left">
    <Icons name='pi-search' />
    <Input state="hola" setState={prueba}/>
    </IconField>

</>
}

export default InputMolecule