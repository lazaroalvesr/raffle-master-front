/* eslint-disable */

import { ReactNode } from "react";

export interface CardRaffleProps {
    src: string
    href: string
    text: string
    quantityNumbers: string;
}

export interface RaffleProps {
    id: string;
    name: string;
    description: string;
    image: string
}

export interface RaffleUniqueProps {
    raffle: {
        id: string;
        name: string;
        description: string;
        image: string
        startDate: string;
        endDate: string;
        quantityNumbers: string;
        ticketPrice: string;
    }
    availableTickets: string;
}

export interface CalendarProps {
    text: string | any
}

export interface TicketProps {
    number: string
}

export interface InfosCardProps {
    ticketPrice: string | any
    quantityNumbers: number | any
    endDate: string | undefined
}

export interface BuyCardProps extends Partial<InfosCardProps> {
    onClick?: () => void;
    quantityNumbers: number
    handleSubmit: (quantity: number) => void;
    successMessage: string | null;
    errorMessage: string | null;
    loading: boolean;
}

export interface DescriptionCardProps extends Partial<InfosCardProps> { }

export interface ButtonCardBuyProps {
    number: string;
    onClick?: () => void;
    loading?: boolean;
}

export interface LoginProps {
    email: string;
    password: string;
}

export interface RegisterProps {
    name: string;
    surname: string;
    email: string;
    telephone: string;
    password: string;
}

export enum Role {
    USER = 'USER',
    ADM = 'ADM',
}

export interface PurchaseBuyCardProps {
    quantity: number
    pixLink: string | any
    qrCode: string | any
    ticketPrice: string | any
    amount: number
}

export interface TicketsProps {
    id: string,
    number: number,
    userId: string
    raffleId: string
    _count: {
        tickets: number
        Payment: boolean
    }
}

export enum StatusPayment {
    PENDENTE,
    CANCELADO,
    APROVADO
}

export interface RaffleProps {
    name: string
    _count: {
        tickets: number
        payment: number
    }
}

export interface UserRaffleProps {
    id: string
    amount: number | any
    paymentMethod: "pix"
    status: StatusPayment | any
    createdAt: Date
    pixUrl: string | any
    raffle: RaffleProps
    ticketNumbers: number[]
    user: {
        name: string
    }
}

export interface UserNavProps {
    name: string | undefined
    email: string | undefined
    isAdm: boolean
}

export interface InfoPaymentProps {
    nameRafle: string
    namePayer: string | any
    infoPayment: string | any
    infoDateBuy?: Date;
    paymentMethod: "PIX"
    numTickets: number[] | any
    pixLink: string
    close: () => void
}

export interface Ticket {
    nameRafle: string
    infosName?: string;
    infoPayment?: string;
    infoDateBuy?: Date;
    infoNamePayer?: string;
    infoAmout: number;
    ticketNumbers?: number[];
    pixLink: string;
}

export interface TableProps {
    tickets?: Ticket[];
}

export interface StatusPaymentCardProps {
    infoPayment: string | undefined
}

export interface Props {
    children: ReactNode
}




export type TUser = {
    id: string;
    name: string
    email: string;
    surname: string
    telephone: string
    role: Role
    access_token: string

};

export interface AuthUser {
    token: string;
    user: TUser;
};

export interface NavLinkProps {
    href: string
    children: React.ReactNode
}

export interface dataProps {
    name?: string
    surname?: string
    email?: string,
    telephone?: string
}

export interface TAuthContext {
    user: AuthUser | null;
    setUser: (user: AuthUser | null) => void;
    updateUser: (userData: Partial<AuthUser['user']>) => void;
}

export interface SidebarProps {
    ativo: boolean
    setAtivo: (ativo: boolean) => void
}

export interface Rafle {
    id: string
    image: string
    name: string
    quantityNumbers: string;

}

export interface RaffleSelect {
    id: string
    name: string
}

export interface RaffleUniqueADM {
    id: string
    name: string;
    endDate: string | any;
    ticketPrice: string;
    availableTickets: number;
    quantityNumbers: number;
    description?: string | any

    onDelete: (id: string) => Promise<void>;
}

export interface RaffleUniqueEdit {
    id: string
    name: string;
    endDate: string | any;
    ticketPrice: string;
    quantityNumbers: number;
    image: null | File
    description?: string | any
}

export interface InfoRaffleProps extends Partial<RaffleUniqueADM> {
    close: () => void
    isRaffleActive: (endDate: string) => boolean
    onClick: () => void;
}

export interface RaffleInfoPaymento {
    user: {
        name: string
    },
    name: string
    status: StatusPayment | any
    createdAt: string
    ticketNumbersCount: number
    amount: number
}

export interface UserAllProps {
    name: string
    surname: string
    email: string
    telephone: string
}

export interface InfoUserAllCardProps extends Partial<UserAllProps> {
    close: () => void
}

export interface InfoRaffleCardProps extends Partial<RaffleInfoPaymento> {
    close: () => void
}

export interface RaffleCreate {
    name: string
    description: string
    quantityNumbers: string
    ticketPrice: string
    startDate: Date
    endDate: Date
    image: null | File
}

export interface TruncatedTextProps {
    text: string;
    className?: string;
}
