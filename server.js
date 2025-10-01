// es-module -> import , commonjs -> require
const express = require("express"); //express 안에 구현되어있는 코드들을 express 객체 형태로 불러옴
const cors = require("cors"); //설치한 의존성 패키지 cors 불러오기
const dotenv = requir("dotenv");
const { createCliend } = require("@supabase/supabase-js"); //구조분해할당

dotenv.config(); // .env의 KEY를 퍼올 수 있게함
//NODE -> process.env (환경변수) cf. env file

const { SUPABASE_KEY: supabaseKey, SUPABASE_URL: supabaseUrl } = process.env;
console.log("supabaseKey", supabaseKey); // 확인 (npm run dev)
console.log("supabaseUrl", supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express(); // () -> 호출해서 사용하겠다
// 포트 -> 컴퓨터 서비스가 1개만 있는게 아님 ex_ email, db, server1, server2....
// 1번 ~ 2xxxx번 => 번호를 통한 통신
const port = 3000; //cra. next -> express. / 5173.
//localhost -> 3000 <-> 5500 구분

// CORS 해결을 위한 미들웨어 적용
app.use(cors()); //모든 출처에 대한 허용(보안적으로 바람직하지 않음)

//get,post
// app.방식(접속경로, 핸들러)
//localhost:3000/
app.get("/", (req, res) => {
  //req -> request -> 전달 받은 데이터나 요청사항
  //res -> response -> 응답할 내용/방식을 담은 객체
  res.send("bye");
});

//DOM listener  / server '대기' -> 요청 -> 응답
app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행중입니다.`);
});
