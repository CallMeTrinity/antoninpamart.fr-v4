import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useLiveTime(opts: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false }) {
  const now = ref(new Date())
  const time = ref('')
  let id: ReturnType<typeof setInterval> | null = null

  const tick = () => {
    now.value = new Date()
    time.value = now.value.toLocaleTimeString('fr-FR', opts)
  }

  onMounted(() => {
    tick()
    id = setInterval(tick, 1000)
  })

  onBeforeUnmount(() => {
    if (id) clearInterval(id)
  })

  return { now, time }
}
