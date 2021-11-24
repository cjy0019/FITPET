export interface HotelRegisterResponse {
  lodgingType: string; // 숙소 유형,종류(호텔, 리조트, 펜션 ...)
  lodgignName: string; // 숙소이름
  lodgingEnName: string; // 숙소 영어이름
  lodgingStar: number; // 별점
  lodgingClass: string; // 몇성급인지(1,2,3,4,5)
  lodginSubDescription: string; // 서브 설명
  lodgingLocation: string; // 숙소위치
  lodgingMainImg: string; // 숙소 대표 이미지
  lodgingImgs: string[]; // 숙소 상세 이미지
  lodgingSlideImg: string[]; // 숙소 슬라이드 이미지
  lodgingPopularityImg: string; // 인기 숙소 이미지
  options: {
    smallDogYN: boolean; // 소형견 여부
    middleDongYN: boolean; // 중형견 여부
    bigDogYN: boolean; // 대형견 여부
    catYN: boolean; // 고양이 여부
    dryRoomYN: boolean; // 드라이룸 여부
    inPoolYN: boolean; // 실내 수영장 여부
    petPlaygroundYN: boolean; // 애견 운동장
    selfBathYN: boolean; // 셀프목욕
    petSpaYN: boolean; // 애견 스파
    petShowerYN: boolean; // 애견 샤워장
    petDogPlaygroundYN: boolean; // 애견 놀이터
    grassYardYN: boolean; // 잔디마당
    photozoneYN: boolean; // 포토존
    petProductsYN: boolean; // 반려동물용품제공
    petWithYN: boolean; // 반려동물 동반
    allDogBreedYN: boolean; // 모든견종
    fierceDogOffLimitsYN: boolean; // 맹견출입금지
    wifYN: boolean; // 와이파이
    eachBarbecueYN: boolean; // 개별 바베큐
    cafeYN: boolean; // 카페여부
    restaurantYN: boolean; // 레스토랑 여부
    cookingYN: boolean; // 취사가능
    baggageStorageYN: boolean; // 수하물 보관
    reception24HourYN: boolean; // 24시리셉션
    fitnessYN: boolean; // 피트니스 센터
    spaYN: boolean; // 스파 여부
    laundryYN: boolean; // 세탁 여부
    poolYN: boolean; // 수영장 여부
    businessFacilitiesYN: boolean; // 비즈니스 시설
    facilitiesforTheDisabledYN: boolean; // 장애인 편의시설
  };
}
