import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                souvenirs: resolve(__dirname, 'souvenirs.html'),
                services: resolve(__dirname, 'services.html'),
                poligraphy: resolve(__dirname, 'poligraphy.html'),
                pechati_shtampi: resolve(__dirname, 'pechati_shtampi.html'),
                reklama: resolve(__dirname, 'reklama.html'),
                contacts: resolve(__dirname, 'contacts.html'),
            },
        },
    },
})