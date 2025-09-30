# Configuración de Variables de Entorno

Este documento explica cómo configurar las variables de entorno para el proyecto Enaló.

## Archivos de Configuración

- `.env.example` - Plantilla con todas las variables disponibles
- `.env.local.example` - Plantilla para configuración local
- `.env` - Tu archivo de configuración real (NO subir al repositorio)
- `.env.local` - Tu archivo de configuración local (NO subir al repositorio)

## Configuración Inicial

1. **Copia el archivo de ejemplo:**
   ```bash
   cp .env.example .env
   cp .env.local.example .env.local
   ```

2. **Edita los archivos con tus valores reales**

3. **Reinicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## Variables Obligatorias

### EmailJS (Para formulario de contacto)
```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

**Cómo obtenerlas:**
1. Ve a [emailjs.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Configura un servicio de email
4. Crea un template de email
5. Copia las credenciales

### Información de la Empresa
```env
REACT_APP_CONTACT_EMAIL=info@macarenalorenzo.com
REACT_APP_CONTACT_PHONE=+34 123 456 789
REACT_APP_COMPANY_ADDRESS=Madrid, España
```

## Variables Opcionales

### Google Analytics
```env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Redes Sociales
```env
REACT_APP_INSTAGRAM_URL=https://instagram.com/macarenalorenzo
REACT_APP_FACEBOOK_URL=https://facebook.com/macarenalorenzo
REACT_APP_TWITTER_URL=https://twitter.com/macarenalorenzo
```

## Seguridad

- **NUNCA** subas archivos `.env` o `.env.local` al repositorio
- Las variables que empiezan con `REACT_APP_` son públicas (se incluyen en el bundle)
- No pongas información sensible en variables `REACT_APP_`

## Entornos

### Desarrollo
- Usa `.env.local` para configuraciones específicas de tu máquina
- Las variables de `.env.local` sobrescriben las de `.env`

### Producción
- Configura las variables en tu servidor/hosting
- Asegúrate de que todas las variables obligatorias estén configuradas

## Troubleshooting

### El formulario de contacto no funciona
- Verifica que las credenciales de EmailJS estén correctas
- Comprueba que el template de EmailJS tenga las variables correctas
- Revisa la consola del navegador para errores

### Analytics no funciona
- Verifica que el Measurement ID de Google Analytics sea correcto
- Asegúrate de que las cookies de analytics estén habilitadas
- Comprueba que el sitio esté configurado en Google Analytics

### Variables no se cargan
- Reinicia el servidor de desarrollo después de cambiar variables
- Verifica que las variables empiecen con `REACT_APP_`
- Comprueba que no haya espacios alrededor del signo `=` 

## ✅ Problema Solucionado

1. **Instalamos EmailJS correctamente** usando `--legacy-peer-deps` para resolver el conflicto con React 19
2. **Verificamos la instalación** - el paquete `@emailjs/browser@4.4.1` está instalado
3. **Creamos el archivo `.env`** desde la plantilla
4. **Reiniciamos el servidor** para cargar las nuevas dependencias

## 📋 Próximos Pasos

Ahora necesitas configurar EmailJS:

### 1. Configurar EmailJS
- Ve a [emailjs.com](https://www.emailjs.com/)
- Crea una cuenta gratuita
- Configura un servicio de email (Gmail, Outlook, etc.)
- Crea un template de email

### 2. Actualizar el archivo `.env`
Edita el archivo `.env` con tus credenciales reales:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

### 3. Reiniciar el servidor
Después de configurar las credenciales, reinicia el servidor:
```bash
npm run dev
```

## 🔧 Template de EmailJS

Cuando crees el template en EmailJS, usa estas variables:

```html
Subject: Nuevo mensaje de contacto - {{subject}}

De: {{from_name}} ({{from_email}})
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de macarenalorenzo.com
```

El formulario de contacto ahora debería funcionar correctamente. ¿Necesitas ayuda con la configuración de EmailJS? 