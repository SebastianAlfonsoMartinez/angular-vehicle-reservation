"use strict";(self.webpackChunkangular_vehicle_reservation_system=self.webpackChunkangular_vehicle_reservation_system||[]).push([[592],{4020:(l,c,e)=>{e.d(c,{j:()=>h});var s=e(2340),i=e(1571),r=e(529);let h=(()=>{class t{constructor(n){this.http=n,this.URL=s.N.api}getAllVehicles$(n,o){return this.http.get(`${this.URL}/vehicle/all/${n}/${o}`)}getAllVehiclesForShuffle$(){return this.http.get(`${this.URL}/vehicle/all/0/40`)}static#t=this.\u0275fac=function(o){return new(o||t)(i.LFG(r.eN))};static#e=this.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},5562:(l,c,e)=>{e.d(c,{d:()=>i});var s=e(1571);let i=(()=>{class r{handleError(){const t=this.host.nativeElement;console.error("Imagen no pudo ser cargada ",this.host),t.src=this.customImg?this.customImg:"/assets/images/imgBroken.jpg"}constructor(t){this.host=t,this.customImg=!1}static#t=this.\u0275fac=function(a){return new(a||r)(s.Y36(s.SBq))};static#e=this.\u0275dir=s.lG2({type:r,selectors:[["img","appImgBroken",""]],hostBindings:function(a,n){1&a&&s.NdJ("error",function(){return n.handleError()})},inputs:{customImg:"customImg"}})}return r})()}}]);