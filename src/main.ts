import { createApp } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import App from '@/App.vue'
import { i18n } from '@/assets/local'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin)
gsap.defaults({ ease: 'power3.out', duration: 0.9 })

const app = createApp(App)

app.use(i18n)
app.mount('#app')
