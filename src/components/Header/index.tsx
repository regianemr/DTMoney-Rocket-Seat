import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/Logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}