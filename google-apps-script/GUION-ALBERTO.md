# Guion para Alberto — desplegar el formulario desde tu cuenta

Son 5 minutos. Solo hay que hacerlo una vez. Si te trabas en cualquier paso, me avisas y lo hacemos juntos.

## Antes de empezar

- Necesitas haber aceptado el email de "**Transferencia de propiedad**" que te llegó de Google. Si no lo ves, mira en Spam / Notificaciones. El asunto es algo como *"Miguel te ha transferido la propiedad de un archivo"*.
- Vas a usar tu cuenta `albertoaguadopsicologo@gmail.com`.

## Pasos

**1.** Ve a **`script.google.com`**. Inicia sesión con tu Gmail si no lo estás.

**2.** En la lista de proyectos verás el del formulario (el que te acabo de transferir). Ábrelo con doble click.

**3.** Arriba a la derecha, botón azul **"Deploy" / "Implementar"** → **"New deployment" / "Nueva implementación"**.

**4.** En la ventana que se abre, arriba a la izquierda hay un **icono de engranaje** ⚙️. Púlsalo y elige **"Web app" / "Aplicación web"**.

**5.** Rellena así:
   - **Description / Descripción:** *(opcional)* algo como "Formulario web Alberto"
   - **Execute as / Ejecutar como:** **Me (`albertoaguadopsicologo@gmail.com`)** ← que salga tu email, importantísimo
   - **Who has access / Quién tiene acceso:** **Anyone / Cualquier persona**

**6.** Pulsa **"Deploy" / "Implementar"**.

**7.** Google te pedirá **autorizar permisos** (para enviar correo desde tu Gmail y escribir en la hoja de cálculo). Pulsa **"Authorize access" / "Autorizar acceso"**, elige tu cuenta.

**8.** ⚠️ **Pantalla de aviso "Google no ha verificado esta app"** — es normal, sale porque el script es tuyo (no de una empresa). NO te asustes:
   - Pulsa **"Advanced" / "Configuración avanzada"** (letra pequeña abajo).
   - Aparece un enlace: **"Go to [nombre del proyecto] (unsafe)" / "Ir a [nombre] (no seguro)"**. Púlsalo.
   - Ahora sí, revisa los permisos (Gmail + Sheets) y pulsa **"Allow" / "Permitir"**.

**9.** Aparece una ventana con la nueva **URL de la aplicación web**. Es larga, empieza por `https://script.google.com/macros/s/...../exec`. **Cópiala entera** y mándamela por WhatsApp.

**10.** *(Opcional pero recomendado — para comprobar que funciona antes de que yo la conecte a la web)*:
   - En el editor, arriba, verás un dropdown de funciones. Elige **`testEnvio`** y pulsa **"Run" / "Ejecutar"**.
   - Debería llegarte a tu bandeja un correo de prueba (de "Prueba Manual"). Si llega, todo bien. Si no, avísame.

---

## Qué hago yo con la URL

Cuando me la mandes, actualizo dos sitios (`.env.local` en local + variable en Vercel) y redespliego la web. A partir de ese momento, cuando alguien rellene el formulario, el aviso te llegará **desde tu Gmail** (antes salía desde el mío).

## Después, cuando funcione

En el mismo `script.google.com`, Deploy → **Manage deployments** → verás dos: el viejo (mío) y el nuevo (tuyo). Archiva el viejo con el icono de tres puntos → **Archive**. Así queda limpio.
