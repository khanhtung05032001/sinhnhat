(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[592,719],{"+o5r":function(e,t,n){n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));const s=320,i=e=>e<=s},CwtX:function(e,t,n){n.r(t),n.d(t,"NUMBER_OF_INTERESTS",(function(){return R})),n.d(t,"MIN_NUM_OF_INTERESTS_FOR_BOARD",(function(){return E})),n.d(t,"BoardRelatedInterestUpsellContainer",(function(){return D}));var s=n("q1tI"),i=n("/MKj"),o=n("NwG/"),l=n("yweb"),r=n("S1na"),a=n("qpbZ"),c=n("wMN6"),d=n("2COb"),b=n("0G5S"),u=n("vtuW"),j=n("ulr2"),m=n("EC67"),p=n("snfI"),O=n("0HhX"),h=n("n6mq"),_=n("nwTc"),f=n("AGnR"),g=n("nKUr");var x=({onComplete:e,pinId:t})=>{var n,x,w;const y=Object(l.c)(),I=Object(r.a)(),S=Object(i.useSelector)(e=>e.session.locale),[v,C]=Object(s.useState)(!1),[T,M]=Object(s.useState)(!1),{isNavFooterHiddenAfterScroll:R,setHomeFlyoutText:E,setShowHomeBadge:D,setShowHomeFlyoutWithButton:N}=Object(p.b)();Object(O.b)({name:"PinInterestsResource",options:{hideFollowed:!0,limit:1,pinId:t}});const k=Object(i.useSelector)(({session:e})=>e.isTablet),A=Object(i.useSelector)(({pins:e,topics:n})=>{var s;const i=null===(s=e[t].related_interest_ids)||void 0===s?void 0:s[0];return i&&n[i]||null}),{background_color:z,follower_count:F,id:B,images:H,is_followed:L,name:P}=A||{},U=(H||{})["400x"],W=Object(s.useRef)(),q=Object(s.useRef)(),K=Object(s.useRef)(),G=Object(i.useDispatch)(),Q=Object(m.h)();Object(s.useEffect)(()=>(A&&(Object(b.c)("lastViewedMiniRenux",Date.now()),Object(f.e)({event_type:9025,view_type:3,component:39,element:216,aux_data:{interest:P,interest_id:B,pin_id:t}}),M(!0),K.current=setTimeout(()=>{W.current||M(!1)},1e4)),()=>{T&&e(),clearTimeout(W.current),clearTimeout(q.current),clearTimeout(K.current)}),[B]);return A?Object(g.jsx)(h.f,{color:"white",padding:4,marginStart:4,marginEnd:4,onTransitionEnd:()=>{T||e(q.current?P:void 0)},rounding:6,width:k?425:"auto",dangerouslySetInlineStyle:{__style:{opacity:T?1:0,transform:T?"translate(0, -12px)":"",transition:"\n            translate 300ms ease-in-out, opacity 300ms ease-in-out\n          "}},children:Object(g.jsxs)(h.u,{alignItems:"center",justifyContent:"between",children:[Object(g.jsx)(h.bb,{onTap:()=>{Object(f.h)({view_type:3,component:39,element:216,aux_data:{interest:P,interest_id:B,pin_id:t}})},children:Object(g.jsxs)(h.u,{alignItems:"center",justifyContent:"start",children:[U?Object(g.jsx)(h.f,{flex:"none",children:Object(g.jsx)(h.D,{rounding:4,width:60,height:60,children:Object(g.jsx)(h.y,{alt:P,color:z,naturalWidth:null!==(n=U.width)&&void 0!==n?n:1,naturalHeight:null!==(x=U.height)&&void 0!==x?x:1,src:null!==(w=U.url)&&void 0!==w?w:""})})}):null,v?Object(g.jsx)(h.f,{marginStart:4,marginEnd:4,children:Object(g.jsx)(h.cb,{size:"lg",children:Object(a.b)(y._("We've updated your home feed with fresh ideas for {{ interestName }}","relatedInterests.upsell.image","Prompt users to go to home page after follow an interest"),{interestName:Object(g.jsx)(h.cb,{size:"lg",weight:"bold",inline:!0,children:Object(c.g)(P,S)},P)})})}):Object(g.jsxs)(h.f,{marginStart:4,marginEnd:4,children:[Object(g.jsx)(h.f,{marginBottom:1,children:Object(g.jsx)(h.cb,{size:"lg",weight:"bold",children:P})}),F?Object(g.jsx)(h.cb,{size:"lg",children:Object(a.b)(y.ngettext("{{followers}} follower","{{followers}} followers",F,"interest.attribution.followerCount","Count of an interest's followers"),{followers:I(S,F,{shortform:!0,shortform_maximum_fraction_digits:1})})}):null]})]})}),v?Object(g.jsx)(h.x,{accessibilityLabel:y._("Go to home page","relatedInterests.upsell.arrowIcon","Icon button on related interests banner that prompt users to go to home page"),bgColor:"red",icon:"arrow-forward",iconColor:"white",onClick:()=>{Object(d.a)(!1),E(),D(!1),N(!1),Object(f.h)({view_type:3,component:39,element:76,aux_data:{interest:P,interest_id:B,pin_id:t}}),Q.push("/")},padding:3,size:"sm"}):Object(g.jsx)(o.a,{auxData:{interest:P,interest_id:B,pin_id:t},id:B,inline:!0,size:"md",isFollowed:L,onFollow:e=>{Object(u.c)("completedMiniRenux",!0),G(Object(j.T)(!0)),G(Object(_.b)(e,"mini_renux")),R?(W.current=setTimeout(()=>{C(!0)},800),q.current=setTimeout(()=>{M(!1)},5e3)):q.current=setTimeout(()=>{M(!1)},800)},onUnfollow:e=>{Object(u.c)("completedMiniRenux",!1),G(Object(j.T)(!1)),G(Object(_.d)(e,"mini_renux")),W.current&&clearTimeout(W.current)},followEventType:601,unfollowEventType:602,viewParameter:155,viewType:3})]})}):null},w=n("CYge"),y=n("QtD7"),I=n("QAzJ"),S=n("xQAO");const v={3:"pin_id",5:"board_id"},C=({image:e,objectId:t,onComplete:n,showRelatedInterestModal:o,viewType:r})=>{var a,c,d;const u=Object(l.c)(),[j,m]=Object(s.useState)(!1),p=Object(i.useSelector)(({session:e})=>e.isTablet),O=Object(s.useRef)(),_=Object(s.useMemo)(()=>v[r]?{[v[r]]:t}:{},[t,r]);Object(s.useEffect)(()=>(Object(b.c)("lastViewedMiniRenux",Date.now()),Object(f.e)({event_type:9025,view_type:r,component:13822,aux_data:{..._}}),m(!0),O.current||(O.current=setTimeout(()=>{m(!1)},1e4)),()=>{clearTimeout(O.current)}),[_,o,r]);return Object(g.jsx)(h.f,{color:"white",padding:4,marginStart:4,marginEnd:4,onTransitionEnd:()=>{j||n()},rounding:6,width:p?425:"auto",dangerouslySetInlineStyle:{__style:{opacity:j?1:0,transform:j?"translate(0, -12px)":"",transition:"\n            translate 300ms ease-in-out, opacity 300ms ease-in-out\n          "}},children:Object(g.jsxs)(h.u,{alignItems:"center",justifyContent:"between",children:[Object(g.jsx)(h.bb,{onTap:()=>{Object(f.h)({view_type:r,component:13822,aux_data:{..._}})},children:Object(g.jsxs)(h.u,{alignItems:"center",justifyContent:"start",children:[e?Object(g.jsx)(h.f,{flex:"none",children:Object(g.jsx)(h.D,{rounding:4,width:60,height:60,children:Object(g.jsx)(h.y,{alt:u._("Image thumbnail on related interest upsell","relatedInterests.upsell.image","Alt info on thumbnail image on related interest upsell"),color:"white",naturalWidth:null!==(a=e.width)&&void 0!==a?a:1,naturalHeight:null!==(c=e.height)&&void 0!==c?c:1,src:null!==(d=e.url)&&void 0!==d?d:""})})}):null,Object(g.jsxs)(h.f,{marginStart:4,marginEnd:4,children:[Object(g.jsx)(h.f,{marginBottom:1,children:Object(g.jsx)(h.cb,{size:"sm",children:u._("Welcome back!","relatedInterests.upsell.header","Welcome header on related interests banner")})}),Object(g.jsx)(h.cb,{size:"lg",weight:"bold",children:u._("Tell us what you're into","relatedInterests.upsell.subheader","Subheader on related interests banner instructing users to select interests")})]})]})}),Object(g.jsx)(h.x,{accessibilityLabel:u._("See related interests","relatedInterests.upsell.arrowIcon","Icon button on related interests banner that opens related interests modal"),bgColor:"red",icon:"arrow-forward",iconColor:"white",onClick:()=>{m(!1),o(!1),Object(f.h)({view_type:r,component:13822,element:96,aux_data:{..._}})},padding:3,size:"sm"})]})})},T=({numOfInterests:e,onComplete:t,pinId:n,showRelatedInterestModal:s})=>{var o;const l=Object(S.b)(n),r=null==l||null===(o=l.images)||void 0===o?void 0:o["60x60"];Object(O.b)({name:"PinInterestsResource",options:{hideFollowed:!0,limit:e,pinId:n}});const a=Object(i.useSelector)(({pins:e,topics:t})=>{const s=e[n].related_interest_ids;return null==s?void 0:s.map(e=>t[e])});return(null==a?void 0:a.length)===e&&Object(g.jsx)(C,{image:r,objectId:n,onComplete:t,showRelatedInterestModal:s,viewType:3})},M=({numOfInterests:e,onComplete:t,boardId:n,showRelatedInterestModal:s})=>{const o=Object(i.useSelector)(({boards:e})=>e[n]),l=null==o?void 0:o.images["170x"][0];Object(O.b)({name:"ApiResource",options:{url:`/v3/boards/${n}/interests/`,data:{deduping_enabled:!0,hide_followed:!0,limit:e},field_sets:["interest.background_color","interest.follower_count","interest.id","interest.images[400x]","interest.is_followed","interest.name","interest.type","interest.url_name"]}});const r=Object(i.useSelector)(({boards:e,topics:t})=>{const s=e[n].related_interest_ids;return null==s?void 0:s.map(e=>t[e])});return r&&r.length>=E?Object(g.jsx)(C,{image:l,objectId:n,onComplete:t,showRelatedInterestModal:s,viewType:5}):null};const R=6,E=3,D=({onComplete:e,boardId:t,showRelatedInterestModal:n})=>{const{anyEnabled:s}=Object(I.b)("mweb_board_mini_renux"),{isNavFooterHiddenAfterScroll:i}=Object(p.b)();Object(y.b)();const o=w.b+16,l={marginBottom:i?16:o,transition:"margin-bottom 300ms ease-in-out"};return Object(g.jsx)(h.f,{display:"flex",justifyContent:"center",position:"fixed",left:!0,right:!0,bottom:!0,dangerouslySetInlineStyle:{__style:l},children:s&&Object(g.jsx)(M,{numOfInterests:R,onComplete:e,boardId:t,showRelatedInterestModal:n})})};t.default=({onComplete:e,pinId:t,showRelatedInterestModal:n})=>{const{anyEnabled:s,group:i}=Object(I.b)("mweb_mini_renux"),{isNavFooterHiddenAfterScroll:o}=Object(p.b)();Object(y.b)();const l={marginBottom:o?16:w.b+16,transition:"margin-bottom 300ms ease-in-out"},r=s?Number(i.slice(-1)):NaN;return Object(g.jsxs)(h.f,{display:"flex",justifyContent:"center",position:"fixed",left:!0,right:!0,bottom:!0,dangerouslySetInlineStyle:{__style:l},children:[1===r&&Object(g.jsx)(x,{onComplete:e,pinId:t}),r>1&&Object(g.jsx)(T,{numOfInterests:r,onComplete:e,pinId:t,showRelatedInterestModal:n})]})}},Hmcd:function(e,t,n){var s=n("q1tI"),i=n("/MKj"),o=n("mp1x"),l=n("h8Qw"),r=n("yweb"),a=n("+o5r"),c=n("vtuW"),d=n("ulr2"),b=n("EC67"),u=n("CwtX"),j=n("n6mq"),m=n("nwTc"),p=n("AGnR"),O=n("nKUr");const h={pin:3,board:5},_=(e,t,n)=>({view_type:h[e],component:39,aux_data:{interests:null==t?void 0:t.map(e=>e.id),[e+"_id"]:n}});t.a=function({isMaskTransparent:e,objectId:t,onDismiss:n,type:h}){const f=Object(r.c)(),g=Object(i.useSelector)(({session:e})=>e.isTablet),x=Object(a.b)(window.innerWidth),w=Object(i.useDispatch)(),y=Object(b.h)(),I="pin"===h?u.NUMBER_OF_INTERESTS:u.MIN_NUM_OF_INTERESTS_FOR_BOARD,S=Object(i.useSelector)(({boards:e,pins:n,topics:s})=>{const i="pin"===h?n[t].related_interest_ids:e[t].related_interest_ids;return null==i?void 0:i.map(e=>s[e])}),v=(null==S?void 0:S.length)||0;Object(s.useEffect)(()=>{v>=I&&Object(p.e)({..._(h,S,t),event_type:9025})},[I,t,v,h,S]);const C=Object(s.useCallback)((e,t)=>{t?w(Object(m.d)(e,"mini_renux")):(Object(c.c)("completedMiniRenux",!0),w(Object(m.b)(e,"mini_renux")))},[]),T=Object(s.useCallback)(()=>{n(),Object(p.h)({..._(h,S,t),element:12284})},[n,h,S,t]),M=Object(s.useCallback)(()=>{n(),Object(p.h)({..._(h,S,t),element:11925})},[n,h,S,t]),R=Object(s.useCallback)(()=>{w(Object(d.T)(!0)),y.push("/"),Object(p.h)({..._(h,S,t),element:76})},[y,t,S]);return v>=I?Object(O.jsxs)(o.a,{hideCloseIcon:!0,isLegoModal:!0,isOpen:!0,isSlideUp:!0,isMaskTransparent:e,isTablet:g,onDismiss:T,type:"related_interests_modal",children:[Object(O.jsxs)(j.f,{flex:"grow",display:"flex",alignItems:"baseline",margin:-1,children:[Object(O.jsx)(j.u,{alignItems:"center",justifyContent:"start",children:Object(O.jsx)(j.x,{accessibilityLabel:f._("Close modal","relatedInterests.modal.close","Close related interests modal icon button"),iconColor:"darkGray",icon:"cancel",onClick:M,padding:4,size:"sm"})}),Object(O.jsx)(j.f,{display:"flex",flex:"grow",alignItems:"center",justifyContent:"center",marginStart:0,marginEnd:12,children:Object(O.jsx)(j.cb,{align:"center",size:"sm",children:f._("Welcome back!","relatedInterests.modal.header","Welcome header on related interests banner")})})]}),Object(O.jsx)(j.f,{children:Object(O.jsx)(j.cb,{size:"lg",weight:"bold",align:"center",children:f._("Tell us what else you're interested in","relatedInterests.modal.subheader","Subheader on realted interests banner instructing users to select interests")})}),Object(O.jsx)(j.f,{display:"flex",alignItems:"center",justifyContent:"center",paddingY:3,wrap:!0,children:null==S?void 0:S.map(e=>Object(O.jsx)(j.f,{padding:1,children:Object(O.jsx)(j.bb,{tapStyle:"compress",rounding:"pill",onTap:()=>{C(e.id,e.is_followed)},children:Object(O.jsx)(l.a,{decreaseNamePadding:x,id:e.id,isLego:!0,isSelected:e.is_followed,nameTextSize:"sm",renderAsPill:!0,topicBlob:e,viewParameter:155,viewType:3})})},e.id))}),Object(O.jsx)(j.f,{display:"flex",justifyContent:"center",paddingX:2,children:Object(O.jsx)(j.g,{fullWidth:!0,accessibilityLabel:f._("See your new home feed","relatedInterests.modal.seeHomefeed","Submit selected topics and go to updated homefeed button"),color:"red",disabled:!(null==S?void 0:S.some(e=>e.is_followed)),onClick:R,text:f._("See your new home feed","relatedInterests.modal.seeHomefeed","Submit selected topics and go to updated homefeed button"),size:"lg"})})]}):null}},Lgwu:function(e,t,n){n.r(t),n.d(t,"default",(function(){return p}));var s=n("q1tI"),i=n("/MKj"),o=n("clxp"),l=n("mp1x"),r=n("5mqq"),a=n("Hmcd"),c=n("rYoy"),d=n("yweb"),b=n("ulr2"),u=n("nKUr");const j=Object(s.lazy)(()=>n.e(582).then(n.bind(null,"v/Qq"))),m=Object(s.lazy)(()=>n.e(573).then(n.bind(null,"DlC4")));function p({experience:e,isAuthenticated:t,isMaskTransparent:n,modal:p,onDismiss:O,onSendButtonClick:h,pin:_,postDownloadModalEligibilityType:f,viewParameter:g,clientTrackingParams:x}){const w=Object(d.c)(),y=Object(i.useDispatch)();return _?Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)(l.a,{isOpen:"reportPinModal"===p,accessibilityCloseIconLabel:w._("close report modal"),onDismiss:O,type:"closeup_page",children:Object(u.jsx)(r.a,{textSize:"lg"})}),t&&!!f&&Object(u.jsx)(o.a,{name:"SafeSuspense_CloseupModals_PostDownloadModal",children:Object(u.jsx)(c.a,{children:Object(u.jsx)(j,{isOpen:"postDownloadModal"===p,onDismiss:O,onSend:h,pinId:_.id,postDownloadModalEligibilityType:f,viewParameter:g,viewType:3,clientTrackingParams:x})})}),Object(u.jsx)(o.a,{name:"SafeSuspense_CloseupModals_ShareMenu",children:Object(u.jsx)(c.a,{children:Object(u.jsx)(m,{objectType:1,isOpen:"sendPinModal"===p,onDismiss:()=>{t||y(Object(b.n)()),O()},objectId:_.id,hideContactsSuggestions:!t,experience:e})})}),Object(u.jsx)(o.a,{name:"SafeSuspense_CloseupModals_RelatedInterestsModal",children:Object(u.jsx)(c.a,{children:"relatedInterestsModal"===p&&Object(u.jsx)(a.a,{isMaskTransparent:n,objectId:_.id,onDismiss:O,type:"pin"})})})]}):null}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/592-975ea33d952b241c468b.mjs.map