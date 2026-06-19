// =============================================================================
// Titlebar — macOS-style traffic light controls
// Usa a Tauri v2 Window API
// =============================================================================

const Titlebar = {
    async init() {
        const win = window.__TAURI__.window.getCurrentWindow();

        // Drag region — toda a titlebar é arrastável
        const dragRegion = document.getElementById('titlebar');
        if (dragRegion) {
            dragRegion.addEventListener('mousedown', async (e) => {
                // Não arrastar se clicar nos botões de traffic light
                if (e.target.closest('.traffic-light')) return;
                await win.startDragging();
            });

            // Double-click para maximizar/restaurar
            dragRegion.addEventListener('dblclick', async (e) => {
                if (e.target.closest('.traffic-light')) return;
                await win.toggleMaximize();
            });
        }

        // Botões de controle
        const btnClose = document.getElementById('titlebar-close');
        const btnMin = document.getElementById('titlebar-min');
        const btnMax = document.getElementById('titlebar-max');

        if (btnClose) btnClose.addEventListener('click', () => win.close());
        if (btnMin) btnMin.addEventListener('click', () => win.minimize());
        if (btnMax) btnMax.addEventListener('click', () => win.toggleMaximize());
    },
};
