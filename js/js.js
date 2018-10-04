function calculartotal(){

		var c1=document.getElementById("p1").value;
		var v1=document.getElementById("vp1").value;
		var c2=document.getElementById("p2").value;
		var v2=document.getElementById("vp2").value;
		var c3=document.getElementById("p3").value;
		var v3=document.getElementById("vp3").value;
		var c4=document.getElementById("p4").value;
		var v4=document.getElementById("vp4").value;
		var c5=document.getElementById("p5").value;  
		var v5=document.getElementById("vp5").value;
		var c6=document.getElementById("p6").value;
		var v6=document.getElementById("vp6").value;

		var iv1=document.getElementById("vi1").value;
		var iv2=document.getElementById("vi2").value;

		var r1= (v1*c1); 
		var r2= (v2*c2); 
		var r3= (v3*c3); 
		var r4= (v4*c4); 
		var r5= (v5*c5); 
		var r6= (v6*c6); 

		var subt1= (r1+r3+r5);
		var subt2= (r2+r4+r6);

		document.getElementById("st1").value=subt1;
		document.getElementById("st2").value=subt2;

		var iva1= calculariva(subt1,iv1);
		var iva2= calculariva(subt2,iv2);

		document.getElementById("i1").value=iva1;
		document.getElementById("i2").value=iva2;

		var sutt=(subt1+subt2);

		document.getElementById("st").value=sutt;

		var ivv=(iva1+iva2);

		document.getElementById("ivf").value=ivv;

		var ff=(sutt+ivv);

		document.getElementById("tlf").value=ff;


}

function calculariva(subtotal,iva){

		var ivacalculado=((subtotal*iva)/100);
		return ivacalculado;

}