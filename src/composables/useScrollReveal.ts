import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollReveal() {
  let io: IntersectionObserver | null = null
  let initTimer: ReturnType<typeof setTimeout> | null = null
  let fallbackTimer: ReturnType<typeof setTimeout> | null = null

  const reveal = (el: Element) => el.classList.add('in')
  const inView = (el: Element) => {
    const r = el.getBoundingClientRect()
    return r.top < window.innerHeight * 0.92 && r.bottom > 0
  }
  const sweep = () => {
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
      if (inView(el)) reveal(el)
    })
  }

  onMounted(() => {
    sweep()
    initTimer = setTimeout(sweep, 80)
    fallbackTimer = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach(reveal)
    }, 2500)

    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && reveal(e.target)),
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )
      document.querySelectorAll('.reveal').forEach((el) => io!.observe(el))
    }

    window.addEventListener('scroll', sweep, { passive: true })
    window.addEventListener('resize', sweep)
  })

  onBeforeUnmount(() => {
    io?.disconnect()
    window.removeEventListener('scroll', sweep)
    window.removeEventListener('resize', sweep)
    if (initTimer) clearTimeout(initTimer)
    if (fallbackTimer) clearTimeout(fallbackTimer)
  })
}
