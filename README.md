Proyecto desafio tecnico frontend para DuxSoftware

Instalar dependencias: npm install -y

Iniciar proyecto: npm run dev

El desarrollo se realizó en Next Js como framework.
Se utilizó la metodología Atomic desing para hacer la pagina lo más reutilizable posible.
Los componentes fueron creados con Prime React y utilizado primeFlex para darles estilo. 
El codigo posee varios comentarios intentando dar orden y sentido sobre a que corresponde cada función. 

Se solicitó utilizar Server Side en un compontente para listar los usuarios, se cumplió. Consumo la api desde una función async del lado del servidor, pasando por un UserServices.ts 
que mediante axios accede a los metodos http correspondientes. Estos datos son pasados por props a un componente "use client" en donde se trabaja con hooks los estados.

Se consumió la api https://staging.duxsoftware.com.ar/api/personal filtrando según paginado. 
Se solicitaron validaciones en el formulario para garantizar integridad en los datos. Se cumplió. 
Se solicitó crear un Modal reutilizable para la creación y edición de usuarios. Se cumplió.

- Deuda tecnica: El modal reutilizable tiene sus dropdowns con width más chico del pedido en figma. Entiendo que tengo una class de prime react que se pisa con otra y hace que eso se vea así
  Si bien es reutilizable, tengo que modificarlo para que sea 100% editable en todos los lugares donde se requiera.

- En el diseño de figma se solicita un div con fondo gris y 6 iconos, se agregó. Le agregué un hidden para que en movil no se vea.


Se solicitó poder buscar por coincidencia y filtrar por estado. Se cumplió. 

- Deuda tecnica: Dentro de la documentación no indicaba el filtr por sector, si en la visual en figma (Lo agregué al diseño pero no trae la función correspondiente de filtrado, por lo que entendí y me pareció que, si bien suma, crear una función filtro de sector cuando siempre se trabaja en el sector 1000, no lo vi viable. Pero si conservé su Dropdown con fines estéticos.

IMPORTANTE: Aspectos a mejorar

Al momento me doy cuenta que quizá mi trabajo con las props, si bien funciona, es quizá no una solución tan optima para lo que pude investigar. Al momento 23/09/2024 no estoy tan informado sobre soluciones como redux tool kit
por ende, independientemente si este proceso avanza o no, voy a reeditar este codigo para que sea más optimo el manejo de estados. Estuve investigando, es algo implementable, pero decidi realizar esta entrega antes de experimentar. 

27/09/2024 - Se modificaron los background color del navbar y de los botones para que sea el que está en el diseño de figma, se estilizó el navbar para que el height sea más angosto. 

IMPORTANTE: Feedback personal sobre este desafío.

Me pareció muy interensante, logré ver los beneficios de trabajar con next js, aprendí a usar typescript, si bien no lo domino al 100%, pude generar un codigo consistente, que respeta los tipados y abrí muchisimo la cabeza aprendiendo esto.
Investigue mucho, aprendí mucho y me gustaría recibir feedback ya que seguramente eso me sirva para mejorar. Si hay algo que me caracteriza en esta profesión es nunca rendirme, entender que con esfuerzo, humildad y con un objetivo, y orden claro 
puedo resolver los desafíos que se me presenten. 



