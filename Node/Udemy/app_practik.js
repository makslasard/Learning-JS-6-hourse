const perf_hooks = require('perf_hooks')

const performanceObsever = new perf_hooks.performanceObsever((items, observer) => {
    // console.log(items.getEntries())
    const entry = items.getEntriesByName('slow').pop()
    console.log(`${entry.name}: ${entry.duration}`)
    observer.disconnected()
})
performanceObsever.observe({ entryTypes: ['measure'] })

function slow() {
    performance.mark('start')
    const arr = []
    for (let i = 0; i < 1000000; i++) {
        arr.push(i*i)
    }
    performance.mark('end')
    performance.measure('slow', 'start', 'end')
    console.log(performance.getEntriesByName('slow'))
}
slow()