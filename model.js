class User {
  constructor(
    id,
    agree,
    birthyear,
    blog,
    channel,
    createdAt,
    email,
    gender,
    influence,
    instagram,
    name,
    nickname,
    password,
    phone,
    updatedAt,
    street,
    address,
    zonecode
  ) {
    this.id = id; // uid
    this.agree = agree; // 마케팅 동의 여부
    this.birthyear = birthyear; // 출생연도
    this.blog = blog; // 네이버 블로그 아이디
    this.channel = channel; // 가입경로
    this.createdAt = createdAt; // 가입일자
    this.email = email; // 이메일
    this.gender = gender; // 성별
    this.influence = influence; // 인플루언서 id
    this.instagram = instagram; // 인스타그램 id
    this.name = name; // 이름(실명)
    this.nickname = nickname; // 닉네임
    this.password = password; // 비밀번호
    this.phone = phone; // 전화번호
    this.updatedAt = updatedAt; // 정보 수정일자
    this.street = street; // 주소
    this.address = address; // 상세주소
    this.zonecode = zonecode; // 우편번호
  }
}

module.exports = { User };
