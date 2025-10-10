# Sistema de Cache Busting para Imágenes

## 📋 ¿Qué es y por qué lo necesitamos?

El **cache busting** es una técnica que fuerza a los navegadores a descargar las versiones más recientes de las imágenes, evitando que muestren versiones antiguas guardadas en su caché.

### Problema que resuelve:
Cuando actualizas una imagen en el servidor pero mantiene el mismo nombre, los navegadores que ya visitaron tu sitio seguirán mostrando la versión antigua porque la tienen cacheada. Este sistema añade automáticamente un parámetro de versión a todas las URLs de imágenes (ej: `imagen.png?v=1.0.1`), lo que fuerza a los navegadores a descargar la nueva versión cuando cambias el número de versión.

## 🚀 Cómo actualizar las imágenes

### Cada vez que modifiques cualquier imagen del sitio:

1. **Abre el archivo** `src/lib/cacheBusting.ts`

2. **Encuentra esta línea:**
   ```typescript
   export const IMAGE_VERSION = '1.0.1';
   ```

3. **Incrementa el número de versión**. Puedes usar cualquier formato que prefieras:
   - Incremento simple: `'1.0.1'` → `'1.0.2'`
   - Por fecha: `'2024.10.10'` → `'2024.10.11'`
   - Timestamp: `'1.0.1'` → `'20241010'`

4. **Guarda el archivo y haz build** del proyecto:
   ```bash
   npm run build
   ```

5. **Despliega** la nueva versión a producción

### Ejemplo:
```typescript
// ANTES (versión anterior)
export const IMAGE_VERSION = '1.0.1';

// DESPUÉS (después de actualizar imágenes)
export const IMAGE_VERSION = '1.0.2';  // ← Incrementa este número
```

## 🔧 Cómo funciona internamente

### El sistema aplica automáticamente cache busting a:
- ✅ Todas las imágenes cargadas con el componente `OptimizedImage`
- ✅ Imágenes del hero (`getHeroImageUrl()`)
- ✅ Imágenes de productos (`getProductImageUrl()`)
- ✅ Iconos (`getIconUrl()`)
- ✅ Cualquier otra imagen (`getImageUrl()`)

### Ejemplo de URLs generadas:
```javascript
// Sin cache busting (antiguo):
/images/hero/pipeta-aceite.png

// Con cache busting (nuevo):
/images/hero/pipeta-aceite.png?v=1.0.1
```

## 📁 Archivos del sistema

### Archivo principal:
- `src/lib/cacheBusting.ts` - Contiene la versión y las funciones helper

### Componentes que usan cache busting:
- `src/components/OptimizedImage/OptimizedImage.tsx`
- `src/components/Hero/Hero.tsx`
- `src/routes/BodyOil.tsx`
- `src/routes/Escualano.tsx`
- `src/routes/Scualane.tsx`
- `src/components/FeatureCards/FeatureCards.tsx`

## 💡 Consejos

1. **Incrementa la versión CADA VEZ** que cambies una imagen
2. **No es necesario** incrementar la versión si solo cambias código (CSS, JS, etc.)
3. **Despliega siempre** después de cambiar la versión
4. Si tienes dudas sobre qué versión usar, usa la fecha actual: `'2024.10.10'`

## 🔍 Verificación

Para verificar que funciona:
1. Abre el sitio en un navegador
2. Inspecciona el elemento (F12)
3. Ve a la pestaña "Network" o "Red"
4. Busca las imágenes
5. Deberías ver URLs como: `imagen.png?v=1.0.1`

## ❓ Preguntas Frecuentes

**P: ¿Qué pasa si olvido actualizar la versión?**  
R: Los usuarios que ya visitaron el sitio seguirán viendo las imágenes antiguas cacheadas.

**P: ¿Puedo usar cualquier número de versión?**  
R: Sí, puedes usar `1.0.1`, `2024.10.10`, `v1`, etc. Lo importante es que sea diferente cada vez.

**P: ¿Afecta esto al rendimiento?**  
R: No, es solo un parámetro en la URL. El navegador sigue cacheando las imágenes normalmente.

**P: ¿Necesito hacer algo especial en el servidor?**  
R: No, el servidor ignora el parámetro `?v=` y sirve el archivo normalmente.

