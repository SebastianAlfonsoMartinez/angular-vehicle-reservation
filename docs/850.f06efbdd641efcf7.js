"use strict";(self.webpackChunkangular_vehicle_reservation_system=self.webpackChunkangular_vehicle_reservation_system||[]).push([[850],{7850:(P,s,o)=>{o.r(s),o.d(s,{VehicleModule:()=>M});var r=o(6895),c=o(7699),e=o(1571),h=o(4020),l=o(1581);const d=function(t){return["/home/vehicle/details",t]},g=function(t){return["/home/reservation/main",t]};function u(t,p){if(1&t&&(e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"img",6),e.TgZ(3,"div",7)(4,"h5",8),e._uU(5),e.qZA(),e.TgZ(6,"p",9),e._uU(7),e.qZA()(),e.TgZ(8,"ul",10)(9,"li",11),e._uU(10),e.qZA(),e.TgZ(11,"li",11),e._uU(12),e.qZA(),e.TgZ(13,"li",11),e._uU(14),e.qZA(),e.TgZ(15,"li",11),e._uU(16),e.qZA()(),e.TgZ(17,"div",7)(18,"a",12),e._uU(19,"M\xe1s detalles"),e.qZA(),e.TgZ(20,"a",12),e._uU(21,"Reservar"),e.qZA()()()()),2&t){const i=p.$implicit;e.xp6(2),e.Q6J("src",i.imageUrl,e.LSH),e.xp6(3),e.AsE("",i.brand," - ",i.reference,""),e.xp6(2),e.AsE("A\xf1o: ",i.manufactureYear," | Color: ",i.color,""),e.xp6(3),e.hij("Transmisi\xf3n: ",i.typeTransmission,""),e.xp6(2),e.hij("Puertas: ",i.numberDoors,""),e.xp6(2),e.hij("Combustible: ",i.typeFuel,""),e.xp6(2),e.hij("Precio: ",i.price,""),e.xp6(2),e.Q6J("routerLink",e.VKq(11,d,i.id)),e.xp6(2),e.Q6J("routerLink",e.VKq(13,g,i.id))}}const m=function(){return[3,6,9,18]};let v=(()=>{class t{constructor(i){this.cardService=i,this.allVehicles=[],this.displayedVehicles=[],this.totalVehicles=0,this.pageSize=3,this.currentPage=0}ngOnInit(){this.loadVehicles()}loadVehicles(){this.cardService.getAllVehiclesForShuffle$().subscribe(i=>{this.allVehicles=i,this.totalVehicles=i.length,this.updateDisplayedVehicles()})}updateDisplayedVehicles(){const i=this.currentPage*this.pageSize;this.displayedVehicles=this.allVehicles.slice(i,i+this.pageSize)}onPageChange(i){this.currentPage=i.pageIndex,this.pageSize=i.pageSize,this.updateDisplayedVehicles()}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(h.j))};static#i=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-main-vehicle"]],decls:4,vars:5,consts:[[1,"container"],[1,"row"],["class","col-md-4 mb-4",4,"ngFor","ngForOf"],[3,"length","pageSize","pageSizeOptions","page"],[1,"col-md-4","mb-4"],[1,"card"],["alt","Imagen del veh\xedculo",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"card-link",3,"routerLink"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,u,22,15,"div",2),e.qZA(),e.TgZ(3,"mat-paginator",3),e.NdJ("page",function(y){return a.onPageChange(y)}),e.qZA()()),2&n&&(e.xp6(2),e.Q6J("ngForOf",a.displayedVehicles),e.xp6(1),e.Q6J("length",a.totalVehicles)("pageSize",a.pageSize)("pageSizeOptions",e.DdM(4,m)))},dependencies:[r.sg,c.rH,l.NW],styles:[".container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.row[_ngcontent-%COMP%]{margin-right:-15px;margin-left:-15px}.card[_ngcontent-%COMP%]{width:100%;height:auto;margin-bottom:1rem;box-shadow:0 4px 8px #0000001a;border:1px solid #ddd;border-radius:8px;overflow:hidden;transition:transform .3s ease,box-shadow .3s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 6px 12px #0003}.card-img-top[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover}.card-body[_ngcontent-%COMP%]{padding:1rem}.card-title[_ngcontent-%COMP%]{margin-bottom:.5rem;font-size:1.25rem;font-weight:700}.card-text[_ngcontent-%COMP%]{font-size:1rem;color:#555}.list-group-item[_ngcontent-%COMP%]{border:none;padding:.5rem 1rem}.card-link[_ngcontent-%COMP%]{color:#007bff;text-decoration:none}.card-link[_ngcontent-%COMP%]:hover{text-decoration:underline}mat-paginator[_ngcontent-%COMP%]{margin-top:20px}@media (max-width: 768px){.card[_ngcontent-%COMP%]{margin-bottom:20px}.card-img-top[_ngcontent-%COMP%]{height:150px}}"]})}return t})();var x=o(7073);const f=function(t){return["/home/reservation/main",t]};function b(t,p){if(1&t&&(e.TgZ(0,"div",1)(1,"h2"),e._uU(2),e.qZA(),e.TgZ(3,"div",2)(4,"p"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"p"),e._uU(11),e.qZA(),e.TgZ(12,"p"),e._uU(13),e.qZA(),e.TgZ(14,"p"),e._uU(15),e.ALo(16,"currency"),e.qZA(),e.TgZ(17,"p"),e._uU(18),e.qZA()(),e.TgZ(19,"div",3),e._UZ(20,"img",4),e.qZA(),e.TgZ(21,"a",5),e._uU(22,"Reservar"),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.AsE("",i.vehicle.brand," - ",i.vehicle.reference,""),e.xp6(3),e.hij("A\xf1o: ",i.vehicle.manufactureYear,""),e.xp6(2),e.hij("Color: ",i.vehicle.color,""),e.xp6(2),e.hij("Transmisi\xf3n: ",i.vehicle.typeTransmission,""),e.xp6(2),e.hij("N\xfamero de Puertas: ",i.vehicle.numberDoors,""),e.xp6(2),e.hij("Tipo de Combustible: ",i.vehicle.typeFuel,""),e.xp6(2),e.hij("Precio: ",e.lcZ(16,13,i.vehicle.price),""),e.xp6(3),e.hij("Disponibilidad: ",i.vehicle.available?"Disponible":"No Disponible",""),e.xp6(2),e.hYB("alt","Imagen del veh\xedculo ",i.vehicle.brand," ",i.vehicle.reference,""),e.Q6J("src",i.vehicle.imageUrl,e.LSH),e.xp6(1),e.Q6J("routerLink",e.VKq(15,f,i.vehicle.id))}}const Z=[{path:"",children:[{path:"main",component:v},{path:"details/:id",component:(()=>{class t{constructor(i,n){this.route=i,this.vehicleService=n}ngOnInit(){const i=this.route.snapshot.paramMap.get("id");i&&this.vehicleService.getVehicleById(i).subscribe(n=>{this.vehicle=n})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(c.gz),e.Y36(x.f))};static#i=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-vehicle-details"]],inputs:{vehicle:"vehicle"},decls:1,vars:1,consts:[["class","vehicle-details",4,"ngIf"],[1,"vehicle-details"],[1,"vehicle-info"],[1,"vehicle-image"],[3,"src","alt"],[1,"btn","btn-primary",3,"routerLink"]],template:function(n,a){1&n&&e.YNc(0,b,23,17,"div",0),2&n&&e.Q6J("ngIf",a.vehicle)},dependencies:[r.O5,c.rH,r.H9],styles:[".vehicle-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:20px;max-width:800px;margin:40px auto;box-shadow:0 4px 8px #0000001a;border-radius:10px;background:#fff}.vehicle-info[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:20px;width:100%}.vehicle-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{flex:1 1 200px;margin:10px;padding:10px;background:#f7f7f7;border-radius:5px}.vehicle-image[_ngcontent-%COMP%]{width:100%;margin-top:20px;text-align:center}.vehicle-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;border-radius:5px}.btn-primary[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:10px 20px;border:none;border-radius:5px;cursor:pointer;text-decoration:none;display:inline-block;margin-top:20px}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0056b3}@media (max-width: 768px){.vehicle-info[_ngcontent-%COMP%]{flex-direction:column}}"]})}return t})()}]}];let C=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#i=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(Z),c.Bz]})}return t})();var _=o(4466);let M=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#i=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[r.ez,C,_.m,l.TU]})}return t})()}}]);