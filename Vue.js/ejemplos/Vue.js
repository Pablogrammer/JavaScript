    const { createApp } = Vue;

  const app = createApp({
                    data() {
                    return {
                        message: 'Texto de ejemplo'
                    }
                    }
                })
const mensaje = app.mount('#app')
