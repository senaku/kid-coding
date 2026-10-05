## 배열
cards.map(c => c.en)              // 변환해서 새 배열
cards.filter(c => c.en !== "")    // 거르기
[...arr, newItem]                 // 끝에 추가한 새 배열

## 객체
const { ko, en } = card;          // 꺼내기 (구조 분해)
{ ...card, en: "APPLE" }          // 일부만 바꾼 새 객체

## 문자열
`${ko}(${en})`                    // 백틱, 값 끼워넣기

## 함수
const add = (a: number, b: number): number => a + b;

## 타입
type Direction = "up" | "right" | "down" | "left";
type Robot = { x: number; y: number; dir: Direction };
const program: Command[] = ["forward"];

## 환경 문제
- 빨간 줄이 안 뜨면: VS Code 폴더 신뢰(Trust) 확인
- 그래도 안 되면: Ctrl+Shift+P → TypeScript: Restart TS Server
- PROBLEMS 탭(Ctrl+Shift+M)에서 에러 목록 확인

## 핵심 원칙
- map, 스프레드는 원본을 바꾸지 않는다
- 반환 타입 명시 = "TS야 이거 검사해줘"
- 유니온 분기는 switch (빠진 경우를 TS가 잡아줌)
- TS는 타입은 잡아도 의도는 못 잡는다 → console.log로 확인

## CSS 우선순위
1. 명시도: 인라인 > #id(100) > .class(10) > 태그(1)
2. 같으면 CSS 파일에서 나중 것이 이김
- className의 순서는 영향 없음
- 충돌은 속성 단위 (background만 지고 color는 이길 수 있음)
- .chip.chip-active (공백 없음) = 둘 다 가진 요소, 명시도 20