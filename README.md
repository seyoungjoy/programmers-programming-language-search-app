# Programmers-programming-language-search-app
> vanilla js로 spa 구현해보기.

## fetch API
- http 통신을 할 수 있게 해주는 api
```jsx
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res=>res.json())
    .then(data=> console.log(data))
```
```jsx
fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        title:"Test",
        body:"test",
        userId:1,
    }),
})
    .then(res=>res.json())
    .then(data=> console.log(data))
```

## JSON과 OBJECT 차이
- 클라이언트와 서버가 주고 받는 데이터는 JSON이다.
- `JSON.parse()` : JSON -> JS Object로 파싱
- `JSON.stringfy()` : JS Object -> JSON으로 파싱
- JSON 은 모든 키와 값을 따옴표로 묶어야한다.
- JSON의 type 형태는 string

## 구조 분해 할당
