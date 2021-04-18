import React from "react"

import * as S from "./styled"
import { Icons } from './icons';

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para a home">
        <S.MenuBarItem>
          <Icons.Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Pesquisar">
        <S.MenuBarItem>
          <Icons.Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarLink>
        <S.MenuBarItem title="Mudar o Tema">
          <Icons.Light />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar a Visualização">
          <Icons.Grid />
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o Topo">
          <Icons.Arrow />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
