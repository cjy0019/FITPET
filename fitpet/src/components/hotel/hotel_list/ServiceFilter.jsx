import React, { useRef } from 'react';
import useFoldingSection from '../../../hooks/useFoldingSection';
import {
  DownButton,
  FilterBtn,
  FilterTitle,
  UpButton,
  AllWrapper,
  ButtonContainer,
  Folder,
  LineWrapper,
} from '../hotel_common/filterCommon';

const ServiceFilter = () => {
  const foldingRef = useRef(null);
  const [isFold, setIsFold] = useFoldingSection(foldingRef, 80);

  return (
    <AllWrapper>
      <ButtonContainer>
        <FilterTitle>서비스 및 편의시설</FilterTitle>
        {isFold ? (
          <UpButton handleClick={handleClick} />
        ) : (
          <DownButton handleClick={handleClick} />
        )}
      </ButtonContainer>
      {/* 반려동물 편의시설 */}

      <Folder ref={foldingRef}>
        <FilterTitle subtitle>반려동물 편의시설</FilterTitle>

        <LineWrapper>
          <FilterBtn noMargin>드라이룸</FilterBtn>
          <FilterBtn>실내수영장</FilterBtn>
          <FilterBtn>애견운동장</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>셀프목욕</FilterBtn>
          <FilterBtn>애견스파</FilterBtn>
          <FilterBtn>애견샤워장</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>애견놀이터</FilterBtn>
          <FilterBtn>잔디마당</FilterBtn>
          <FilterBtn>포토존</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>반려동물용품제공</FilterBtn>
          <FilterBtn>반려동물동반</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>모든견종</FilterBtn>
          <FilterBtn>맹견출입금지</FilterBtn>
        </LineWrapper>

        {/* 편의시설 */}
        <FilterTitle subtitle mt>
          편의시설
        </FilterTitle>
        <LineWrapper>
          <FilterBtn noMargin>와이파이</FilterBtn>
          <FilterBtn>조식</FilterBtn>
          <FilterBtn>개별바베큐</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>카페</FilterBtn>
          <FilterBtn>레스토랑</FilterBtn>
          <FilterBtn>취사가능</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>무료주차</FilterBtn>
          <FilterBtn>수하물보관</FilterBtn>
          <FilterBtn>24시 리셉션</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>피트니스</FilterBtn>
          <FilterBtn>스파</FilterBtn>
          <FilterBtn>세탁</FilterBtn>
          <FilterBtn>수영장</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>비즈니스시설</FilterBtn>
          <FilterBtn>장애인편의시설</FilterBtn>
        </LineWrapper>

        {/* 객실내 시설 */}
        <FilterTitle subtitle mt>
          객실 내 시설
        </FilterTitle>
        <LineWrapper>
          <FilterBtn noMargin>욕조</FilterBtn>
          <FilterBtn>TV</FilterBtn>
          <FilterBtn>냉장고</FilterBtn>
          <FilterBtn>미니바</FilterBtn>
        </LineWrapper>
        <LineWrapper>
          <FilterBtn noMargin>에어컨</FilterBtn>
          <FilterBtn>의류관리기</FilterBtn>
          <FilterBtn>드라이기</FilterBtn>
        </LineWrapper>
      </Folder>
    </AllWrapper>
  );

  function handleClick() {
    setIsFold(!isFold);
  }
};

export default ServiceFilter;
