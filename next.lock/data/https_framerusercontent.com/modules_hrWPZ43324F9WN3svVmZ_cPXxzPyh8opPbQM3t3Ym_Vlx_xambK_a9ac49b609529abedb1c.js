import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (efb3fad)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,Image,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Vector,Text,getFonts,Stack,getPropertyControls}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import IconsStatus from"https://framerusercontent.com/modules/zxx8Gre44YL5gzHq6z5w/zzymOVjnzzeR0Ze7MDxd/veh7fkcNr.js";const IconsStatusFonts=getFonts(IconsStatus);const IconsStatusControls=getPropertyControls(IconsStatus);const cycleOrder=["hcnXJz7bc","Vt2nnYLMf"];const variantClassNames={"hcnXJz7bc":"framer-v-bz18vn","Vt2nnYLMf":"framer-v-ug93xg"};const humanReadableVariantMap={"List-Card":"hcnXJz7bc","Wissenschafts":"Vt2nnYLMf"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,width,height,layoutId,variant:outerVariant="hcnXJz7bc",number:zzk5DsnBr="22",title:boe3NGdx7="Projekttitel",masstab:CfQrCpTji="Gebäude",link:A1uIcZGj8,status:fsKqXHr15="Jdd6TVXfS",thumbnail:u87sWxOaU=new URL("assets/512/QMKsKBoHr2jvUo29aX87aG5f0.jpg",import.meta.url).href,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"hcnXJz7bc",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-");const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTapbz18vn=activeVariantCallback(async(...args)=>{if(A1uIcZGj8){const res=await A1uIcZGj8(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({"Vt2nnYLMf":{"hcnXJz7bc":{"data-framer-name":"Wissenschafts"},"mZ0NpsAAp":{"background":false},"v4a_XQCuI":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>22</span><br></span></span>","alignment":"center","fonts":["CUSTOM;Euclid Circular A Semibold"]},"r6wGGMZIA":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Projekttitel</span><br></span></span>","fonts":["CUSTOM;Euclid Circular A Semibold"]}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(baseVariant==="Vt2nnYLMf")return true;return false;};const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-q0tfs",classNames),style:{"display":"contents"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"hcnXJz7bc",className:cx("framer-bz18vn",className),style:{"borderTopLeftRadius":4,"borderTopRightRadius":4,"borderBottomRightRadius":0,"borderBottomLeftRadius":0,"--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px","--border-bottom-width":"1px","--border-style":"solid","--border-color":"var(--token-1d010bd3-8bb8-4f30-8c07-d21dfc3dfc28, rgb(143, 143, 143)) /* {\"name\":\"dark-default\"} */",...style},background:null,"data-highlight":true,"data-framer-name":"List-Card","data-border":true,onTap:onTapbz18vn,transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("hcnXJz7bc"),children:[/*#__PURE__*/ _jsx(Image,{layoutId:"mZ0NpsAAp",className:"framer-14jhq6f",style:{"WebkitFilter":"contrast(1.22) grayscale(1)","filter":"contrast(1.22) grayscale(1)","backgroundColor":"transparent"},background:{"src":u87sWxOaU,"pixelWidth":640,"pixelHeight":480,"intrinsicWidth":640,"intrinsicHeight":480,"fit":"fill"},"data-framer-name":"Image",variants:{"Vt2nnYLMf":{"backgroundColor":"var(--token-59d999ea-5a5a-4938-93e8-d704b8f921d2, rgb(64, 64, 64))"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("mZ0NpsAAp"),children:isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{style:{"opacity":0.42},layout:"position",layoutId:"scNiLrXlt",className:"framer-1ih3wv5",background:null,"data-framer-name":"Icon",transition:transition,layoutDependency:layoutDependency,...addVariantProps("scNiLrXlt"),children:/*#__PURE__*/ _jsx(Vector,{style:{},d:"M 0.8836000000024669 41.39000000000003 L 0.8836000000024669 0 L 42.303600000002426 0 L 42.303600000002426 27.749999999999986 L 56.17860000000231 27.749999999999986 L 56.17860000000231 0 L 97.93860000000277 0 L 97.93860000000277 41.555000000000035 L 84.23860000000272 41.555000000000035 L 84.23860000000272 13.534999999999968 L 70.22360000000273 13.534999999999968 L 70.22360000000273 41.385000000000005 L 28.423600000002658 41.385000000000005 L 28.423600000002658 13.534999999999968 L 14.933600000002194 13.534999999999968 L 14.933600000002194 41.385000000000005 L 0.8836000000024669 41.385000000000005 M 49.43360000000265 52.1995 C 45.64360000000246 52.40950000000001 41.878600000002244 51.14949999999996 38.43360000000242 49.99950000000001 C 34.39360000000246 48.654499999999985 28.763600000002576 44.81449999999998 19.833600000002285 44.81449999999998 C 11.76360000000269 44.81449999999998 4.303600000002312 48.114499999999964 0.8836000000024669 51.04949999999998 L 0.8836000000024669 66.99450000000002 C 4.303600000002312 64.06449999999995 11.76360000000269 58.684499999999986 19.833600000002285 58.684499999999986 C 27.483600000002717 58.684499999999986 31.808600000002194 61.6345 35.36360000000226 63.08449999999996 C 38.66360000000267 64.42949999999999 43.56360000000219 65.92450000000002 49.43360000000265 65.92450000000002 C 54.26790730017384 65.9672016530138 59.05750984678203 64.99633627194459 63.49360000000271 63.074499999999986 C 67.19360000000276 61.48950000000002 71.38860000000247 58.684499999999986 79.03360000000245 58.684499999999986 C 87.10360000000261 58.684499999999986 94.56360000000242 64.06449999999995 97.98360000000227 66.99450000000002 L 97.98360000000227 51.04949999999998 C 94.56360000000242 48.114499999999964 87.10360000000261 44.81449999999998 79.03360000000245 44.81449999999998 C 70.22860000000261 44.81449999999998 64.27860000000234 48.54449999999996 60.43360000000231 49.99950000000001 C 56.89360000000246 51.34449999999997 53.46860000000273 52.28449999999998 49.43360000000265 52.1995 Z M 2.5224267119483557e-12 93.1653 C -0.000013634739595147494 79.49057918427613 11.075292819013747 68.39961068099186 24.75000000000275 68.38030000000003 C 32.86254759659098 68.3838756592494 40.458306556781416 72.3629623747452 45.080000000002336 79.03030000000001 L 53.94000000000258 79.03030000000001 C 58.56227801332661 72.36362408825357 66.15766358602994 68.38473297417138 74.27000000000274 68.38030000000003 C 87.94470718099117 68.39961068099186 99.02001363474452 79.49057918427613 99.0200000000024 93.1653 L 84.37000000000265 93.16029999999998 C 84.37000000000265 87.23529999999997 80.01500000000274 82.27530000000002 74.09000000000245 82.27530000000002 C 68.16000000000227 82.27530000000002 63.2900000000026 87.22530000000006 63.2900000000026 93.14530000000005 L 35.35000000000277 93.14530000000005 C 35.35000000000277 87.22030000000004 30.61500000000219 82.27530000000002 24.690000000002463 82.27530000000002 C 18.765000000002736 82.27530000000002 14.910000000002377 87.23529999999997 14.910000000002377 93.16029999999998 L 2.5224267119483557e-12 93.1653",id:"iVz24lm2B",isRootVectorNode:true,shapeId:"id_iVz24lm2B",strokeClipId:"id_iVz24lm2B_clip",rect:{"x":-0.0000000000025222853830502283,"y":0,"width":99.02000000001499,"height":93.1653},strokeAlpha:0,name:"Join",rotation:0,lineCap:"butt",lineJoin:"miter",strokeColor:"rgba(0,0,0,1)",strokeMiterLimit:10,strokeEnabled:false,fill:"var(--token-1d010bd3-8bb8-4f30-8c07-d21dfc3dfc28, rgb(143, 143, 143)) /* {\"name\":\"dark-default\"} */",transition:transition,layoutDependency:layoutDependency,...addVariantProps("iVz24lm2B")})})}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"uaewEcOa5",className:"framer-1rh92sw",style:{"background":"linear-gradient(179deg, rgba(255, 255, 255, 0) 0%, var(--token-36a349a7-e952-4083-a533-f962f8145410, rgb(0, 0, 0)) /* {\"name\":\"Deep-Black\"} */ 100%)"},direction:"horizontal",distribution:"start",alignment:"start",gap:16,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"81px 16px 16px 16px"},center:"x","data-framer-name":"Info",transition:transition,layoutDependency:layoutDependency,...addVariantProps("uaewEcOa5"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Euclid Circular A Semibold\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-badfe888-848d-4929-a70e-605c8d910e76, rgb(255, 236, 26))","--framer-font-size":"18px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"center"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,alignment:"center",fonts:["CUSTOM;Euclid Circular A Semibold"],layoutId:"v4a_XQCuI",className:"framer-1nh81p",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>22</span><br></span></span>",text:zzk5DsnBr,variants:{"Vt2nnYLMf":{"--framer-text-color":"var(--token-7dee8bb7-8f6c-4be0-9b34-cd2299eb2894, rgb(250, 250, 250))"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("v4a_XQCuI")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Euclid Circular A Semibold\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-badfe888-848d-4929-a70e-605c8d910e76, rgb(255, 236, 26))","--framer-font-size":"18px","--framer-letter-spacing":"0.6px","--framer-text-transform":"uppercase","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["CUSTOM;Euclid Circular A Semibold"],layoutId:"r6wGGMZIA",className:"framer-1df77mh",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Projekttitel</span><br></span></span>",text:boe3NGdx7,variants:{"Vt2nnYLMf":{"--framer-text-color":"var(--token-7dee8bb7-8f6c-4be0-9b34-cd2299eb2894, rgb(250, 250, 250))"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("r6wGGMZIA")})]}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"BSVi31TeA",className:"framer-8qa669",style:{"backgroundColor":"var(--token-7dee8bb7-8f6c-4be0-9b34-cd2299eb2894, rgb(250, 250, 250))"},direction:"horizontal",distribution:"space-between",alignment:"center",gap:16,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"6px 8px 6px 56px"},center:"x",transition:transition,layoutDependency:layoutDependency,...addVariantProps("BSVi31TeA"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Euclid Circular A Semibold\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-59d999ea-5a5a-4938-93e8-d704b8f921d2, rgb(64, 64, 64))","--framer-font-size":"10px","--framer-letter-spacing":"1px","--framer-text-transform":"uppercase","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["CUSTOM;Euclid Circular A Semibold"],layoutId:"SF_IyknGg",className:"framer-qfa8wa",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Gebäude</span><br></span></span>",text:CfQrCpTji,transition:transition,layoutDependency:layoutDependency,...addVariantProps("SF_IyknGg")}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"XrhULaa7S-container",className:"framer-stm5v7-container","data-framer-name":"Status",transition:transition,layoutDependency:layoutDependency,...addVariantProps("XrhULaa7S-container"),children:/*#__PURE__*/ _jsx(IconsStatus,{width:"100%",height:"100%",layoutId:"XrhULaa7S",id:"XrhULaa7S",name:"Status",variant:fsKqXHr15,style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("XrhULaa7S")})})]})]})})}));});const css=[".framer-q0tfs [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-q0tfs * { box-sizing: border-box; }",".framer-q0tfs .framer-bz18vn { position: relative; cursor: pointer; overflow: hidden; width: 375px; height: 240px; }",".framer-q0tfs .framer-14jhq6f { position: absolute; overflow: visible; width: 100%; height: 100%; left: 0px; top: 0px; flex: none; }",".framer-q0tfs .framer-1ih3wv5 { position: absolute; width: 94px; height: 94px; left: calc(50.133333333333354% - 94px/2); top: calc(50.00000000000002% - 94px/2); flex: none; }",".framer-q0tfs .framer-1rh92sw { position: absolute; overflow: visible; width: 100%; height: min-content; bottom: 29px; left: 50%; flex: none; }",".framer-q0tfs .framer-1nh81p { position: relative; overflow: hidden; width: 40px; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-q0tfs .framer-1df77mh { position: relative; overflow: hidden; width: 77%; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-q0tfs .framer-8qa669 { position: absolute; overflow: visible; width: 100%; height: min-content; bottom: 0px; left: 50%; flex: none; }",".framer-q0tfs .framer-qfa8wa { position: relative; overflow: visible; width: auto; height: auto; flex: none; white-space: pre; }",".framer-q0tfs .framer-stm5v7-container { position: relative; width: 18px; height: 18px; flex: none; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 240
 * @framerIntrinsicWidth 375
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "Vt2nnYLMf": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"zzk5DsnBr": "number", "boe3NGdx7": "title", "CfQrCpTji": "masstab", "A1uIcZGj8": "link", "fsKqXHr15": "status", "u87sWxOaU": "thumbnail"}
 */ const FramerVlx_xambK=withCSS(Component,css);export default FramerVlx_xambK;FramerVlx_xambK.displayName="cards/F-Project-Card";FramerVlx_xambK.defaultProps={"width":375,"height":240};addPropertyControls(FramerVlx_xambK,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["hcnXJz7bc","Vt2nnYLMf"],"optionTitles":["List-Card","Wissenschafts"]},"zzk5DsnBr":{"type":ControlType.String,"title":"Number","defaultValue":"22","displayTextArea":false},"boe3NGdx7":{"type":ControlType.String,"title":"Title","defaultValue":"Projekttitel","displayTextArea":true},"CfQrCpTji":{"type":ControlType.String,"title":"Masstab","defaultValue":"Gebäude","displayTextArea":false},"A1uIcZGj8":{"type":ControlType.EventHandler,"title":"Link"},"fsKqXHr15":(IconsStatusControls===null||IconsStatusControls===void 0?void 0:IconsStatusControls["variant"])&&{...IconsStatusControls["variant"],"hidden":undefined,"title":"Status","defaultValue":"Jdd6TVXfS"},"u87sWxOaU":{"type":ControlType.Image,"title":"Thumbnail","__defaultAssetReference":"data:framer/asset-reference,QMKsKBoHr2jvUo29aX87aG5f0.jpg?originalFilename=projekt-keyvisual-6.jpg&preferredSize=small"}});addFonts(FramerVlx_xambK,[{"url":new URL("assets/AHvDH2HGlkkPi44947XbiayKn1o.otf",import.meta.url).href,"family":"Euclid Circular A Semibold","moduleAsset":{"url":"assets/AHvDH2HGlkkPi44947XbiayKn1o.otf","localModuleIdentifier":"local-module:canvasComponent/Vlx_xambK:default"}},...IconsStatusFonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerVlx_xambK","slots":[],"annotations":{"framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"Vt2nnYLMf\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerContractVersion":"1","framerIntrinsicHeight":"240","framerVariables":"{\"zzk5DsnBr\": \"number\", \"boe3NGdx7\": \"title\", \"CfQrCpTji\": \"masstab\", \"A1uIcZGj8\": \"link\", \"fsKqXHr15\": \"status\", \"u87sWxOaU\": \"thumbnail\"}","framerIntrinsicWidth":"375"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Vlx_xambK.map