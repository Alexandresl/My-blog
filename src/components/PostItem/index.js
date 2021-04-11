import React from "react"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemLWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          30 de Julho de 20920 &dtri; 4 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>
          Diga não ao Medium: tenha sua própria plataforme
        </S.PostItemTitle>
        <S.PostItemDescription>
          Algumas razões para você ter sua própria plataforma ao invés de
          soluções como o Medium.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemLWrapper>
  </S.PostItemLink>
)

export default PostItem
