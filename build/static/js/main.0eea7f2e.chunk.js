(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{133:function(e,t,a){e.exports=a(248)},229:function(e,t,a){},234:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);a(134),a(160),a(162),a(163),a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(172),a(174),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(192),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(202);var n=a(0),l=a.n(n),r=a(121),c=a.n(r),s=a(31),i=a.n(s),o=a(43),m=a(44),u=a(64),p=a(46),d=a(45),E=a(87),h=a.n(E),v=a(130),b=a.n(v),f=a(131),g=a.n(f),y=a(132),N=a.n(y),k=a(67),x=a.n(k),S=(a(210),a(122)),C=a.n(S),D=a(52),M=a.n(D),O=a(38),j=a.n(O),_=a(53),w=a.n(_),P=a(51),T=a.n(P),A=a(65),W=a.n(A),I=a(88),K=a.n(I),V=a(123),F=a.n(V),U=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={startYears:e.dataset?e.dataset[0]:"",dateNotDrink:e.dataset?e.dataset[1]:(new Date).toISOString().split("T")[0],liters9percent:e.dataset?e.dataset[2]:"",liters20percent:e.dataset?e.dataset[3]:"",liters35percent:e.dataset?e.dataset[4]:"",cost9percent:e.dataset?e.dataset[5]:"",cost20percent:e.dataset?e.dataset[6]:"",cost35percent:e.dataset?e.dataset[7]:""},n}return Object(m.a)(a,[{key:"onClick",value:function(e){var t=this;i.a.send("VKWebAppStorageSet",{key:"info",value:"".concat(this.state.startYears,",").concat(this.state.dateNotDrink,",").concat(this.state.liters9percent,",").concat(this.state.liters20percent,",").concat(this.state.liters35percent,",").concat(this.state.cost9percent,",").concat(this.state.cost20percent,",").concat(this.state.cost35percent)}).then((function(){return t.props.go("main")}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.go,r=this.state,c=r.startYears,s=r.dateNotDrink,i=r.liters9percent,o=r.liters20percent,m=r.liters35percent,u=r.cost9percent,p=r.cost20percent,d=r.cost35percent;return l.a.createElement(M.a,{id:a},l.a.createElement(w.a,{addon:l.a.createElement(T.a,{onClick:function(e){return n("main")}},"\u041d\u0430\u0437\u0430\u0434"),left:l.a.createElement(W.a,{onClick:function(e){return n("main")}})},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),l.a.createElement(F.a,null,l.a.createElement(j.a,{top:"\u0412\u043e \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u0435\u0442 \u043d\u0430\u0447\u0430\u043b\u0438 \u043f\u0438\u0442\u044c?",type:"number",value:c,onChange:function(t){var a=t.target;return e.setState({startYears:a.value})}}),l.a.createElement(j.a,{top:"\u0421 \u043a\u0430\u043a\u043e\u0433\u043e \u0434\u043d\u044f \u043d\u0435 \u043f\u044c\u0435\u0442\u0435?",type:"date",value:s,onChange:function(t){var a=t.target,n=(new Date).toISOString().split("T")[0];console.log(a.value,n),n<a.value?e.setState({dateNotDrink:n}):e.setState({dateNotDrink:a.value})}}),l.a.createElement(j.a,{top:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0432 \u043d\u0435\u0434\u0435\u043b\u044e \u0432\u044b\u043f\u0438\u0432\u0430\u0435\u0442\u0435 \u043f\u0438\u0432\u043d\u044b\u0445 \u043d\u0430\u043f\u0438\u0442\u043a\u043e\u0432 \u0434\u043e 9%-\u0430\u043b\u043a \u0432 \u043b\u0438\u0442\u0440\u0430\u0445?",type:"number",value:i,onChange:function(t){var a=t.target;return e.setState({liters9percent:a.value})}}),l.a.createElement(j.a,{top:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0432 \u043d\u0435\u0434\u0435\u043b\u044e \u0432\u044b\u043f\u0438\u0432\u0430\u0435\u0442\u0435 \u0432\u0438\u043d\u043d\u044b\u0445 \u043d\u0430\u043f\u0438\u0442\u043a\u043e\u0432 \u0438 \u043b\u0438\u043a\u0435\u0440\u043e\u0432 \u0434\u043e 20%-\u0430\u043b\u043a \u0432 \u043b\u0438\u0442\u0440\u0430\u0445?",type:"number",value:o,onChange:function(t){var a=t.target;return e.setState({liters20percent:a.value})}}),l.a.createElement(j.a,{top:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0432 \u043d\u0435\u0434\u0435\u043b\u044e \u0432\u044b\u043f\u0438\u0432\u0430\u0435\u0442\u0435 \u043a\u0440\u0435\u043f\u043a\u043e\u0433\u043e \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f \u0431\u043e\u043b\u0435\u0435 35%-\u0430\u043b\u043a \u0432 \u043b\u0438\u0442\u0440\u0430\u0445?",type:"number",value:m,onChange:function(t){var a=t.target;return e.setState({liters35percent:a.value})}}),l.a.createElement(j.a,{top:"\u041f\u0440\u0438\u043c\u0435\u0440\u043d\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c 1 \u043b\u0438\u0442\u0440\u0430 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f \u0434\u043e 9%-\u0430\u043b\u043a?",type:"number",value:u,onChange:function(t){var a=t.target;return e.setState({cost9percent:a.value})}}),l.a.createElement(j.a,{top:"\u041f\u0440\u0438\u043c\u0435\u0440\u043d\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c 1 \u043b\u0438\u0442\u0440\u0430 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f \u0434\u043e 20%-\u0430\u043b\u043a?",type:"number",value:p,onChange:function(t){var a=t.target;return e.setState({cost20percent:a.value})}}),l.a.createElement(j.a,{top:"\u041f\u0440\u0438\u043c\u0435\u0440\u043d\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c 1 \u043b\u0438\u0442\u0440\u0430 \u043a\u0440\u0435\u043f\u043a\u043e\u0433\u043e \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f?",type:"number",value:d,onChange:function(t){var a=t.target;return e.setState({cost35percent:a.value})}}),l.a.createElement(K.a,{size:"xl",onClick:this.onClick.bind(this)},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))}}]),a}(n.Component),Y=a(66),z=a.n(Y),J=a(54),B=a.n(J),G=a(129),L=a.n(G),R=a(58),q=a.n(R),H=a(124),Q=a.n(H),X=a(125),Z=a.n(X),$=a(126),ee=a.n($),te=a(127),ae=a.n(te),ne=a(128),le=a.n(ne),re=(a(229),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dataset:e.dataset},n}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){e.dataset!==this.props.dataset&&this.setState({dataset:this.props.dataset})}},{key:"postWall",value:function(e){i.a.send("VKWebAppShowStoryBox",{background_type:"none",stickers:[{sticker_type:"renderable",sticker:{can_delete:0,content_type:"image",url:"https://sun9-28.userapi.com/c853424/v853424330/22d20a/8TtkTyyJRrA.jpg",clickable_zones:[{action_type:"link",action:{link:"https://vk.com/app7420479",tooltip_text_key:"tooltip_open_default"},clickable_area:[{x:0,y:0},{x:269,y:0},{x:269,y:151},{x:0,y:151}]}]}}]})}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.go,n=e.modal,r=this.state.dataset,c=r?Math.ceil(Math.abs((new Date).getTime()-new Date(r[1]).getTime())/864e5):0,s=r?((+r[2]+ +r[3]+ +r[4])/7*c).toFixed(1):0,i=r?((+r[2]*+r[5]+ +r[3]*+r[6]+ +r[4]*+r[7])/7*c).toFixed(1):0,o=r?((.09*+r[2]+.2*+r[3]+.4*+r[4])/7*c).toFixed(1):0,m=function(e){if(e%100/10===1)return"\u0434\u043d\u0435\u0439";switch(e%10){case 1:return"\u0434\u0435\u043d\u044c";case 2:case 3:case 4:return"\u0434\u043d\u044f";default:return"\u0434\u043d\u0435\u0439"}}(c);return l.a.createElement(M.a,{id:t},l.a.createElement(w.a,null,"\u0411\u0440\u043e\u0441\u0430\u0439 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c!"),l.a.createElement(q.a,{separator:"show",style:{margin:"10px 0",position:"relative"}},l.a.createElement(z.a,null,l.a.createElement("div",{className:"stat"},l.a.createElement("div",{className:"cell"},l.a.createElement("span",{className:"name"},"\u041d\u0435 \u0432\u044b\u043f\u0438\u0442\u043e",l.a.createElement("br",null),"\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f"),l.a.createElement("span",{className:"value"},Number.isNaN(+s)?0:s),l.a.createElement("span",{className:"ext"},"\u043b.")),l.a.createElement("div",{className:"cell"},l.a.createElement("span",{className:"name"},"\u0411\u0435\u0437 \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f",l.a.createElement("br",null),"\u0443\u0436\u0435"),l.a.createElement("span",{className:"value"},Number.isNaN(+c)?0:c),l.a.createElement("span",{className:"ext"},m)),l.a.createElement("div",{className:"cell"},l.a.createElement("span",{className:"name"},"\u0421\u044d\u043a\u043e\u043d\u043e\u043c\u043b\u0435\u043d\u043e",l.a.createElement("br",null),"\u0434\u0435\u043d\u0435\u0433"),l.a.createElement("span",{className:"value"},Number.isNaN(+i)?0:i),l.a.createElement("span",{className:"ext"},"\u0440\u0443\u0431.")),l.a.createElement("div",{className:"cell"},l.a.createElement("span",{className:"name"},"\u0421\u044d\u043a\u043e\u043d\u043e\u043c\u043b\u0435\u043d\u043e",l.a.createElement("br",null),"\u0432\u0440\u0435\u043c\u0435\u043d\u0438"),l.a.createElement("span",{className:"value"},Number.isNaN(+s)?0:.5*s),l.a.createElement("span",{className:"ext"},"\u0447.")),l.a.createElement("div",{className:"cell"},l.a.createElement("span",{className:"name"},"\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e",l.a.createElement("br",null),"\u0441\u043f\u0438\u0440\u0442\u0430"),l.a.createElement("span",{className:"value"},Number.isNaN(+o)?0:o),l.a.createElement("span",{className:"ext"},"\u043b."))))),l.a.createElement(q.a,{separator:"show",style:{margin:"10px 0",position:"relative"}},l.a.createElement(L.a,null,l.a.createElement(B.a,{expandable:!0,before:l.a.createElement(ee.a,null),onClick:function(e){return a("settings")}},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),l.a.createElement(B.a,{expandable:!0,before:l.a.createElement(le.a,null),onClick:this.postWall.bind(this,c)},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u044e"),l.a.createElement(B.a,{expandable:!0,before:l.a.createElement(ae.a,null),onClick:function(e){return a("organism")}},"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u043c"),l.a.createElement(x.a,{href:"https://vk.com/club194999601",target:"_blank"},l.a.createElement(B.a,{className:"cellLink",expandable:!0,before:l.a.createElement(Z.a,null)},"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f")),l.a.createElement(B.a,{expandable:!0,before:l.a.createElement(Q.a,null),onClick:function(e){return n("modal")}},"\u041e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"))))}}]),a}(n.Component));var ce=a(26),se=a.n(ce),ie=a(27),oe=a.n(ie),me=a(25),ue=a.n(me),pe=a(20),de=a.n(pe),Ee=a(24),he=a.n(Ee),ve=(a(234),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dataset:e.dataset},n}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){e.dataset!==this.props.dataset&&this.setState({dataset:this.props.dataset})}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.go,n=this.state.dataset,r=n?Math.ceil(Math.abs((new Date).getTime()-new Date(n[1]).getTime())/864e5):0;return l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a,{id:t},l.a.createElement(w.a,{addon:l.a.createElement(T.a,{onClick:function(e){return a("main")}},"\u041d\u0430\u0437\u0430\u0434"),left:l.a.createElement(W.a,{onClick:function(e){return a("main")}})},"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u043c"),l.a.createElement(q.a,{separator:"show",style:{margin:"10px 0",position:"relative"}},l.a.createElement(z.a,null,l.a.createElement(ue.a,{multiline:!0,after:r>=1&&l.a.createElement(he.a,null)},l.a.createElement(se.a,{header:"1 \u0434\u0435\u043d\u044c"},"\u0422\u043e\u0448\u043d\u043e\u0442\u0430, \u0433\u043e\u043b\u043e\u0432\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f, \u0433\u043e\u043b\u043e\u0432\u043d\u0430\u044f \u0431\u043e\u043b\u044c, \u0442\u0440\u0435\u043c\u043e\u0440 \u0440\u0443\u043a, \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0442\u0435\u043b\u0430, \u043f\u0435\u0440\u0435\u043f\u0430\u0434\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f",l.a.createElement("br",null),r<1&&"".concat(Math.round(r/1*100),"%"),r<1&&l.a.createElement(oe.a,{className:"progress",value:r<1?r/1*100:100}))),l.a.createElement(de.a,{style:{margin:"12px 0"}}),l.a.createElement(ue.a,{multiline:!0,after:r>=2&&l.a.createElement(he.a,null)},l.a.createElement(se.a,{header:"2 \u0434\u043d\u044f"},"\u041d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0434\u0435\u0442\u043e\u043a\u0441\u0438\u043a\u0430\u0446\u0438\u0438 \u2013 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0440\u0430\u0441\u043f\u0430\u0434\u0430 \u044d\u0442\u0438\u043b\u043e\u0432\u043e\u0433\u043e \u0441\u043f\u0438\u0440\u0442\u0430",l.a.createElement("br",null),r<2&&"".concat(Math.round(r/2*100),"%"),r<2&&l.a.createElement(oe.a,{className:"progress",value:r<2?r/2*100:100}))),l.a.createElement(de.a,{style:{margin:"12px 0"}}),l.a.createElement(ue.a,{multiline:!0,after:r>=3&&l.a.createElement(he.a,null)},l.a.createElement(se.a,{header:"3 \u0434\u043d\u044f"},"\u0423\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u0430\u043c\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u044f",l.a.createElement("br",null),r<3&&"".concat(Math.round(r/3*100),"%"),r<3&&l.a.createElement(oe.a,{className:"progress",value:r<3?r/3*100:100}))),l.a.createElement(de.a,{style:{margin:"12px 0"}}),l.a.createElement(ue.a,{multiline:!0,after:r>=5&&l.a.createElement(he.a,null)},l.a.createElement(se.a,{header:"5 \u0434\u043d\u0435\u0439"},"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0430\u0431\u0441\u0442\u0438\u043d\u0435\u043d\u0442\u043d\u044b\u0439 \u0441\u0438\u043d\u0434\u0440\u043e\u043c",l.a.createElement("br",null),r<5&&"".concat(Math.round(r/5*100),"%"),r<5&&l.a.createElement(oe.a,{className:"progress",value:r<5?r/5*100:100}))),l.a.createElement(de.a,{style:{margin:"12px 0"}}),l.a.createElement(ue.a,{multiline:!0,after:r>=8&&l.a.createElement(he.a,null)},l.a.createElement(se.a,{header:"8 \u0434\u043d\u0435\u0439"},"\u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0430\u0431\u0441\u0442\u0438\u043d\u0435\u043d\u0442\u043d\u044b\u0439 \u0441\u0438\u043d\u0434\u0440\u043e\u043c, \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044f \u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435, \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u043e\u0442\u0442\u0435\u043d\u043a\u0430 \u043a\u043e\u0436\u0438, \u043d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0416\u041a\u0422",l.a.createElement("br",null),r<8&&"".concat(Math.round(r/8*100),"%"),r<8&&l.a.createElement(oe.a,{className:"progress",value:r<8?r/8*100:100}))),l.a.createElement(de.a,{style:{margin:"12px 0"}}),l.a.createElement(ue.a,{multiline:!0,after:r>=14&&l.a.createElement(he.a,null)},l.a.createElement(se.a,{header:"2 \u043d\u0435\u0434\u0435\u043b\u0438"},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u044b\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432, \u043f\u0440\u0438\u0445\u043e\u0434 \u0432 \u043d\u043e\u0440\u043c\u0443 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u0439 \u0441\u0435\u0440\u0434\u0435\u0447\u043d\u043e\u0433\u043e \u0440\u0438\u0442\u043c\u0430 \u0438 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u0438\u0441\u0447\u0435\u0437\u0430\u0435\u0442 \u043e\u0434\u044b\u0448\u043a\u0430 \u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u044b\u0445\u0430\u043d\u0438\u0435",l.a.createElement("br",null),r<14&&"".concat(Math.round(r/14*100),"%"),r<14&&l.a.createElement(oe.a,{className:"progress",value:r<14?r/14*100:100}))),l.a.createElement(de.a,{style:{margin:"12px 0"}}),l.a.createElement(ue.a,{multiline:!0,after:r>=30&&l.a.createElement(he.a,null)},l.a.createElement(se.a,{header:"1 \u043c\u0435\u0441\u044f\u0446"},"\u041f\u043e\u043b\u043d\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0440\u0430\u0441\u043f\u0430\u0434\u0430 \u044d\u0442\u0438\u043b\u043e\u0432\u043e\u0433\u043e \u0441\u043f\u0438\u0440\u0442\u0430, \u0431\u0435\u043b\u0435\u044e\u0442 \u0437\u0443\u0431\u044b",l.a.createElement("br",null),r<30&&"".concat(Math.round(r/30*100),"%"),r<30&&l.a.createElement(oe.a,{className:"progress",value:r<30?r/30*100:100}))),l.a.createElement(de.a,{style:{margin:"12px 0"}}),l.a.createElement(ue.a,{multiline:!0,after:r>=92&&l.a.createElement(he.a,null)},l.a.createElement(se.a,{header:"3 \u043c\u0435\u0441\u044f\u0446\u0430"},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u043c\u043c\u0443\u043d\u0438\u0442\u0435\u0442\u0430, \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0437\u0434\u043e\u0440\u043e\u0432 \u0438 \u044d\u043d\u0435\u0440\u0433\u0438\u0447\u0435\u043d",l.a.createElement("br",null),r<92&&"".concat(Math.round(r/92*100),"%"),r<92&&l.a.createElement(oe.a,{className:"progress",value:r<92?r/92*100:100}))),l.a.createElement(de.a,{style:{margin:"12px 0"}}),l.a.createElement(ue.a,{multiline:!0,after:r>=183&&l.a.createElement(he.a,null)},l.a.createElement(se.a,{header:"6 \u043c\u0435\u0441\u044f\u0446\u0435\u0432"},"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0440\u0430\u0432\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0447\u0435\u0440\u0442, \u0432\u043e\u0437\u0440\u043e\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043d\u0435\u0441\u0442\u0438 \u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0441\u0432\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435",l.a.createElement("br",null),r<183&&"".concat(Math.round(r/183*100),"%"),r<183&&l.a.createElement(oe.a,{className:"progress",value:r<183?r/183*100:100}))),l.a.createElement(de.a,{style:{margin:"12px 0"}}),l.a.createElement(ue.a,{multiline:!0,after:r>=365&&l.a.createElement(he.a,null)},l.a.createElement(se.a,{header:"1 \u0433\u043e\u0434"},"\u041d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0435\u0447\u0435\u043d\u0438, \u043f\u043e\u0434\u0436\u0435\u043b\u0443\u0434\u043e\u0447\u043d\u043e\u0439, \u043f\u043e\u0447\u0435\u043a, \u043d\u0435\u0440\u0432\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u043f\u0441\u0438\u0445\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f",l.a.createElement("br",null),r<365&&"".concat(Math.round(r/365*100),"%"),r<365&&l.a.createElement(oe.a,{className:"progress",value:r<365?r/365*100:100}))),l.a.createElement(de.a,{style:{margin:"12px 0"}})))))}}]),a}(n.Component)),be=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={activePanel:"main",popout:l.a.createElement(b.a,{size:"large"}),activeModal:null},n.fetchData=n.fetchData.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l)}})),this.fetchData()}},{key:"componentDidUpdate",value:function(e,t){this.state.activePanel!==t.activePanel&&this.fetchData()}},{key:"fetchData",value:function(){var e=this;i.a.send("VKWebAppStorageGet",{keys:["info"]}).then((function(t){t.keys[0].value?e.setState({popout:null,dataset:t.keys[0].value.split(",")}):e.setState({activePanel:"settings",popout:null})})).catch((function(t){console.log(t),e.setState({activePanel:"settings",popout:null})}))}},{key:"go",value:function(e){this.fetchData(),this.setState({activePanel:e})}},{key:"modal",value:function(e){this.setState({activeModal:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.popout,n=t.activePanel,r=t.dataset,c=l.a.createElement(g.a,{activeModal:this.state.activeModal,onClose:function(){return e.setState({activeModal:null})}},l.a.createElement(N.a,{id:"modal",onClose:function(){return e.setState({activeModal:null})},icon:l.a.createElement(C.a,null),header:"\u041e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438",caption:l.a.createElement("span",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f, \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0435\u0435 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044f. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0432 ",l.a.createElement(x.a,{href:"https://vk.com/club194999601",target:"_blank"},"\u0433\u0440\u0443\u043f\u043f\u0435"))}));return l.a.createElement(h.a,{activePanel:n,popout:a,modal:c},l.a.createElement(U,{id:"settings",go:this.go.bind(this),dataset:r}),l.a.createElement(re,{id:"main",go:this.go.bind(this),dataset:r,modal:this.modal.bind(this)}),l.a.createElement(ve,{id:"organism",go:this.go.bind(this),dataset:r}))}}]),a}(n.Component);i.a.send("VKWebAppInit"),c.a.render(l.a.createElement(be,null),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.0eea7f2e.chunk.js.map