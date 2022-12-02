"use strict";(self.webpackChunkAngweb3=self.webpackChunkAngweb3||[]).push([[755],{755:(m,r,n)=>{n.r(r),n.d(r,{DashboardModule:()=>Z});var i=n(6895),s=n(9965),u=n(7127),g=n(9834),e=n(1571),c=n(3235);const h=[{path:"",component:u.F,children:[{path:"",component:(()=>{class t{constructor(o,l){this.configService=o,this.GlobalAlertService=l,this.code1="export class GreeterService {\n\n    greeterContract: any\n\n    constructor(public provider: DefaultProviderService, private wallet: WalletProviderService, private http: HttpClient) {\n        this.greeterContract = new ethers.Contract(\n            wallet.currentConfig.contracts.Greeter,\n            Greeter.abi,\n            provider.provider\n        );\n    }\n\n\n\n    async greet() {\n        let greet = await this.greeterContract.greet();\n        return greet;\n    }\n    async setGreeting(greeting: string) {\n        let greet = this.greeterContract.connect(this.wallet.signer).setGreeting(greeting)\n            .then(() =&gt; { })\n            .catch((err) =&gt; {\n                if (err.code == 4001) {\n\n                    console.error(&quot;error&quot;, ProviderErrors[err.code].title);\n                }\n            });\n\n\n        return greet;\n    }\n}",this.code2=""}ngOnInit(){this.config=this.configService.config}dene(){this.GlobalAlertService.connect(),console.log("dene")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.E),e.Y36(g.t))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],features:[e._Bn([])],decls:103,vars:0,consts:[["id","angular-web3-starter"],["src","https://sade-c.github.io/Angular-web3-starter/assets/angweb3.png","width","800","title","angular web3","alt","angular web3"],["id","template"],["id","usage"],["href","https://github.com/sade-c/Angular-web3-starter","target","_blank"],["id","dependencies"],["id","installation"]],template:function(o,l){1&o&&(e.TgZ(0,"h1",0),e._uU(1,"Angular-web3-starter"),e.qZA(),e.TgZ(2,"p"),e._UZ(3,"img",1),e.qZA(),e.TgZ(4,"p"),e._uU(5," Basic operations for those who want to develop web3 on Angular."),e.qZA(),e.TgZ(6,"h2",2),e._uU(7,"Template"),e.qZA(),e.TgZ(8,"p"),e._uU(9,"Free Angular Admin Template by PrimeNG www.primefaces.org/sakai-ng"),e.qZA(),e.TgZ(10,"h2",3),e._uU(11,"Usage"),e.qZA(),e.TgZ(12,"p"),e._uU(13,"The following is a basic example of how to use the Angular-web3-starter."),e.qZA(),e.TgZ(14,"p"),e._uU(15,"The "),e.TgZ(16,"code"),e._uU(17,"src/app/app.module.ts"),e.qZA(),e._uU(18," file contains the main Angular module and the "),e.TgZ(19,"code"),e._uU(20,"src/app/app.component.ts"),e.qZA(),e._uU(21," file contains the main component.\n"),e.qZA(),e.TgZ(22,"p"),e._uU(23,"The "),e.TgZ(24,"code"),e._uU(25,"src/app/app.component.html"),e.qZA(),e._uU(26," file contains the HTML template for the main component."),e.qZA(),e.TgZ(27,"p"),e._uU(28,"The "),e.TgZ(29,"code"),e._uU(30,"src/app/app.component.css"),e.qZA(),e._uU(31," file contains the CSS styles for the main component."),e.qZA(),e.TgZ(32,"p"),e._uU(33,"The "),e.TgZ(34,"code"),e._uU(35,"src/app/app.component.ts"),e.qZA(),e._uU(36," file contains the Angular component class."),e.qZA(),e.TgZ(37,"p"),e._uU(38,"The "),e.TgZ(39,"code"),e._uU(40,"src/app/app.component.html"),e.qZA(),e._uU(41," file contains the Angular component HTML template."),e.qZA(),e.TgZ(42,"h2")(43,"a",4),e._uU(44,"github link:"),e.qZA()(),e.TgZ(45,"h2",5),e._uU(46,"Dependencies"),e.qZA(),e.TgZ(47,"p"),e._uU(48,"The following is a list of dependencies for the Angular-web3-starter."),e.qZA(),e.TgZ(49,"ul")(50,"li"),e._uU(51,"Angular"),e.qZA(),e.TgZ(52,"li"),e._uU(53,"Angular CLI"),e.qZA(),e.TgZ(54,"li"),e._uU(55,"Angular Material"),e.qZA(),e.TgZ(56,"li"),e._uU(57,"Angular Web3"),e.qZA(),e.TgZ(58,"li"),e._uU(59,"Angular-web3-starter"),e.qZA(),e.TgZ(60,"li"),e._uU(61,"PrimeNG"),e.qZA(),e.TgZ(62,"li"),e._uU(63,"Sakai-ng"),e.qZA()(),e.TgZ(64,"h2",6),e._uU(65,"Installation"),e.qZA(),e.TgZ(66,"p"),e._uU(67,"The following is a basic example of how to install the Angular-web3-starter."),e.qZA(),e.TgZ(68,"p"),e._uU(69,"The "),e.TgZ(70,"code"),e._uU(71,"npm install"),e.qZA(),e._uU(72," command is used to install the Angular-web3-starter."),e.qZA(),e.TgZ(73,"p"),e._uU(74,"The "),e.TgZ(75,"code"),e._uU(76,"npm run build"),e.qZA(),e._uU(77," command is used to build the Angular-web3-starter."),e.qZA(),e.TgZ(78,"p"),e._uU(79,"The "),e.TgZ(80,"code"),e._uU(81,"npm run serve"),e.qZA(),e._uU(82," command is used to serve the Angular-web3-starter."),e.qZA(),e.TgZ(83,"p"),e._uU(84,"The "),e.TgZ(85,"code"),e._uU(86,"npm run watch "),e.qZA(),e._uU(87," command is used to watch the Angular-web3-starter."),e.qZA(),e.TgZ(88,"p"),e._uU(89,"The "),e.TgZ(90,"code"),e._uU(91,"npm run test"),e.qZA(),e._uU(92," command is used to test the Angular-web3-starter."),e.qZA(),e.TgZ(93,"p"),e._uU(94,"The "),e.TgZ(95,"code"),e._uU(96,"npm run build.polygon "),e.qZA(),e._uU(97," command is used to polygon environment Usage"),e.qZA(),e.TgZ(98,"p"),e._uU(99,"The "),e.TgZ(100,"code"),e._uU(101,"npm run build.avalanche "),e.qZA(),e._uU(102," command is used to avalanche environment Usage"),e.qZA())},encapsulation:2}),t})()}]},{path:"login",loadChildren:()=>n.e(418).then(n.bind(n,4418)).then(t=>t.LoginModule)},{path:"error",loadChildren:()=>n.e(946).then(n.bind(n,3946)).then(t=>t.ErrorModule)},{path:"notfound",loadChildren:()=>n.e(864).then(n.bind(n,2864)).then(t=>t.NotfoundModule)},{path:"access",loadChildren:()=>n.e(261).then(n.bind(n,261)).then(t=>t.AccessModule)},{path:"greet",loadChildren:()=>n.e(689).then(n.bind(n,6689)).then(t=>t.GreeterModule)}];let p=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(h),s.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,p]}),t})()}}]);