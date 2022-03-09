// 1.
// sibling-component를 이름으로 하는 새로운 컴포넌트 아래에 등록
// options:template, props
Vue.component("sibling-component", {
  props: ["propsdata"],
  template: "<p>{{propsdata}}</p>",
});

Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{propsdata}}</p>",
});

const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    // 2.
    // data속성 1개 더 지정(anotherMessage), 임의의 문자열 값으로 대입.
    // 새로 지정한 data속성은 위 sibling-component에 props로 전달.
    anotherMessage: "어나더레벨 얍얍얍",
  },
});
