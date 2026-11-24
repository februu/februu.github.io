# febru.dev

Static personal site (index.html + Tailwind CSS v4). No build tooling/package.json — styling is compiled with the standalone Tailwind CLI.

## Rebuilding CSS

`tailwind.css` is the source (with `@theme` customizations); `style.css` is the compiled, minified stylesheet actually linked from `index.html`.

**After any HTML class change or edit to `tailwind.css`, regenerate `style.css` with the minify flag:**

```sh
tailwindcss -i tailwind.css -o style.css --minify
```

Never hand-edit `style.css` — it's generated output.
