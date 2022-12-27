# ejs 공부 
- ejs란 템플릿 엔진 중 하나이며, Embedded Javascript의 약자이다. 
- 자바스크립트가 내장된 HTML 파일이라고 할 수 있겠다.    
- 템플릿 엔진이란 만들어놓은 템플릿이 있고, 템플릿에 꽂아넣을 데이터를 템플릿 엔진이 이 둘을 합쳐 결과 페이지를 생성한다.  

# 템플릿 엔진이란
템플릿 양식과 특정 데이터 모델에 따른 입력 자료를 합성하여 결과 문서를 출력하는 소프트웨어(또는 소프트웨어 컴포넌트)를 말한다.

- Template : 공통적인 프레임을 미리 제작한 것

- 웹 템플릿 엔진(Web Template Enging)이란? 웹 문서가 출력되는 템플릿 엔진을 말한다.
- 즉, 웹 템플릿 엔진은  웹 템플릿들(Web Templates)과 웹 컨텐츠 정보(Content Information)를 처리하기 위해 설계된 소프트웨어이다.

- 또한 웹 템플릿 엔진은 View Code(Html)와 Data Logic Code(Db Connection)를 분리해주는 기능을 한다.

```javascript
npm install ejs

// <% %> 이 태그는 자바스크립트를 실행할 수 있다.
// <%= %> 이 태그는 변수 값을 내장시킬 수 있다.
<html>
  <head>
  <title><%= title %></title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    <h1>Loop it!</h1>
    <ul>
        <% for(var i=0; i<length; i++){ %>
            <li>
                <%= "LOOP" + i %>
            </li>
        <% } %>
    </ul>
  </body>
</html>

```

- jsx를 사용해본 경험이 있다면 더 쉽게 이해가 갈것이다. 모듈을 불러오는 방법과 같다.

# ejs 인클루드 하는 법
- 절대 경로여야 하거나 그렇지 않은 경우 포함 호출이 있는 템플릿에 상대적인 것으로 간주된다.  
- 예를 들어 ./views/users.ejs에서 ./views/user/show.ejs를 포함하는 경우 <%-include('user/show') %>를 사용한다.  
- HTML 출력을 이중 이스케이프 처리하지 않으려면 include와 함께 원시 출력 태그(<%-)를 사용하는 것이 좋습니다.  

```javascript
<html>
    <%-include('head.ejs')%>
    <body>
        <h2><%=title %></h2>
        
        <%-include('footer.ejs')%>
    </body>
</html>
```
관련 URL : https://ejs.co/