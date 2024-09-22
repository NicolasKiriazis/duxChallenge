import { IconField } from 'primereact/iconfield';
import Icons from '../../atoms/icons';
import Input from '../../atoms/input';
import React from 'react';

interface InputMoleculeProps {
    state: string
    setState: (state: string) => void
}

const InputMolecule:React.FC<InputMoleculeProps> = ({state, setState}) => { 


return<>
    
    <div className="h-3rem md:w-4 mr-2">
    <IconField iconPosition="left">
    <Icons name='pi-search' />
    <Input state={state} setState={setState} className="h-3rem w-full" />
    </IconField>
    </div>

</>
}

export default InputMolecule