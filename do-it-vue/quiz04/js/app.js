const Body = { template: `<div>This is body</div>` };
const Header = { template: `<div>This is header</div>` };
const Footer = { template: `<div>This is footer</div>` };
const LoginBody = { template: `<div>This is LoginBody</div>` };
const LoginHeader = { template: `<div>This is LoginHeader</div>` };
const LoginFooter = { template: `<div>This is LoginFooter</div>` };

const router = new VueRouter({
  routes: [
    {
      path: "/",
      components: {
        default: Body,
        header: Header,
        footer: Footer,
      },
    },
    // /login URL 추가하고 LoginHeader, LoginBody, LoginFooter 컴포넌트 추가
    {
      path: "/login",
      components: {
        default: LoginBody,
        header: LoginHeader,
        footer: LoginFooter,
      },
    },
  ],
});

const app = new Vue({
  router,
}).$mount("#app");
