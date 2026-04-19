# ✦ Tuimagen Studio · Link in Bio Card

Tarjeta digital interactiva lista para GitHub Pages.

---

## 🗂 Estructura de archivos

```
tuimagen-card/
├── index.html      ← estructura y contenido
├── styles.css      ← todo el diseño visual
├── script.js       ← interacciones (copiar email, ripple)
└── README.md       ← esta guía
```

---

## ✏️ Personalización rápida

Antes de subir, editá en `index.html`:

| Qué cambiar | Dónde buscarlo |
|---|---|
| Tu número de WhatsApp | `href="https://wa.me/TUNUMERO"` |
| Tu bot de Telegram | `href="https://t.me/TuimagenuevastudioIA_bot"` |
| Tu sitio web | `href="https://tuimagenstudios.github.io"` |
| Tu portafolio | `href="https://tuimagenstudios.netlify.app"` |
| Tu email | `data-email="hola@tuimagen.com"` |
| Tu tagline | `<p class="tagline">...</p>` |

Para usar **foto en lugar de la letra T**:
```html
<!-- Reemplazá esto: -->
<span class="avatar-letter">T</span>

<!-- Por esto (con tu imagen): -->
<img src="foto.jpg" alt="Tuimagen Studio" />
```

---

## 🚀 Publicar en GitHub Pages — paso a paso

### 1. Crear repositorio en GitHub

1. Ir a [github.com](https://github.com) → **New repository**
2. Nombre recomendado: `linkinbio` (o el que prefieras)
3. Marcá **Public**
4. **NO** marques "Add a README" (ya tenés uno)
5. Click en **Create repository**

---

### 2. Subir los archivos

**Opción A — desde el navegador (sin Git):**

1. En tu repositorio vacío, click en **"uploading an existing file"**
2. Arrastrá los 3 archivos: `index.html`, `styles.css`, `script.js`
3. Escribí un mensaje de commit: `✦ Initial card`
4. Click en **Commit changes**

**Opción B — desde terminal (si tenés Git):**

```bash
# En la carpeta del proyecto
git init
git add .
git commit -m "✦ Initial card"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/linkinbio.git
git push -u origin main
```

---

### 3. Activar GitHub Pages

1. En tu repositorio → tab **Settings**
2. Menú lateral → **Pages**
3. En "Source" → seleccioná **Deploy from a branch**
4. Branch: **main** · Folder: **/ (root)**
5. Click **Save**

---

### 4. Obtener tu link público

Después de ~1-2 minutos, tu URL será:

```
https://TU_USUARIO.github.io/linkinbio/
```

¡Compartí ese link con el mundo! 🌍

---

## 🎨 Paleta de colores

```css
--bg:      #05091a   /* fondo oscuro profundo */
--cyan:    #00e0ff   /* acento principal */
--green:   #00ff88   /* acento secundario */
--violet:  #a855f7   /* acento terciario */
```

---

*Hecho con ✦ por Tuimagen Studio*
