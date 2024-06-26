const dummyUsers = [
  {
    id: "MX69Do2ESTVpgp18XplEzvKTBCe2",
    channel: "password",
    email: "user1@example.com",
    password: "test1234!",
    name: "김철수",
    agree: true,
    birthyear: "1985",
    blog: "blog1",
    gender: "남",
    influence: "influence1",
    instagram: "insta1",
    nickname: "철수",
    phone: "01011112222",
    street: "서울 강남구 역삼로",
    zonecode: "06130",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
  },
  {
    id: "ri1oT6BwBqhSPuPTIOnWcD54xIy1",
    channel: "password",
    email: "user2@example.com",
    password: "test1234!",
    name: "박영희",
    agree: true,
    birthyear: "1992",
    blog: "blog2",
    gender: "여",
    influence: "influence2",
    instagram: "insta2",
    nickname: "영희",
    phone: "01022223333",
    street: "서울 서초구 서초대로",
    zonecode: "06620",
    createdAt: new Date("2024-06-02T16:00:00.000Z"),
  },
  {
    id: "03zVfZUwtvRjXyUSEh5Be6uv04o2",
    channel: "password",
    email: "user3@example.com",
    password: "test1234!",
    name: "이민호",
    agree: true,
    birthyear: "1990",
    blog: "blog3",
    gender: "남",
    influence: "influence3",
    instagram: "insta3",
    nickname: "민호",
    phone: "01033334444",
    street: "서울 송파구 올림픽로",
    zonecode: "05510",
    createdAt: new Date("2024-06-03T16:00:00.000Z"),
  },
  {
    id: "SGdJKY6g9zeyEN9F3BrVdiXnhsB2",
    channel: "password",
    email: "user4@example.com",
    password: "test1234!",
    name: "최수정",
    agree: true,
    birthyear: "1995",
    blog: "blog4",
    gender: "여",
    influence: "influence4",
    instagram: "insta4",
    nickname: "수정",
    phone: "01044445555",
    street: "서울 종로구 종로",
    zonecode: "03150",
    createdAt: new Date("2024-06-04T16:00:00.000Z"),
  },
  {
    id: "ahk9HDrMbqXYkmH8OQjlv4GKwjL2",
    channel: "password",
    email: "user5@example.com",
    password: "test1234!",
    name: "한동훈",
    agree: true,
    birthyear: "1988",
    blog: "blog5",
    gender: "남",
    influence: "influence5",
    instagram: "insta5",
    nickname: "동훈",
    phone: "01055556666",
    street: "서울 마포구 월드컵로",
    zonecode: "03900",
    createdAt: new Date("2024-06-05T16:00:00.000Z"),
  },
  {
    id: "nKZx8pDeegYphW7jpMTAGo4h9E32",
    channel: "password",
    email: "user6@example.com",
    password: "test1234!",
    name: "김하나",
    agree: true,
    birthyear: "1993",
    blog: "blog6",
    gender: "여",
    influence: "influence6",
    instagram: "insta6",
    nickname: "하나",
    phone: "01066667777",
    street: "서울 강동구 천호대로",
    zonecode: "05330",
    createdAt: new Date("2024-06-06T16:00:00.000Z"),
  },
  {
    id: "ZsRmT7gbEmQDtF4EGclyFnGwEhw1",
    channel: "password",
    email: "user7@example.com",
    password: "test1234!",
    name: "이준혁",
    agree: true,
    birthyear: "1987",
    blog: "blog7",
    gender: "남",
    influence: "influence7",
    instagram: "insta7",
    nickname: "준혁",
    phone: "01077778888",
    street: "서울 용산구 이태원로",
    zonecode: "04390",
    createdAt: new Date("2024-06-07T16:00:00.000Z"),
  },
  {
    id: "f1mAsPMzfzfBjuXZzHUhOtO0J9Q2",
    channel: "password",
    email: "user8@example.com",
    password: "test1234!",
    name: "오미정",
    agree: true,
    birthyear: "1991",
    blog: "blog8",
    gender: "여",
    influence: "influence8",
    instagram: "insta8",
    nickname: "미정",
    phone: "01088889999",
    street: "서울 동작구 상도로",
    zonecode: "06930",
    createdAt: new Date("2024-06-08T16:00:00.000Z"),
  },
  {
    id: "1ERoR2K6UWNWaylLFoQzyihbTOr2",
    channel: "password",
    email: "user9@example.com",
    password: "test1234!",
    name: "박준성",
    agree: true,
    birthyear: "1986",
    blog: "blog9",
    gender: "남",
    influence: "influence9",
    instagram: "insta9",
    nickname: "준성",
    phone: "01099990000",
    street: "서울 은평구 통일로",
    zonecode: "03300",
    createdAt: new Date("2024-06-09T16:00:00.000Z"),
  },
  {
    id: "JCjTi0WqhsMZiFxiw0slyozZcx02",
    channel: "password",
    email: "user10@example.com",
    password: "test1234!",
    name: "김은지",
    agree: true,
    birthyear: "1989",
    blog: "blog10",
    gender: "여",
    influence: "influence10",
    instagram: "insta10",
    nickname: "은지",
    phone: "01010101010",
    street: "서울 관악구 신림로",
    zonecode: "08700",
    createdAt: new Date("2024-06-10T16:00:00.000Z"),
  },
];

const dummyCampains = [
  {
    id: "SEFFGCfp0gQ7V10GQfuQ",
    createdAt: "2023-11-10",
    startDate: "2023-11-10",
    endDate: "2023-11-24",
    openDate: "2023-11-27",
    images: ["1.jpeg"],
    keywords: ["강아지유산균", "고양이유산균", "반려동물유산균"],
    targetCnt: 21,
    mozip: ["0", "1", "2", "3"],
    name: "트리에스 멀티 유산균 31",
    product: " 트리에스 멀티 유산균 31 [1개월분]",
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그) 필수미션
- 제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
-동영상 2개 이상 (급여 전 - 급여 모습) 사진 16장 이상 필수
-멘트 1,500자~2000자 (자유롭게 느낀 점을 기재)
-메타 디스크립션 글자수 140자 전후
-제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타)필수미션
@tris.korea 태그
사진3, 급여동영상1, 제품혼합동영상1
아래내용 포함된 게시글 작성
- 국내최다31종 유산균
- 제조일자 표기된 유일한 유산균
(제조일로부터 1년이내의 제품만 판매하는 정직한 기업)
- 강아지 고양이 모두 급여가능
      `,
    company: "트리에스",
  },
  {
    id: "qNBtI1r2IJy6ue5ivYs2",
    createdAt: "2023-11-10",
    startDate: "2023-11-22",
    endDate: "2023-12-06",
    openDate: "2023-12-07",
    images: ["2.png", "3.gif", "4.jpeg", "5.jpeg", "6.gif", "7.jpeg"],
    keywords: [
      "고양이모래",
      "응고력좋은모래",
      "기호성좋은모래",
      "카츠",
      "댕댕뷰",
      "고양이모래응고형",
      "고양이용품",
    ],
    targetCnt: 6,
    mozip: ["0", "1", "2", "3"],
    name: "카츠 벤토나이트 모래",
    product: "벤토나이트 모래 [14KG]",
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그) 필수미션
- 제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
-동영상 2개 이상 (급여 전 - 급여 모습) 사진 16장 이상 필수
-멘트 1,500자~2000자 (자유롭게 느낀 점을 기재)
-메타 디스크립션 글자수 140자 전후
-제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타)필수미션
- @dmss1018태그
사진3, 도포동영상1(사용모습-사용 후)
아래내용 포함된 게시글 작성
-빠르게 응고되고,악취를 흡착하여 쾌적해요
-쾌적한 화장실 환경조성 및 응고력
-최소한의 먼지발생으로 사막화 없는 깔끔한 사용감
-부드럽운 입자, 깔끔한 촉감,가성비 제품
      `,
    company: "카츠",
  },
  {
    id: "TygQY1Hn94lRwO66hKjs",
    createdAt: "2023-11-27",
    startDate: "2023-11-27",
    endDate: "2023-12-11",
    openDate: "2023-12-12",
    images: ["8.png", "9.jpeg"],
    keywords: [
      "고양이모래",
      "응고력좋은모래",
      "기호성좋은모래",
      "카츠",
      "댕댕뷰",
      "고양이모래응고형",
      "고양이용품",
    ],
    targetCnt: 17,
    mozip: ["0", "1", "2", "3"],
    name: "카츠 순두부 모래",
    product: "순두부 모래 [7리터x6팩]",
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그) 필수미션
- 제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
-동영상 2개 이상 (사용 모습 - 사용 후) 사진 16장 이상 필수
-멘트 1,500자~2000자 (자유롭게 느낀 점을 기재)
-메타 디스크립션 글자수 140자 전후
-제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타)필수미션
- @dmss1018태그
사진3, 사용동영상1(사용모습-사용 후)
아래내용 포함된 게시글 작성
-빠르게 응고되고,악취를 흡착하여 쾌적해요
-쾌적한 화장실 환경조성 및 응고력
-최소한의 먼지발생으로 사막화 없는 깔끔한 사용감
-부드럽운 입자, 깔끔한 촉감,가성비 제품
      `,
    company: "카츠",
  },
  {
    id: "TygQY1Hn94lRwO66hKjs",
    createdAt: "2023-11-27",
    startDate: "2023-11-27",
    endDate: "2023-12-11",
    openDate: "2023-12-12",
    images: ["8.png", "9.jpeg"],
    keywords: [
      "고양이모래",
      "응고력좋은모래",
      "기호성좋은모래",
      "카츠",
      "댕댕뷰",
      "고양이모래응고형",
      "고양이용품",
    ],
    targetCnt: 17,
    mozip: ["0", "1", "2", "3"],
    name: "카츠 순두부 모래",
    product: "순두부 모래 [7리터x6팩]",
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그) 필수미션
- 제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
-동영상 2개 이상 (사용 모습 - 사용 후) 사진 16장 이상 필수
-멘트 1,500자~2000자 (자유롭게 느낀 점을 기재)
-메타 디스크립션 글자수 140자 전후
-제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타)필수미션
- @dmss1018태그
사진3, 사용동영상1(사용모습-사용 후)
아래내용 포함된 게시글 작성
-빠르게 응고되고,악취를 흡착하여 쾌적해요
-쾌적한 화장실 환경조성 및 응고력
-최소한의 먼지발생으로 사막화 없는 깔끔한 사용감
-부드럽운 입자, 깔끔한 촉감,가성비 제품
      `,
    company: "카츠",
  },
  {
    id: "KDX4fj7FWtZMTiHalTur",
    createdAt: "2023-12-04",
    startDate: "2023-12-04",
    endDate: "2023-12-18",
    openDate: "2023-12-19",
    images: ["10.png", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg"],
    keywords: [
      "강아지간식",
      "강아지말고기",
      "말고기간식",
      "모리모리",
      "댕댕뷰",
      "말고기습식",
      "저알러지간식",
    ],
    targetCnt: 30,
    mozip: ["0", "1", "2", "3"],
    name: "모리모리 MORI MORI 홀스스넥 3종",
    product: `- 모리모리 MORI 홀스 밀 레시피 (공통)
- 모리모리 MORI 홀스 리버(간) (선택)
- 모리모리 MORI 홀스 렁 (허파) (선택)`,
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그) 필수미션
- 제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
-동영상 2개 이상 (사용 모습 - 사용 후) 사진 16장 이상 필수
-멘트 1,500자~2000자 (자유롭게 느낀 점을 기재)
-메타 디스크립션 글자수 140자 전후
-제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타)필수미션
-@morimori_kr 태그 , @dengdeng_view 태그
사진3, 사용동영상1(섭취 영상)
아래내용 포함된 게시글 작성
-팔미톨렌산, 세라마이드, 비타민, 철분 등 풍부한 영양소
-방부제, 향미료, 화학첨가물 등 ZERO​
-육즙 가득 부드러운 식감, 엄청난 기호성!
-대표적인 저알러지, 저지방 고단백 육류
      `,
    company: "모리모리",
  },
  {
    id: "nch60o65J0Mzxl4x6Nkh",
    createdAt: "2023-12-06",
    startDate: "2023-12-06",
    endDate: "2023-12-20",
    openDate: "2023-12-21",
    images: [
      "16.png",
      "17.png",
      "18.png",
      "19.png",
      "20.png",
      "21.png",
      "22.png",
    ],
    keywords: [
      "강아지간식",
      "강아지치석제거",
      "강아지입냄새제거",
      "견사돌",
      "댕댕뷰",
      "강아지영양제",
      "강아지껌",
    ],
    targetCnt: 30,
    mozip: ["0", "1", "2", "3"],
    name: "견사돌 강아지 덴탈껌",
    product: `견사돌 강아지 덴탈껌 치석제거 입냄새 제거 완화 영양제`,
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그) 필수미션
- 제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
-동영상 2개 이상 (급여 모습) 사진 16장 이상 필수 
-멘트 1,500자~2000자 (자유롭게 느낀 점을 기재)
-메타 디스크립션 글자수 140자 전후
-제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타)필수미션
-@thepetbio 태그 , @dengdeng_view 태그
-사진5, 급여동영상1,혼합동영상1
아래내용 포함된 게시글 작성
- 우리 아이랑 오래오래 함께하려고 만든 구강관리 영양제
- 특허받은 모양으로 치석제거 뿐만 아니라 잇몸관리, 구취제거까지 신경쓴 구강관리의 끝판왕
- 시중의 덴탈껌 중에 유일하게 잇몸 관리까지 신경쓴 덴탈껌
- 엄선된 자연유래 성분으로 장건강까지! 변냄새 제거 효과는 덤
- 부스럭 소리만 들어도 난리날 정도의 기호성
      `,
    company: "견사돌",
  },
  {
    id: "9YKJ8B6ZF63W1e3RZkzo",
    name: "금산이가 홍삼 고려흑삼펫",
    product: `고려흑삼펫`,
    targetCnt: 15,
    createdAt: "2023-12-13",
    startDate: "2023-12-13",
    endDate: "2023-12-27",
    openDate: "2023-12-28",
    images: ["23.png", "24.jpeg", "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg"],
    keywords: [
      "강아지영양제",
      "강아지영양보충",
      "애견영양제",
      "금산이가 홍삼",
      "댕댕뷰",
      "강아지면역력",
      "강아지종합영양제",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10, //30
      "2024-06-03": 5, // 35
      "2024-06-04": 10, //45
      "2024-06-05": 20, //65
      "2024-06-06": 10, // 75
      "2024-06-07": 5, // 80
      "2024-06-08": 0,
      "2024-06-09": 10, // 90
      "2024-06-10": 30, // 120
      "2024-06-11": 20, // 140
      "2024-06-12": 10, // 150
      "2024-06-13": 5, // 155
      "2024-06-14": 10, // 165
      "2024-06-15": 20, // 185
      "2024-06-16": 10, // 195
      "2024-06-17": 5, // 200
    },
    totalviews: 200,
    mission_description: `(블로그) 필수미션
- 제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
-동영상 2개 이상 (사용 모습 - 사용 후) 사진 16장 이상 필수
-멘트 1,500자~2000자 (자유롭게 느낀 점을 기재)
-메타 디스크립션 글자수 140자 전후
-제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타)필수미션
-@금산이가 홍삼 태그 , @dengdeng_view 태그
-사진5, 급여동영상1
아래내용 포함된 게시글 작성
- 입맛이 까다롭고 잘먹지 않는 친구들에게 추천해요!
- 나이가 들어 체력이 예전 같지 않은친구들 추천!
- 수술이나 출산 후 기력 보충이 필요해요!
- 하루가 다르게 폭풍성장 중이예요!
- 체력보강+면역력증진에 좋아요!`,
    company: "금산이가",
  },
  {
    id: "0w8LNEvyobVi8xLqVz61",
    name: "하놀하놀 펫비누",
    product: `하놀하놀 펫비누`,
    targetCnt: 15,
    createdAt: "2023-12-29",
    startDate: "2023-12-29",
    endDate: "2024-01-14",
    openDate: "2024-01-15",
    images: ["29.png", "30.png", "31.png", "32.png", "33.png"],
    keywords: [
      "강아지비누",
      "펫비누",
      "펫샴푸바",
      "하놀하놀펫",
      "고양이비누",
      "고체샴푸바",
      "댕댕이목욕",
      "추천강아지비누",
      "추천펫비누",
      "하놀하놀",
      "댕댕뷰",
      "강아지체험단",
      "고양이체험단",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그) 필수미션
- 제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
-동영상 1개 이상(사용 모습, 사진15장 이상 필수
-멘트 1,300자 이상(자유롭게 느낀 점을 기재)
-제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타)필수미션
@hanorhanor_pet태그,@dengdeng_view 태그
사진4장이상,사용동영상1개 필수
아래내용 포함된 게시글 작성
사람보다 3배 얇은 피부를 가진 강아지들을 위해 제작된 5가지 무첨가
(색소, 디옥신, 파라벤, 계면활성제, 방부제) 제품
2022년 대한민국 신상품 생활 부분 베스트 대상 수상
동물 병원, 펫미용샵, 펫분양샵에만 입점
일본 체인 동물 병원 펫뷰티샵 입점`,
    company: "하놀하놀",
  },
  {
    id: "EfkAUyOHTe8QoPP6Hcvr",
    name: "알로키친 디톡스베지",
    product: `알로키친 디톡스베지 12종야채&유산균`,
    targetCnt: 23,
    createdAt: "2024-01-09",
    startDate: "2024-01-09",
    endDate: "2024-01-18",
    openDate: "2024-01-19",
    images: ["34.png", "35.png", "36.png", "37.png", "38.png", "39.png"],
    keywords: [
      "강아지동결건조사료",
      "강아지음수량",
      "강아지물간식",
      "알로키친",
      "댕댕뷰",
      "강아지췌장염",
      "강아지야채",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그 필수미션)
제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
동영상 1개 이상 (섭취 모습)
사진 15장 이상 필수
멘트 1,500자~2,000자 (자유롭게 느낀 점을 기재)
제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타 필수미션)
@dengdeng_view, @arlokitchen_official 태그
사진 4장이상, 섭취동영상 1개 필수
아래내용 포함된 게시글작성
-MEAT- FREE 👩🏻‍🍳 육류가 들어가지 않고, 야채과일 12종으로만 만들었어요! 🥦 🥬 🫑 🍅
-유기농 프리바이오틱스와 유산균도 들어있어요! 🌵
-천연 무기질과 비타민 풍부한 스피루리나까지
-한 블럭에 단 11kcal 밖에 되지 않는 저칼로리
- 췌장염, 알러지, 번수치 높은 아이들까지 모두 안심하고 급여할 수 있어요.
- 해동하거나 소분하지 않아도 일상에서 쉽게 야채를 급여할 수 있어요
- 물만 부으면 건강한 야채퓨레가 완성! 🍲
- 돼지 판정 받았다구요? 😱 다이어트는 장클렌징 부터에요! 저칼로리에 장까지 깨끗하게 디톡스 해준다구요! 🙈 대왕응가 주의 💩`,
    company: "알로키친",
  },
  {
    id: "iQrXqH61UV06wQkFUdJZ",
    name: "로렌츠 원데이 스틱",
    product: `- 로렌츠 원데이스틱 장건강
- 로렌츠 원데이스틱 피모건강`,
    targetCnt: 17,
    createdAt: "2024-01-11",
    startDate: "2024-01-11",
    endDate: "2024-01-19",
    openDate: "2024-01-22",
    images: ["40.png", "41.png", "42.png", "43.png", "44.png", "45.png"],
    keywords: [
      "강아지종합영양제",
      "강아지면역력영양제",
      "강아지유산균",
      "로렌츠",
      "댕댕뷰",
      "강아지변비",
      "강아지영양제",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그 필수미션)
제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
동영상 1개 이상 (섭취 모습)
사진 15장 이상 필수
멘트 1,500자~2,000자 (자유롭게 느낀 점을 기재)
제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타 필수미션)
@dengdeng_view, @lorenz_companimal 태그
사진 4장이상, 섭취동영상 1개 필수
아래내용 포함된 게시글작성
-4세대 포스트바이오틱스를 활용한 새로운 형태의 영양제
-간편하고 건강하게 급여할 수 있는 새로운 포스트바이오틱스
-첨가물, 방부제, 색소처리 없이 로렌츠가 선별한 좋은 원료
-장 건강과 피모 건강을 챙길 수 있는 유효물질 SK-L
-기호성까지 놓치지 않은 완벽한 제품 설계
-2023메가주 선공개에서 인기 최고! 영양과 기호성 모두 최고!`,
    company: "로렌츠",
  },
  {
    id: "XOjL7JULzwPJ0CvNwPVe",
    name: "로렌츠 못난이채소껌",
    product: `로렌츠 못난이채소껌`,
    targetCnt: 22,
    createdAt: "2024-01-11",
    startDate: "2024-01-11",
    endDate: "2024-01-19",
    openDate: "2024-01-22",
    images: ["52.png", "53.png", "54.png", "55.png", "56.png", "57.png"],
    keywords: [
      "강아지덴탈껌",
      "강아지입냄새제거",
      "강아지치석껌",
      "로렌츠",
      "댕댕뷰",
      "강아지치석제거",
      "강아지수제간식",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그 필수미션)
제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
동영상 1개 이상 (섭취 모습)
사진 15장 이상 필수
멘트 1,500자~2,000자 (자유롭게 느낀 점을 기재)
제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타 필수미션)
@dengdeng_view, @lorenz_companimal 태그
사진 4장이상, 섭취동영상 1개 필수
아래내용 포함된 게시글작성
-고기 없이 건강하게 시작하는 덴탈관리
-여태까지 단백질 제한이다... 육류 알레르기 때문에 껌 급여를 망설이셨던 분들!!​
  못난이채소껌🥬은 무려 🍖고기 없이도 맛있는 채소 껌이라구여😘
-안전하게 만든 반려동물 간식!!
-채소100%,덴탈케어 도움, 구취감소 도움
-방부제,타피오카 등 첨가물 일절 함유되지 않은 로렌츠 못난이채소껌!!`,
    company: "로렌츠",
  },
  {
    id: "PraSyET8geljfRHgVxbs",
    name: "셀틱 프로큐민 알로커트",
    product: `프로큐민 알로커트`,
    targetCnt: 11,
    createdAt: "2024-01-16",
    startDate: "2024-01-16",
    endDate: "2024-01-30",
    openDate: "2024-01-31",
    images: ["46.png", "47.png", "48.png", "49.png", "50.png", "51.png"],
    keywords: [
      "반려동물영양제",
      "강아지영양제",
      "고양이영양제",
      "셀틱",
      "댕댕뷰",
      "강아지피부영양",
      "고양이피부영양제",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그 필수미션)
제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
동영상 1개 이상 (사용 모습)
사진 15장 이상 필수
멘트 1,500자~2,000자 (자유롭게 느낀 점을 기재)
제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타 필수미션)
@dengdeng_view, @celltick_official 태그
사진 4장이상, 사용동영상 1개 필수
아래내용 포함된 게시글작성
-원인모를 댕냥이 알레르기 고민!!😞
-면역력 저하로 인한 알레르기 완화 효과 알로커트!
-위장 세포 재생을 돕는 양배추!
-피부노화 억제에 도움을 주는 파프리카!
-피부와 점막의 저항력을 높이는 브로콜리!
-강력한 항산화 능력 블루베리!
-혈관 및 혈관벽 강화 작용 토마토!`,
    company: "셀틱",
  },
  {
    id: "SiOA1omifgKkTyVto8pX",
    name: "38.5 펫타민 기관지케어",
    product: `펫타민 기관지케어`,
    targetCnt: 14,
    createdAt: "2024-01-18",
    startDate: "2024-01-18",
    endDate: "2024-02-01",
    openDate: "2024-02-02",
    images: ["58.png", "59.png", "60.png", "61.png", "62.png", "63.png"],
    keywords: [
      "강아지기관지",
      "고양이기관지",
      "반려동물호흡기",
      "38.5",
      "댕댕뷰",
      "강아지호흡기",
      "고양이호흡기",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그 필수미션)
제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
동영상 1개 이상 (섭취 모습)
사진 15장 이상 필수
멘트 1,500자~2,000자 (자유롭게 느낀 점을 기재)
제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현
(인스타 필수미션)

@dengdeng_view, @38.5magazine 태그
사진 4장이상, 섭취 동영상 1개 필수
아래내용 포함된 게시글작성
-강아지 고양이 겸용 제품으로 아이들의 전체적인 기관지와 호흡기 건강을 케어하고 관련 질환의 예방과 개선에 좋음
-휴먼그레이드급 원료
-TNS 과립형 그래뉼 공법으로 소화에 탁월함
-호흡기관에 쌓인 노폐물 배출에 도움
-항염, 항산화에 도움을 주며 지방 축적 억제에 도움
-혈중 콜레스테롤 조절에 도움
- 높은 기호성`,
    company: "38.5",
  },
  {
    id: "LlFSa5zee6TsL7lESvQR",
    name: "라미나로프 귀세정제",
    product: `라미나로프 강아지 고양이 귀세정제`,
    targetCnt: 20,
    createdAt: "2024-01-25",
    startDate: "2024-01-25",
    endDate: "2024-02-12",
    openDate: "2024-02-13",
    images: [
      "64.png",
      "65.png",
      "66.png",
      "67.png",
      "68.png",
      "69.png",
      "70.png",
    ],
    keywords: [
      "강아지귀세정제",
      "고양이귀세정제",
      "반려동물귀세정제",
      "라미나로프",
      "댕댕뷰",
      "강아지귀청소",
      "고양이귀청소",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그 필수미션)
제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
동영상 1개 이상 (사용 모습)
사진 10장 이상 필수
멘트 1,500자~2,000자 (자유롭게 느낀 점을 기재)
제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현
포스팅 최하단에 제품 링크 삽입
​필수 키워드 본문에 6번 이상 언급 (필수 키워드: 강아지 귀세정제 추천)
최근 제품이 리뉴얼됐다는 점 언급 필수 (용량 100ml > 120ml)
썸네일은 제품+강아지 함께 나와있는 이미지
필수 해시태그 삽입

(인스타 필수미션)
@dengdeng_view, @official_laminarof 태그
사진 5장이상, 사용 동영상 1개 필수
썸네일은 제품+강아지 함께 나와있는 이미지
아래내용 포함된 게시글작성
-강아지 고양이 모두 함께 사용하는 귀세정제 제품
-식물유래성분 99%로 순한 저자극 귀세정제
-라미나로프만의 항균, 항염, 항산화 효과 특허원료 사용
- 완판 후, 리뉴얼하여 용량 up&항균 성분 추가 완료`,
    company: "라미나로프",
  },
  {
    id: "bNXPOs3xQMzS7ODv94T4",
    name: "펫사랑 영양제",
    product: `펫사랑 프리미엄 초유(선택) + 프로바이오틱스(선택) +글루코사민(선택) + 루테인아스타잔틴(선택) 영양제`,
    targetCnt: 15,
    createdAt: "2024-02-05",
    startDate: "2024-02-05",
    endDate: "2024-02-14",
    openDate: "2024-02-15",
    images: ["70.png", "71.png", "72.png", "73.png", "74.png"],
    keywords: [
      "강아지영양제",
      "고양이영양제",
      "반려동물영양제",
      "펫사랑",
      "댕댕뷰",
      "강아지유산균",
      "고양이유산균",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그 필수미션)
제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
동영상 1개 이상 (섭취 영상)
사진 15장 이상 필수
멘트 1,500자~2,000자 (자유롭게 느낀 점을 기재)
제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타 필수미션)
@dengdeng_view, @petsarang21c 태그
사진 5장이상, 섭취 동영상 1개 필수
추후 가이드라인에 필수미션 공지`,
    company: "펫사랑",
  },
  {
    id: "Jk1eYUufAqQjP5QMcoCL",
    name: "잠보아 굿바이 티어스테인",
    product: `잠보아 굿바이 티어스테인 180g`,
    targetCnt: 10,
    createdAt: "2024-02-08",
    startDate: "2024-02-08",
    endDate: "2024-02-18",
    openDate: "2024-02-19",
    images: ["75.png", "76.png", "77.png", "78.png", "79.png", "80.png"],
    keywords: [
      "강아지영양제",
      "강아지백내장영양제",
      "강아지눈영양제",
      "잠보아",
      "댕댕뷰",
      "고양이영양제",
      "고양이눈영양제",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그 필수미션)
제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
동영상 1개 이상 (섭취 영상)
반려동물(강아지 또는 고양이)과 제품이 함께 나오도록 촬영, 실제 급여 사진 및 움짤 (이미지 15개 이상)
멘트 1,500자~2,000자 (자유롭게 느낀 점을 기재)
제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현
​반려동물 소개(이름, 견종, 나이 등), 눈 상태 (백내장 유무, 걱정 등)에 대해 설명하면서 자연스럽게 제품 리뷰 진행, 상세페이지 참고한 후 제품의 특장점에 대해 언급(자신만의 스타일로 설명)

(인스타 필수미션)
@dengdeng_view, @zamboakr 태그
사진 5장이상, 급여 동영상 1개 , 제품 제형 동영상 1개 필수
반려동물 소개(이름, 견종, 나이 등), 눈 상태 (백내장 유무, 걱정 등)에 대해 설명하면서 자연스럽게 제품 리뷰 진행, 상세페이지 참고한 후 제품의 특장점에 대해 언급(자신만의 스타일로 설명)`,
    company: "잠보아",
  },
  {
    id: "chMk1h2aWFaGK7a6AUv4",
    name: "펫캣 슈퍼 프리미엄 벤토나이트 고양이모래",
    product: `펫캣 슈퍼 프리미엄 벤토나이트 고양이모래`,
    targetCnt: 10,
    createdAt: "2024-02-14",
    startDate: "2024-02-14",
    endDate: "2024-02-22",
    openDate: "2024-02-23",
    images: ["81.png", "82.png", "83.png", "84.png", "85.png", "86.png"],
    keywords: [
      "고양이모래",
      "먼지없는모래",
      "벤토나이트모래",
      "펫캣",
      "댕댕뷰",
      "응고력좋은모래",
      "기호성좋은모래",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `(블로그 필수미션)
제품을 통해 직접 촬영한 사진과 경험을 바탕으로 한 원고
동영상 1개 이상 (사용 영상)
반려동물(강아지 또는 고양이)과 제품이 함께 나오도록 촬영, 실제 사용 사진 및 움짤 (이미지 15개 이상)
멘트 1,500자~2,000자 (자유롭게 느낀 점을 기재)
제공받으신 제품과 업체에 대한 설명과 소감을 긍정적으로 표현

(인스타 필수미션)
@dengdeng_view, @petcat_official 태그
사진 5장이상, 사용 동영상 1개 (고양이가 모래 위에 있는 장면, 모래놀이 하는 장면, 감자 만드는 장면 필수 포함)

아래내용 포함된 게시글 작성
- 100% 와이오밍주 1등급 벤토나이트
- 품질을 위해 한 달에 1,665개만 생산
- 안전 인증으로 안심하고 사용 가능
​`,
    company: "펫캣",
  },
  {
    id: "hInsHDy8mCSzUnErmH89",
    name: "쏨달펫 롱 져키 강아지육포 간식",
    product: `쏨달펫 롱 져기 강아지 육포 간식
소고기 or 황태 (택1)`,
    targetCnt: 14,
    createdAt: "2024-02-20",
    startDate: "2024-02-20",
    endDate: "2024-03-03",
    openDate: "2024-03-04",
    images: ["87.png", "88.png", "89.png", "90.png", "91.png", "92.png"],
    keywords: [
      "강아지체험단",
      "고양이체험단",
      "강아지이벤트",
      "고양이이벤트",
      "체험단",
      "강아지간식",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `<체험단 신청방법>
🐶체험단 모집 페이지를 카페,블로그,SNS 등에 공유 해주세요
🐶게시글 하단 체험단 신청서 작성 클릭
🐶체험단 신청서 작성후 공유한 URL OR 체험단 신청 이유 기대평을 댓글로 남겨주세요.

체험단 당첨 후 원고 작성 가이드라인
-당첨자 개인 카톡 으로 상세 가이드라인 전달 (카톡은 댕댕뷰 공식 카카오 계정으로 연락드립니다.)
​`,
    company: "펫캣",
  },
  {
    id: "pgoLJLkD528bvrYNn6tx",
    name: "로렌츠 못난이 당근껌",
    product: `​- 로렌츠 못난이 당근껌은, 당근이 콕콕 박힌 원물 간식으로
고기 없이 맛있는 채소껌이에요!
- 방부제, 글리세린, 타피오카 없이 만들어 건강하고
루테인이 함유되어 있어서 눈 건강에 좋아요!👀
- 치석 제거 및 구취 감소에 도움이 되기 때문에
평소 덴탈 케어해주고 싶으셨다면!
놓치지 말고 꼭 데려가세요🛒`,
    targetCnt: 21,
    createdAt: "2024-02-27",
    startDate: "2024-02-27",
    endDate: "2024-03-07",
    openDate: "2024-03-08",
    images: [
      "123.png",
      "124.png",
      "125.png",
      "126.png",
      "127.png",
      "128.png",
      "129.png",
      "130.png",
      "131.png",
      "132.png",
    ],
    keywords: [
      "강아지체험단",
      "고양이체험단",
      "강아지이벤트",
      "고양이이벤트",
      "체험단",
      "강아지간식",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `🐶모집인원 : 20명 인스타10명,블로그10명
(인스타 릴스 가능 하신분만 신청)
인스타는 내가!! 릴스로 업체 제품을 끝장나게 잘 표현할수있다! 하시는분 환영합니다!

<체험단 신청방법>
🐶체험단 모집 페이지를 카페,블로그,SNS 등에 공유 해주세요
🐶게시글 하단 체험단 신청서 작성 클릭
🐶체험단 신청서 작성후 공유한 URL OR 체험단 신청 이유 기대평을 댓글로 남겨주세요.

체험단 당첨 후 원고 작성 가이드라인
-당첨자 개인 카톡 으로 상세 가이드라인 전달 (카톡은 댕댕뷰 공식 카카오 계정으로 연락드립니다.)
​`,
    company: "로렌츠",
  },
  {
    id: "RrqR7DC34cvkUuPz6iqa",
    name: "이프애니멀 한방영양제",
    product: `- 이프애니멀 한방 영양제인 튼튼육첩의 원료를 넣은 프리미엄 건강 비건 간식
- 육류나 화학 첨가물이 전혀 들어있지 않은 약재와 과채로만 만든 간식
면역력 강화, 활력 충전에 도움이 되는 영양 간식
- 담아츄 - 힘 or 담아츄 - 눈물 (선택)`,
    targetCnt: 11,
    createdAt: "2024-02-29",
    startDate: "2024-02-29",
    endDate: "2024-03-10",
    openDate: "2024-03-11",
    images: [
      "93.png",
      "94.png",
      "95.png",
      "96.png",
      "97.png",
      "98.png",
      "99.png",
      "100.png",
      "101.png",
      "102.png",
    ],
    keywords: [
      "강아지체험단",
      "고양이체험단",
      "강아지이벤트",
      "고양이이벤트",
      "체험단",
      "강아지간식",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `<체험단 신청방법>
🐶체험단 모집 페이지를 카페,블로그,SNS 등에 공유 해주세요
🐶게시글 하단 체험단 신청서 작성 클릭
🐶체험단 신청서 작성후 공유한 URL OR 체험단 신청 이유 기대평을 댓글로 남겨주세요.

체험단 당첨 후 원고 작성 가이드라인
-당첨자 개인 카톡 으로 상세 가이드라인 전달 (카톡은 댕댕뷰 공식 카카오 계정으로 연락드립니다.)
​`,
    company: "이프애니멀",
  },
  {
    id: "rEy3ayXMHzyVudO5JpCZ",
    name: "멍멍아띠 유산균 영양제",
    product: `- 이프애니멀 한방 영양제인 튼튼육첩의 원료를 넣은 프리미엄 건강 비건 간식
- 육류나 화학 첨가물이 전혀 들어있지 않은 약재와 과채로만 만든 간식
면역력 강화, 활력 충전에 도움이 되는 영양 간식
- 담아츄 - 힘 or 담아츄 - 눈물 (선택)`,
    targetCnt: 10,
    createdAt: "2024-03-14",
    startDate: "2024-03-14",
    endDate: "2024-03-21",
    openDate: "2024-03-12",
    images: [
      "103.png",
      "104.png",
      "105.png",
      "106.png",
      "107.png",
      "108.png",
      "109.png",
      "110.png",
      "111.png",
      "112.png",
    ],
    keywords: [
      "강아지영양제",
      "고양이영양제",
      "강아지유산균",
      "멍멍아띠",
      "유산균영양제",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `<체험단 신청방법>
🐶체험단 모집 페이지를 카페,블로그,SNS 등에 공유 해주세요
🐶게시글 하단 체험단 신청서 작성 클릭
🐶체험단 신청서 작성후 공유한 URL OR 체험단 신청 이유 기대평을 댓글로 남겨주세요.

체험단 당첨 후 원고 작성 가이드라인
-당첨자 개인 카톡 으로 상세 가이드라인 전달 (카톡은 댕댕뷰 공식 카카오 계정으로 연락드립니다.)
​`,
    company: "멍멍아띠",
  },
  {
    id: "76Hnswc7BUuNJurM9rJ3",
    name: "펫루션 유산균 영양제",
    product: `- 팔라티노스,이소말트,무수결정포도당 등등 불필요한 당대체재 NO ZERO슈가
 - 1일 300억 고함량 유산균
 - 국내산 단호박을 사용해 기호성 만랩`,
    targetCnt: 10,
    createdAt: "2024-03-26",
    startDate: "2024-03-26",
    endDate: "2024-04-09",
    openDate: "2024-04-10",
    images: [
      "113.png",
      "114.png",
      "115.png",
      "116.png",
      "117.png",
      "118.png",
      "119.png",
      "120.png",
      "121.png",
      "122.png",
    ],
    keywords: [
      "강아지영양제",
      "고양이영양제",
      "강아지유산균",
      "멍멍아띠",
      "유산균영양제",
    ],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `<체험단 신청방법>
🐶체험단 모집 페이지를 카페,블로그,SNS 등에 공유 해주세요
🐶게시글 하단 체험단 신청서 작성 클릭
🐶체험단 신청서 작성후 공유한 URL OR 체험단 신청 이유 기대평을 댓글로 남겨주세요.

체험단 당첨 후 원고 작성 가이드라인
-당첨자 개인 카톡 으로 상세 가이드라인 전달 (카톡은 댕댕뷰 공식 카카오 계정으로 연락드립니다.)
​`,
    company: "펫루션",
  },
  {
    id: "4x5k3cSwuxLJwW59u8c1",
    name: "우리가제약 펫튼 종합 영양제",
    product: `- 국내 유일한 전문 제조업체
- 국내 최초 및 유일 반려동물 영양제 특허 2종 등록
- 국내 최초 및 유일 반려견 영양제 전임상시험 완료
- 국내 최초 반려견 영양제 KSCI 논문 발표
- 반려동물 전문영양제 벤쳐기업 1호
- 강아지 고양이 모두 급여가능`,
    targetCnt: 10,
    createdAt: "2024-04-02",
    startDate: "2024-04-02",
    endDate: "2024-04-16",
    openDate: "2024-04-17",
    images: [
      "133.png",
      "134.png",
      "135.png",
      "136.png",
      "137.png",
      "138.png",
      "139.png",
      "140.png",
      "141.png",
      "142.png",
    ],
    keywords: ["강아지영양제", "고양이영양제", "우리가제약"],
    mozip: ["0", "1", "2", "3"],
    type: "배송",
    views: {
      "2024-06-01": 20,
      "2024-06-02": 10,
      "2024-06-03": 5,
      "2024-06-04": 10,
      "2024-06-05": 20,
      "2024-06-06": 10,
      "2024-06-07": 5,
      "2024-06-08": 0,
      "2024-06-09": 10,
      "2024-06-10": 30,
      "2024-06-11": 20,
      "2024-06-12": 10,
      "2024-06-13": 5,
      "2024-06-14": 10,
      "2024-06-15": 20,
      "2024-06-16": 10,
      "2024-06-17": 5,
    },
    totalviews: 200,
    mission_description: `<체험단 신청방법>
🐶체험단 모집 페이지를 카페,블로그,SNS 등에 공유 해주세요
🐶게시글 하단 체험단 신청서 작성 클릭
🐶체험단 신청서 작성후 공유한 URL OR 체험단 신청 이유 기대평을 댓글로 남겨주세요.

체험단 당첨 후 원고 작성 가이드라인
-당첨자 개인 카톡 으로 상세 가이드라인 전달 (카톡은 댕댕뷰 공식 카카오 계정으로 연락드립니다.)
​`,
    company: "우리가제약",
  },
];

const dummyTesters = [
  {
    id: "01H3xv60DSdaedxnK6cc",
    cid: "siBLALrjCLTC8PvgPalq",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
    mozip_type: "naver",
    uid: "MX69Do2ESTVpgp18XplEzvKTBCe2",
    step: 0,
  },
  {
    id: "0GIRAms8H8ZjlCTSAWdv",
    cid: "siBLALrjCLTC8PvgPalq",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
    mozip_type: "naver",
    uid: "ri1oT6BwBqhSPuPTIOnWcD54xIy1",
    step: 1,
  },
  {
    id: "0HRl1fUgghvTg4hbUlSC",
    cid: "siBLALrjCLTC8PvgPalq",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
    mozip_type: "naver",
    uid: "03zVfZUwtvRjXyUSEh5Be6uv04o2",
    step: 2,
  },
  {
    id: "0S51rh77N1sBy56EDhBP",
    cid: "siBLALrjCLTC8PvgPalq",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
    mozip_type: "naver",
    uid: "ahk9HDrMbqXYkmH8OQjlv4GKwjL2",
    step: 3,
  },
  {
    id: "0TiKc8kZWmJwJ6t8tflo",
    cid: "siBLALrjCLTC8PvgPalq",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
    mozip_type: "naver",
    uid: "nKZx8pDeegYphW7jpMTAGo4h9E32",
    step: 2,
  },
  {
    id: "0dq5ZCkmmjmAr51fm2Br",
    cid: "siBLALrjCLTC8PvgPalq",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
    mozip_type: "naver",
    uid: "SGdJKY6g9zeyEN9F3BrVdiXnhsB2",
    step: 0,
  },
  {
    id: "0qijuAJDdzfEpZREBLMy",
    cid: "siBLALrjCLTC8PvgPalq",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
    mozip_type: "naver",
    uid: "ZsRmT7gbEmQDtF4EGclyFnGwEhw1",
    step: 1,
  },
  {
    id: "0rhAMbFf6o5heu7kq47Y",
    cid: "siBLALrjCLTC8PvgPalq",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
    mozip_type: "naver",
    uid: "f1mAsPMzfzfBjuXZzHUhOtO0J9Q2",
    step: 0,
  },
  {
    id: "0tcc6f96vFgD69axJqhl",
    cid: "siBLALrjCLTC8PvgPalq",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
    mozip_type: "naver",
    uid: "1ERoR2K6UWNWaylLFoQzyihbTOr2",
    step: 1,
  },
  {
    id: "0ze7OPNBXiPv32aiT5Vo",
    cid: "siBLALrjCLTC8PvgPalq",
    createdAt: new Date("2024-06-01T16:00:00.000Z"),
    mozip_type: "naver",
    uid: "JCjTi0WqhsMZiFxiw0slyozZcx02",
    step: 1,
  },
];

module.exports = { dummyUsers, dummyCampains, dummyTesters };
