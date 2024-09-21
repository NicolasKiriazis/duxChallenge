export interface User {
    id: string;
    estado: string;
    sector: number;
    usuario: string;
} 

export interface UsersPageProps {
    users: User[]
}