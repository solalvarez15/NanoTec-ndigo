var ctlista_pac = [];



/* Agrega un paciente a la lista 
    Envar en el body, x-www-form-urlencoded */
const insert = (req , res) =>

{
    var singleObj = {};
    var max = 0;
    
    if (ctlista_pac.length==0)
     { max = 1
     }
     else
     {
      max = ctlista_pac[0].code;
      console.log(max);
      for (let i = 1; i < ctlista_pac.length; i++) {
         if (ctlista_pac[i].code > max) {
            max = ctlista_pac[i].code;
         }
         
      }
      max++;
     }
     singleObj['code'] = max;
    singleObj['nombre'] = req.body.nombre;
    singleObj['apellido'] = req.body.apellido;
    singleObj['dni'] = req.body.dni;
    singleObj['fecnac'] = req.body.fecnac;
    singleObj['direccion'] = req.body.direccion;
    singleObj['telefono'] = req.body.telefono;
    singleObj['mail'] = req.body.mail;
   
    ctlista_pac.push(singleObj);
    
    console.log('Lista', ctlista_pac)
    res.send('ok');


};


/* Devuelve el paciente con el código enviado */
const read = (req , res) => 
{
    
    searching = req.body.code;
    console.log('searching', searching);
    enc = {};
    for (let i = 0; i < ctlista_pac.length; i++) {
        if (ctlista_pac[i].code == searching) {
           enc = ctlista_pac[i];
           console.log('enc', enc);
        }
        
     }
   res.send(enc);
  };
 
/* Borra el paciente con el código enviado */
const remove = (req , res) => 
{
    
    todelete = req.body.code;
    console.log('delete', todelete);
    enc = {};
    for (let i = 0; i < ctlista_pac.length; i++) {
        if (ctlista_pac[i].code == todelete) {
           enc = ctlista_pac[i];
          
           console.log('enc', enc);
           ctlista_pac.splice(i, 1);
        }
        
     }
     console.log('Lista nueva', ctlista_pac)
   res.send(enc);
  };
 
  /* Borra el paciente con el código enviado */
const update = (req , res) => 
{
    
    toupdate = req.body.code;
    console.log('update', toupdate);
    enc = {};
    for (let i = 0; i < ctlista_pac.length; i++) {
        if (ctlista_pac[i].code == toupdate) {
            
            ctlista_pac[i].nombre = req.body.nombre;
            ctlista_pac[i].apellido = req.body.apellido;
            ctlista_pac[i].dni = req.body.dni;
            ctlista_pac[i].fecnac = req.body.fecnac;
            ctlista_pac[i].direccion = req.body.direccion;
            ctlista_pac[i].telefono = req.body.telefono;
            ctlista_pac[i].mail = req.body.mail;
                   
          
        }
        
     }
     console.log('Lista actualizada', ctlista_pac)
   res.send('ok');
  };
 

module.exports = {
    insert,
    read,
    remove,
    update
    }
    