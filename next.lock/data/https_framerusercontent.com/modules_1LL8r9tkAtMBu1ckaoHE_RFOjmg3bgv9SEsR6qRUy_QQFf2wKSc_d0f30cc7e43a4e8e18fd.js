import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (efb3fad)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,Image,transformTemplate,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,CycleVariantState,Text,getFonts}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import ImageCaption from"https://framerusercontent.com/modules/Cvyon9x1Z8Y5Eit7VuLe/pAqmjvL5Un889XVHOdbV/VZYaBrjcW.js";const ImageCaptionFonts=getFonts(ImageCaption);const cycleOrder=["P62JPmXQH","mnn7vpjNR"];const variantClassNames={"P62JPmXQH":"framer-v-4hzntt","mnn7vpjNR":"framer-v-1cwi35i"};const humanReadableVariantMap={"default":"P62JPmXQH","openCaption":"mnn7vpjNR"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,width,height,layoutId,variant:outerVariant="P62JPmXQH",title:qqhVJey0X="© | Information",image:W6mBu4d6o=new URL("assets/1024/nwvcm5R5oXtILHrKU4qfdvd1iNc.jpg",import.meta.url).href,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"P62JPmXQH",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-");const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap1ae7o2u=activeVariantCallback(async(...args)=>{setVariant(CycleVariantState);});const variantProps=React.useMemo(()=>({"mnn7vpjNR":{"P62JPmXQH":{"data-framer-name":"openCaption"}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(baseVariant==="mnn7vpjNR")return true;return false;};const isDisplayed2=()=>{if(baseVariant==="mnn7vpjNR")return true;return false;};const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-T5YH3",classNames),style:{"display":"contents"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"P62JPmXQH",className:cx("framer-4hzntt",className),style:{...style},background:null,"data-framer-name":"default",transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("P62JPmXQH"),children:[/*#__PURE__*/ _jsx(Image,{layoutId:"D6gseh6g1",className:"framer-hvkere",style:{},background:{"src":W6mBu4d6o,"pixelWidth":2000,"pixelHeight":1333,"intrinsicWidth":2000,"intrinsicHeight":1333,"fit":"fill"},"data-framer-name":"1-2-Gallery-1",transition:transition,layoutDependency:layoutDependency,...addVariantProps("D6gseh6g1")}),isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{layoutId:"YUPzwWU7m",className:"framer-1x3f1aa",style:{"backgroundColor":"var(--token-59d999ea-5a5a-4938-93e8-d704b8f921d2, rgb(64, 64, 64))","opacity":0.33},"data-framer-name":"Overlay",transition:transition,layoutDependency:layoutDependency,...addVariantProps("YUPzwWU7m")}),isDisplayed2()&&/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"WNhux60Aj-container",className:"framer-4awk6n-container",transformTemplate:transformTemplate("x"),"data-framer-name":"Image-Caption-2",transition:transition,layoutDependency:layoutDependency,...addVariantProps("WNhux60Aj-container"),children:/*#__PURE__*/ _jsx(ImageCaption,{width:"100%",height:"100%",layoutId:"WNhux60Aj",id:"WNhux60Aj",name:"Image-Caption-2",text:"Bildungs-, Betreuungs- und B\xfcrgerhaus: Das IBA-Projekt Gadamerplatz in der Heidelberger Bahnstadt vereint eine Grundschule mit Sporthalle, eine Kindertagesst\xe4tte und ein B\xfcrgerhaus mit Caf\xe9 unter einem Dach – und schafft durch seine Architektur die M\xf6glichkeit eines Miteinanders verschiedener Generationen. ",credit:"Abbildung: Thilo Ross",transition:transition,layoutDependency:layoutDependency,...addVariantProps("WNhux60Aj")})}),/*#__PURE__*/ _jsx(motion.div,{layoutId:"ltyrU3d47",className:"framer-1ae7o2u",style:{},background:null,"data-highlight":true,"data-framer-name":"Caption",onTap:onTap1ae7o2u,transition:transition,layoutDependency:layoutDependency,...addVariantProps("ltyrU3d47"),children:/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Euclid Circular A Regular\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-1d010bd3-8bb8-4f30-8c07-d21dfc3dfc28, rgb(143, 143, 143))","--framer-font-size":"12px","--framer-letter-spacing":"0.25px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.4em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["CUSTOM;Euclid Circular A Regular"],center:"x",layoutId:"wg3p47CsX",className:"framer-eho0xx",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>© | Information</span><br></span></span>",text:qqhVJey0X,transition:transition,layoutDependency:layoutDependency,...addVariantProps("wg3p47CsX")})})]})})}));});const css=[".framer-T5YH3 [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-T5YH3 * { box-sizing: border-box; }",".framer-T5YH3 .framer-4hzntt { position: relative; overflow: hidden; width: 329px; height: 443px; }",".framer-T5YH3 .framer-hvkere { position: absolute; overflow: visible; right: 0px; bottom: 33px; left: 0px; top: 0px; flex: none; }",".framer-T5YH3 .framer-1x3f1aa { position: absolute; overflow: visible; right: -110px; bottom: -173px; left: -119px; top: -94px; flex: none; }",".framer-T5YH3 .framer-4awk6n-container { position: absolute; width: auto; height: auto; left: 50%; top: 7px; flex: none; }",".framer-T5YH3 .framer-1ae7o2u { position: absolute; cursor: pointer; overflow: visible; width: 90px; height: 16px; bottom: 8px; left: calc(50.151975683890605% - 90px/2); flex: none; }",".framer-T5YH3 .framer-eho0xx { position: absolute; overflow: visible; width: auto; height: auto; bottom: 0px; left: 50%; flex: none; white-space: pre; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 443
 * @framerIntrinsicWidth 329
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "mnn7vpjNR": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"qqhVJey0X": "title", "W6mBu4d6o": "image"}
 */ const FramerQQFf2wKSc=withCSS(Component,css);export default FramerQQFf2wKSc;FramerQQFf2wKSc.displayName="Project-Image";FramerQQFf2wKSc.defaultProps={"width":329,"height":443};addPropertyControls(FramerQQFf2wKSc,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["P62JPmXQH","mnn7vpjNR"],"optionTitles":["default","openCaption"]},"qqhVJey0X":{"type":ControlType.String,"title":"Title","defaultValue":"© | Information","displayTextArea":false},"W6mBu4d6o":{"type":ControlType.Image,"title":"Image","__defaultAssetReference":"data:framer/asset-reference,nwvcm5R5oXtILHrKU4qfdvd1iNc.jpg?originalFilename=03_b_gadamerplatz_atrium.jpg&preferredSize=medium"}});addFonts(FramerQQFf2wKSc,[{"url":new URL("assets/a5V4uMPFxEaRVUNSELnluxZoFM4.otf",import.meta.url).href,"family":"Euclid Circular A Regular","moduleAsset":{"url":"assets/a5V4uMPFxEaRVUNSELnluxZoFM4.otf","localModuleIdentifier":"local-module:canvasComponent/QQFf2wKSc:default"}},...ImageCaptionFonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerQQFf2wKSc","slots":[],"annotations":{"framerIntrinsicHeight":"443","framerIntrinsicWidth":"329","framerVariables":"{\"qqhVJey0X\": \"title\", \"W6mBu4d6o\": \"image\"}","framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"mnn7vpjNR\": {\"layout\": [\"fixed\", \"fixed\"]}}}"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./QQFf2wKSc.map